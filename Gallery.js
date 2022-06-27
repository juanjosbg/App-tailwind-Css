const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

const btnRetrocede = document.getElementById("btn-retrocede");
const btnAdelanta = document.getElementById("btnAdelanta");


function openFulImage(refence) {
    fulImgBox.style.display = "flex";
    fulImg.src = refence; 
}

function closeImg() {
    fulImgBox.style.display = "none";
}