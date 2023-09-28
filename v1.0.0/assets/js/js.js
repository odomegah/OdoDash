let aside = document.querySelector("aside");
let fermerAside = document.querySelector(".fermer-aside");
let ouvrirAside = document.querySelector(".ouvre-aside");

ouvrirAside.addEventListener('click',()=>{
    aside.style.display = 'block';
})

fermerAside.addEventListener('click',()=>{
    aside.style.display = 'none';
})