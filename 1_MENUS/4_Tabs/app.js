

function openCity(evt, cityName) {
    var i, tabContent, tabLinks;

    // get all elements with className = "tabContent" & hide all of them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }


    // get all elements with class "tabLinks" and remove class "active"
    tabLinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    // show current tab and add "active" class to button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.addEventListener("load", function () {
    const london = document.getElementById("London");
    london.style.display = "block";
});