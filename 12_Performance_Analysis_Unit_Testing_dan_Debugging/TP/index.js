function main() {
    const data = [
        "123",
        456,
        "hello",
        78.9,
        true,
    ];

    for (let i = 0; i < data.length; i++) {
        const result = processData(data[i]);
        console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
    }
}

function processData(data) {
    // const str = data.toLowerCase(); // --> error karena data bisa berupa number atau boolean
    const str = String(data).toLowerCase(); // Mengubah data menjadi string terlebih dahulu sebelum diproses
    const num = parseInt(str);
    if (!isNaN(num) && str === String(num)) {
        return `Number: ${num * 2}`;
    }
    return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();