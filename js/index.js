// Headerre
// Hamburger menu

const menuBar = document.querySelector(".menuBar");
let menuOpen = false;
menuBar.addEventListener('click', _=>{
    if (!menuOpen) {
        menuBar.classList.add('open');
        menuOpen = true;
    } else {
        menuBar.classList.remove('open');
        menuOpen = false;
    }
});

//scroll animtion

// let topPage = document.querySelector("body");
// let centerText = document.querySelector(".centerText");
// let headerImg = document.querySelector(".headerImg");
// let bottomFade = document.querySelector(".centerFade");
// let bottomText = document.querySelector(".bottomText");

// window.addEventListener('scroll', function () {
//     let value = window.scrollY;
//     topPage.style.backgroundPosition = +window.pageYOffset + "px";
//     // topPage.style.bottom = +value * 0.5 + 'px';
//     // centerText.style.left = +value * 0.5 + 'px';
//     // headerImg.style.bottom = value * 0.5 + 'px';
//     // bottomFade.style.bottom = value * 0.5 + 'px';
//     // bottomText.style.bottom = value * 0.5 + 'px';
// });

//navPhoto

const navPhotolen = document.getElementById("navPhoto").querySelectorAll("a").length;
const navPhoto = document.getElementById("navPhoto").querySelectorAll("a");

for (let i = 0; i < navPhotolen; i++) {
    document.getElementById("navPhoto").querySelectorAll("a")[i].addEventListener('mouseenter', _=>{
        console.log(document.getElementById("navPhoto").querySelectorAll("a")[i])
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








