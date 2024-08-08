
const ovrlyBtn = document.querySelector(".ovrly-Btn");
const clsBtnWAni = document.querySelector(".toggle");


function openNav() {
    document.querySelector(".sidenav").style.display = "block";
}

function closeNav() {
    document.querySelector(".sidenav").style.display = "none";
}

ovrlyBtn.addEventListener("click", openNav);


clsBtnWAni.addEventListener("click", closeNav)


