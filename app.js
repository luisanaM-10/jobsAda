// función de btn burge
const menuBurgerBtn = (e) => document.getElementById(`div-burger`).classList.toggle(`oculto`)

document.getElementById("btnBurge").addEventListener(`click`, menuBurgerBtn)


// función de ocultar vista principal y mostrar formulario 
const isHiddenForm = (e) =>{
    document.getElementById("formulario").classList.remove("oculto")
    document.getElementById("vista-principal").classList.add("oculto")
}
document.getElementById("btn-create").addEventListener("click", isHiddenForm)
document.getElementById("btn-create2").addEventListener("click", isHiddenForm)



// función de btn home y btn de cancelar operación
const isHiddenHome = ("click", (e) =>{
    window.location.reload()
})
document.getElementById("btn-home").addEventListener("click", isHiddenHome)
document.getElementById("btn-home2").addEventListener("click", isHiddenHome)
document.getElementById("btn-cancelar").addEventListener("click", isHiddenHome)


// BASE URL 
const BASE_URL = "https://63eb9028bfdd4299674a8f24.mockapi.io/api/";

const $ = (selector) => document.querySelector(selector);

// CREAR ARTICULO (METODO POST)
const registerJob = async () => {
  try {
    const article = getJobForm();

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

const getJobForm = () => {
  return {
      title: $("#title-input").value,
      description: $("#description-input").value,
      location: $("#location-select").value,
      category: $("#category-select").value,
      seniority: $("#seniority-select").value,
    };
};

$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  registerJob();
});



