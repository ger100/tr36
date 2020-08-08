let xgomb = document.querySelectorAll("close[data-dismiss='alert']");
let bezaras = function (ev) {
    this.parentElemet.style.display = "none";
};
for (let i = 0; i < xgomb.length; i++) {
    xgomb[i].addEventListener("click", bezaras);
}