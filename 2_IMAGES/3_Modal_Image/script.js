const windowImg = document.querySelector(".windowImg");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeBtn");
const caption = document.querySelector(".caption");
const modalImg = document.querySelector(".modal-img");

windowImg.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});