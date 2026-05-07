const prompt = require('prompt-sync')();
const { countLetters, countWords } = require('./textUtils');

// Input dari pengguna
const text = prompt("Masukkan kalimat: ");

console.log("Jumlah Huruf:", countLetters(text));
console.log("Jumlah Kata:", countWords(text));