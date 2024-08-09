const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");




let slideIndex = 1;
showSlides(slideIndex);



// next / previous controls


prevBtn.addEventListener("click", () => {
    showSlides(slideIndex -= 1);
});

nextBtn.addEventListener("click", () => {
    showSlides(slideIndex += 1);
});

// dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }


    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




// auto slide

// function showSlidesAuto() {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
// }


// showSlidesAuto();