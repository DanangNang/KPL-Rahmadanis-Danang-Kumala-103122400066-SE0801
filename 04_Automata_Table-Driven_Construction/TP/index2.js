let textInput = document.getElementById("textInput");
let total = document.getElementById("Total");
let upper = document.getElementById("Upper");
let lower = document.getElementById("Lower");

function countLetters() {
    let text = textInput.value;

    let totalCount = text.length;
    let upperCount = 0;
    let lowerCount = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            upperCount++;
        }
        if (char >= 'a' && char <= 'z') {
            lowerCount++;
        }
    }
    total.textContent = totalCount;
    upper.textContent = upperCount;
    lower.textContent = lowerCount;
}
textInput.addEventListener("input", countLetters);

function toUpper(){
    document.getElementById("editor-kecil").value =
        textInput.value.toUpperCase();
}

function toLower(){
    document.getElementById("editor-kecil").value =
        textInput.value.toLowerCase();
}

function darkMode() {
    document.body.classList.add("dark-mode");
}

function lightMode() {
    document.body.classList.remove("dark-mode");
}