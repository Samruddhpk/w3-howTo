function openCity(e, cityName) {
    var i, tabContent, tabLinks;


    // select all tabContent & display none
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    //get all tablinks & remove class "active"
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    // set 
    document.getElementById(cityName).style.display = "block";
    e.currentTarget.className += " active";
}


// set default open to london

window.addEventListener("load", function () {
    const london = document.getElementById("london");
    london.style.display = "block";
});