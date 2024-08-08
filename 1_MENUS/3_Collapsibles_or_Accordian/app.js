

var acc = document.getElementsByClassName("accordian");

var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // add or remove active class
        this.classList.toggle("active");


        // get panels as it is the next element sibling of each accordians
        var panel = this.nextElementSibling;


        // make display - block or none
        if (panel.style.display === 'block') {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}