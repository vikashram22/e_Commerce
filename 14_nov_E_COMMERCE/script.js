const hamburger = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const ul = document.querySelector("#navbar");

hamburger.addEventListener("click", ()=>{
    ul.style.right = "0";
})

xmark.addEventListener("click", ()=>{
    ul.style.right = "-300px";
})