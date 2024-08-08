const fullWidth = document.querySelector(".full-width-btn");
const closeBtn3 = document.querySelector(".toggle");
const sideNavibar = document.querySelector(".sidenav");
const links = document.querySelector(".links");



fullWidth.addEventListener("click", function () {
    sideNavibar.style.width = "100%";
    links.style.textAlign = "center";


});

closeBtn3.addEventListener("click", function () {
    sideNavibar.style.width = "0";
    links.style.textAlign = "left";
});