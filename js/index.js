// Header
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


