//Preloader
document.querySelector("body").style.visibility = "hidden";
document.querySelector("figure").style.visibility = "visible";
window.addEventListener("load", _=>{
    document.querySelector("figure").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
})

const windowCenter = window.innerHeight / 2;

window.onload = _=>{
    document.querySelector(".menu").style.display = "flex";
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
function offset(el) {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const firstEl = offset(document.querySelector(".portfolio")), firstRes = firstEl.top;

const secondEl = offset(document.querySelector(".warpCircle")), secondRes = secondEl.top;

const thirdEl = offset(document.querySelector(".centerPH_1")),  thirddRes =  thirdEl.top;


window.addEventListener('scroll', function() {
    let scrl = window.pageYOffset + windowCenter;
    console.log(scrl)
    if (scrl > firstRes){
        document.querySelector(".name").classList.add("active")
        setTimeout(() => {
            document.querySelector(".name").style.display = "none"
        }, 2000);
        document.querySelector(".name_2").classList.add("active")
        document.querySelector(".portfolio").classList.add("active");
        document.querySelector(".education").classList.add("active");
        document.querySelector(".comertialWork").classList.add("active");
        document.querySelector(".myPreset").classList.add("active");
    }
});

window.addEventListener('scroll', function() {
    let scrl = window.pageYOffset + windowCenter;
    if(scrl > secondRes){
        document.querySelector(".circle svg").classList.add("active");
    }
});

window.addEventListener('scroll', function() {
    let scrl = window.pageYOffset + windowCenter*1.5, len = document.querySelectorAll(".photoCenter a").length;
    if(scrl > thirddRes){
        for (let index = 0; index < len; index++) {
            document.querySelectorAll(".photoCenter a")[index].classList.add("active");
        }
        
    }
});
