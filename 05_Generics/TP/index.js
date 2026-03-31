function hitung(str, mode) {
    let count = 0;

for (const c of str) {
    if (mode === "semua") {
            count++;
    } else if (mode === "huruf") {
        if (c === ' ') continue;
            count++;
        }
    }
    return count;
}

const str = "Praktikum KPL Modul Lima";
console.log(hitung(str, "semua"));
console.log(hitung(str, "huruf"));