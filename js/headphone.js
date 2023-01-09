// For Laptop
const btnh = document.getElementById("btnheadphone");
const likeh = document.getElementById("headphonelike");
const inputh = document.getElementById("headphone");
const plusBtnh = document.getElementById("headphoneplus");
const minusBtnh = document.getElementById("headphoneminus");

function likeEventh() {
    likeh.classList.toggle("active");
}

function incrementh() {
    inputh.value++;
}

function decrementh() {
    if (inputh.value == 0) return;
    inputh.value--;
}

btnh.addEventListener("click", likeEventh);
plusBtnh.addEventListener("click", incrementh);
minusBtnh.addEventListener("click", decrementh);