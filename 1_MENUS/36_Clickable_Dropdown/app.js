const dropBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");


dropBtn.addEventListener("click", showDropDown);

function showDropDown() {
    dropdownContent.classList.toggle("show");
}

window.addEventListener("click", (e) => {
    if (!e.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});