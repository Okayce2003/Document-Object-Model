// For Phone
const btnp = document.getElementById("btnphone");
const likep = document.getElementById("phonelike");
const inputp = document.getElementById("phone");
const plusBtnp = document.getElementById("phoneplus");
const minusBtnp = document.getElementById("phoneminus");

function likeEventp() {
    likep.classList.toggle("active");
}

function incrementp() {
    inputp.value++;
}

function decrementp() {
    if (inputp.value == 0) return;
    inputp.value--;
}

btnp.addEventListener("click", likeEventp);
plusBtnp.addEventListener("click", incrementp);
minusBtnp.addEventListener("click", decrementp);