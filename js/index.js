

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
// Hamburger menu

const menuBar = document.querySelector(".menuBar");
let menuOpen = false;
menuBar.addEventListener('click', _=>{
    if (!menuOpen) {
        menuBar.classList.add('open');
        menuOpen = true;
        document.querySelector(".menu").classList.add('active');
    } else {
        menuBar.classList.remove('open');
        document.querySelector(".menu").classList.remove('active');
        menuOpen = false;
    }
});

//scroll animtionx

//navPhoto

const navPhotolen = document.getElementById("navPhoto").querySelectorAll("a").length;
const navPhoto = document.getElementById("navPhoto").querySelectorAll("a");

for (let i = 0; i < navPhotolen; i++) {
    document.getElementById("navPhoto").querySelectorAll("a")[i].addEventListener('mouseenter', _=>{
        setInterval
        document.getElementById("navPhoto").querySelectorAll("a")[i].querySelector('h1').classList.add('h1Hover');
        document.getElementById("navPhoto").querySelectorAll("a")[i].querySelector('p').classList.add('pHover');
        document.getElementById("navPhoto").querySelectorAll("a")[i].querySelector('img').classList.add('imgHover');
        console.log("Mouse enter");
        
    
    });
    document.getElementById("navPhoto").querySelectorAll("a")[i] .addEventListener('mouseleave', _=>{
    
        document.getElementById("navPhoto").querySelectorAll("a")[i].querySelector('h1').classList.remove('h1Hover');
        document.getElementById("navPhoto").querySelectorAll("a")[i].querySelector('p').classList.remove('pHover');
        console.log("Mouse leave");
        document.getElementById("navPhoto").querySelectorAll("a")[i].querySelector('img').classList.remove('imgHover');
        //navIMGhover.style.border = '5px dotted orange';
    });
}








