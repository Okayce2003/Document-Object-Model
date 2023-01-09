// For Laptop
const btnl = document.getElementById("btnlaptop");
const likel = document.getElementById("laptoplike");
const inputl = document.getElementById("laptop");
const plusBtnl = document.getElementById("laptopplus");
const minusBtnl = document.getElementById("laptopminus");

function likeEventl() {
    likel.classList.toggle("active");
}

function incrementl() {
    inputl.value++;
}

function decrementl() {
    if (inputl.value == 0) return;
    inputl.value--;
}

btnl.addEventListener("click", likeEventl);
plusBtnl.addEventListener("click", incrementl);
minusBtnl.addEventListener("click", decrementl);