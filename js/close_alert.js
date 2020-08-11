let alertCloseButton = document.querySelectorAll(".close[data-dismiss='alert']");
let bezaras = function(ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButton.length; i++) {
        alertCloseButton[i].addEventListener("click", bezaras);
}