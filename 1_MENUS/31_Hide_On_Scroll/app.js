let prevScrollPos = window.scrollY;
console.log(prevScrollPos);


window.addEventListener("scroll", () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";

    }

    prevScrollPos = currentScrollPos;
});