
const overlayBtn = document.querySelector(".overlay-btn");
const closeBtn = document.querySelector(".toggle");


function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
}
function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
}

overlayBtn.addEventListener("click", openNav);


closeBtn.addEventListener("click", closeNav)


