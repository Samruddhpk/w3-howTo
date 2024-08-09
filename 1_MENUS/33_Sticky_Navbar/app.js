const navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;


window.addEventListener("scroll", myFunction);


function myFunction() {
    window.scrollY >= sticky ?
        navbar.classList.add("sticky") :
        navbar.classList.remove("sticky");
}