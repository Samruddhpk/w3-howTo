function openPage(pgName, element, color) {
    var i, tabContent, tabLinks;

    // make display none
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // remove the bg of tablinks/buttons

    tabLinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }

    // show specific tab content
    document.getElementById(pgName).style.display = "block";

    element.style.backgroundColor = color;
}


document.getElementById("defaultOpen").click();
