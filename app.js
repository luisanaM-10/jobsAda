const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


// función de btn burge
$("#btnBurge").addEventListener(`click`, (e) => document.getElementById(`div-burger`).classList.toggle(`oculto`))


// función de ocultar vista principal y mostrar formulario 
const isHiddenForm = (e) =>{
    $("#formulario").classList.remove("oculto")
    $("#vista-principal").classList.add("oculto")
}
$("#btn-create").addEventListener("click", isHiddenForm)
$("#btn-create2").addEventListener("click", isHiddenForm)


// función de btn home y btn de cancelar operación
const isHiddenHome = ("click", (e) =>{
    window.location.reload()
})
$("#btn-home").addEventListener("click", isHiddenHome)
$("#btn-home2").addEventListener("click", isHiddenHome)
$("#btn-cancelar").addEventListener("click", isHiddenHome)


// BASE URL 
const BASE_URL = "https://63eb9028bfdd4299674a8f24.mockapi.io/api/";

// CREAR ARTICULO (METODO POST)
const crearArt = async () => {
  try {
    const article = datosForm();

    const response = await fetch(`${BASE_URL}/articles`,{
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(article),
    });

    const jobs = await response.json();
  
  } catch (error) {
  alert("Error creating job");

  } finally {
  window.location.href = "index.html";
  }
};

$("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    crearArt();
  });


// datos de formulario
const datosForm = () => {
  return {
      title: $("#title-input").value,
      description: $("#description-input").value,
      location: $("#location-select").value,
      category: $("#category-select").value,
      seniority: $("#seniority-select").value,
    };
};


const pintarCards = (articles) => {
    $('#cards-content').innerHTML = "";
    for (const article of articles) {
        const { title, description, location, category, seniority, id } = article;
        $("#cards-content").innerHTML += `
              <div class="myClassCards card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">${title}</p>
                    </div>
                  </div>
                  <div class="content">
                    <p class="is-size-7 is-size-6-mobile">${description}</p>
                  </div>
                  <div class="media is-flex-wrap-wrap">
                    <p class="button is-primary is-light is-small" style="margin:2px">${location}</p>
                    <p class="button is-primary is-light is-small" style="margin:2px">${seniority}</p>
                    <p class="button is-primary is-light is-small" style="margin:2px">${category}</p>
                  </div>
                  <div class="control">
                    <button class="button is-small is-link btn-details" data-id="${id}">See Details</button>
                  </div>
                </div>
              </div>
        `;
    }
    for (const button of $$('.btn-details')){
      button.addEventListener("click", () => {
        const id = button.getAttribute('data-id');
        $("#vista-principal").classList.add('oculto');
        $('#editarOEliminarCard').classList.remove('oculto');
        console.log(id)
        getArticle(id)
      })
    }
}

// OBTENER LOS OBJ (METODO GET)
const getArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/articles`);
    const articles = await response.json();
    pintarCards(articles) 
    
  } 
  catch (error) {
      alert("Page not available at this time");
  }
};
getArticles()



// PARA EDITAR O ELIMINAR ARTICULO DE TRABAJO 

const getArticle = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/articles/${id}`);
    const article = await response.json();
    formEditarEliminar(article)
  } catch (error) {
    alert("error")
  }
};


const formEditarEliminar = ({ title, description, location, category, seniority, id}) => {
  $("#editarOEliminarCard").innerHTML = "";
  $("#editarOEliminarCard").innerHTML += `
      <div class="myClassCards card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${title}</p>
      </div>
    </div>
    <div class="content">
      <p class="is-size-7 is-size-6-mobile">${description}</p>
    </div>
    <div class="media is-flex-wrap-wrap">
      <p class="button is-primary is-light is-small" style="margin:2px">${location}</p>
      <p class="button is-primary is-light is-small" style="margin:2px">${seniority}</p>
      <p class="button is-primary is-light is-small" style="margin:2px">${category}</p>
    </div>
    <div class="control">
      <button class="button is-small is-primary btn-edit-article" data-id="${id}">Edit article</button>
      <button class="button is-small is-danger btn-delete-article" data-id="${id}">Delete article</button>

    </div>
  </div>
</div> 
  ` 
};

















