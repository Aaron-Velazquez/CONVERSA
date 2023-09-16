const but_Bas = document.querySelector("#click_Bas");
const but_Med = document.getElementById("click_Med");
const but_Ava = document.getElementById("click_Ava");
const detDiv = document.querySelector("#ver_detalles");
const presentacion = document.querySelector(".presentacion");
but_Bas.addEventListener("click", mostrarTar)
presentacion.addEventListener("click", ()=>{
    detDiv.classList.add("none");
})
function mostrarTar (){
    detDiv.classList.remove("none");
}