let textInput = document.getElementById("textInput");
let total = document.getElementById("total");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");

function countLetters() {
    let text = textInput.value;

    let totalCount = text.length;
    let upperCount = 0;
    let lowerCount = 0;
}
textInput.addEventListener("input", countLetters);

function toUpper(){
    textInput.value = textInput.value.toUpperCase();
    countLetters();
}

function toLower(){
    textInput.value = textInput.value.toLowerCase();
    countLetters();
}

function toCapitalize(){
    let text = textInput.value.toLowerCase().split(" ");
    for(let i=0;i<text.length;i++){
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    textInput.value = text.join(" ");
    countLetters();
}