// Headerre
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.onload = _=>{
    document.querySelector(".menu").style.display = "flex"
}
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
};


window.addEventListener('scroll', function() {
    let scrl = window.pageYOffset;
    if (scrl > 600) {
        document.querySelector(".portfolio").classList.add("active");
        document.querySelector(".education").classList.add("active");
        document.querySelector(".comertialWork").classList.add("active");
        document.querySelector(".myPreset").classList.add("active");

        
    }else if(scrl > 3500){

    }
});