const but_Bas = document.querySelector("#click_Bas");
const but_Med = document.getElementById("click_Med");
const but_Ava = document.getElementById("click_Ava");
const detDiv = document.querySelector("#ver_detalles");
const presentacion = document.querySelector(".presentacion");
but_Bas.addEventListener("click", ()=>{
    detDiv.classList.remove("none");
    // agregarImg(but_Bas);
})
but_Med.addEventListener("click", ()=>{
    detDiv.classList.remove("none");
    // agregarImg(but_Med);
})
but_Ava.addEventListener("click", ()=>{
    detDiv.classList.remove("none");
    // agregarImg(but_Ava);
})
presentacion.addEventListener("dblclick", ()=>{
    detDiv.classList.add("none");
})
// function agregarImg (boton){
    
// } 
// function mostrarTar (){
//     // console.log(boton);
//     detDiv.classList.remove("none");
// }
let fig = document.querySelectorAll(".previewImg figure");
let preview = document.querySelector(".selectedPreview figure");
for (const figures of fig){
    figures.addEventListener("click", ()=>{
        let aux = preview.firstElementChild;
       preview.replaceChild(figures.firstElementChild,preview.firstElementChild);
       figures.appendChild(aux);
    })
}