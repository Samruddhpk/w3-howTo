const slideRightBtn = document.querySelector(".slide-right");
const slideDownBtn = document.querySelector(".slide-down");
const noAnimationBtn = document.querySelector(".no-animate");

const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");


slideRightBtn.addEventListener("click", () => {
    // console.log("clicked");
    overlay.classList.add("show-overlay-from-right");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show-overlay-from-right");
});


// slide down
slideDownBtn.addEventListener("click", () => {
    overlay.classList.add("show-overlay-from-up");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show-overlay-from-up");
});


// no animation

noAnimationBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});