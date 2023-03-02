const $ = (selector) => document.querySelector(selector);

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





