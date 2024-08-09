const slides = document.getElementsByClassName("slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const columnImages = document.getElementsByClassName("img");
const caption = document.getElementById("caption");

let slideIndex = 1;


const showSlides = (n) => {

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    for (i = 0; i < slides.length; i++) {
        columnImages[i].className = columnImages[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    columnImages[slideIndex - 1].className += " active";
    caption.innerHTML = columnImages[slideIndex - 1].alt;
};

showSlides(slideIndex);


// next

nextBtn.addEventListener("click", () => {
    showSlides(slideIndex += 1);
});

prevBtn.addEventListener("click", () => {
    showSlides(slideIndex -= 1);
});


// set image by column images 
const currentSlide = (n) => {
    showSlides(slideIndex = n);
};