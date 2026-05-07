// Menghitung jumlah huruf A-Z / a-z
function countLetters(text) {
    const letters = text.match(/[A-Za-z]/g);
    return letters ? letters.length : 0;
}

// Menghitung jumlah kata
function countWords(text) {
    const words = text.match(/[A-Za-z]+/g);
    return words ? words.length : 0;
}

// Export agar bisa diimpor
module.exports = {
    countLetters,
    countWords
};