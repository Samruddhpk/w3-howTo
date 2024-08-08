const pushBtn = document.querySelector(".push-btn");
const closeBtn1 = document.querySelector(".toggle");
const sidenav = document.querySelector(".sidenav");
const main = document.getElementById("main");


pushBtn.addEventListener("click", function () {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
});

closeBtn1.addEventListener("click", function () {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
});