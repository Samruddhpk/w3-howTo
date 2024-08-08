const pushOpBtn = document.querySelector(".push-opacity-btn");
const closeBtn2 = document.querySelector(".toggle");
const sideNavbar = document.querySelector(".sidenav");
const mainContent = document.getElementById("main");


pushOpBtn.addEventListener("click", function () {
    sideNavbar.style.width = "250px";
    mainContent.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

closeBtn2.addEventListener("click", function () {
    sideNavbar.style.width = "0";
    mainContent.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
});