const but_Bas = document.querySelector("#click_Bas");
const but_Med = document.getElementById("click_Med");
const but_Ava = document.getElementById("click_Ava");
const detDiv = document.querySelector("#ver_detalles");
const presentacion = document.querySelector(".presentacion");
let fig = document.querySelectorAll(".previewImg figure");
let preview = document.querySelector(".selectedPreview figure");
let salir = document.querySelector(".salir");
salir.addEventListener("click", ()=>{
    detDiv.classList.add("none");
})
but_Bas.addEventListener("click", ()=>{
    detDiv.classList.remove("none");

    
    preview.lastElementChild.setAttribute("src","img/landing-200-2.png");

    fig[0].firstElementChild.setAttribute("src","img/landing-200-2.png");
    fig[1].firstElementChild.setAttribute("src","img/Landing3_img.png");
    fig[2].firstElementChild.setAttribute("src","img/landing-200-3.png");
})
but_Med.addEventListener("click", ()=>{
    detDiv.classList.remove("none");

    preview.lastElementChild.setAttribute("src","img/landing 500mil-1.png");

    fig[0].firstElementChild.setAttribute("src","img/landing 500mil-1.png");
    fig[1].firstElementChild.setAttribute("src","img/landing 500mil-2.png");
    fig[2].firstElementChild.setAttribute("src","img/Landing1-1mill.png");
})
but_Ava.addEventListener("click", ()=>{
    detDiv.classList.remove("none");

    preview.lastElementChild.setAttribute("src","img/landing-1millon.png");

    fig[0].firstElementChild.setAttribute("src","img/landing1mill-2.png");
    fig[1].firstElementChild.setAttribute("src","img/landing1mill-3.png");
    fig[2].firstElementChild.setAttribute("src","img/landing-1millon.png");
})

for (const figures of fig){
    figures.addEventListener("click", ()=>{
        let aux = preview.firstElementChild;
       preview.replaceChild(figures.firstElementChild,preview.firstElementChild);
       figures.appendChild(aux);
    })
}   
// gsap.from('.main__hero_1',{
//     x:-300,
//     delay:0.5,
//     duration:1
// });
// gsap.from('.main__hero_2',{
//     x:900,
//     delay:0.5,
//     duration:1
// });