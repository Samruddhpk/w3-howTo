function openCity(cityName, element, color) {
    // Hide all elements with class="tabcontent" by default */

    var i, tabcontent, tablinks;


    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    // remove bg color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // show specific tab content
    document.getElementById(cityName).style.display = "block";

    // add specific color to button 
    element.style.backgroundColor = color;
}


// get element with id="defaultOpen" & click on it

document.getElementById("defaultOpen").click();