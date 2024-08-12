const elements = document.getElementsByClassName("column");

const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const btnFour = document.querySelector(".btnFour");

let i;


btnOne.addEventListener("click", one);
btnTwo.addEventListener("click", two);
btnFour.addEventListener("click", four);

function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}


function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}


function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}