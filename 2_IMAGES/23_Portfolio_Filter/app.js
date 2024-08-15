const btns = document.getElementsByClassName("button");
const column = document.getElementsByClassName("column");
const row = document.getElementsByClassName("row");


filterSelection("all");

function filterSelection(c) {
    if (c === "all") c = "";

    for (let i = 0; i < column.length; i++) {
        removeClass(column[i], "show");
        if (column[i].className.indexOf(c) > -1) addClass(column[i], "show");
    }
}


function addClass(element, name) {
    let i, arr1, arr2;

    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i] == -1)) {
            element.className += " " + arr2[i];
        }
    }
}


function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
