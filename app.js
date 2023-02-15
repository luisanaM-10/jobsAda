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