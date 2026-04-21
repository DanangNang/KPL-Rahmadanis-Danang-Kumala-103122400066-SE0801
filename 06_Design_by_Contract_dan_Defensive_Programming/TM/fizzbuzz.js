function is_notfizzbuzz(number) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
        throw new TypeError("Input harus berupa angka valid");
    }
    if(number % 3 === 0 || number & 5 === 0) {
        return false;
    }
    return true;
}

console.log(is_notfizzbuzz(1)); 
console.log(is_notfizzbuzz(3));
console.log(is_notfizzbuzz(5));
console.log(is_notfizzbuzz(30));
console.log(is_notfizzbuzz(7));
console.log(is_notfizzbuzz(null));
console.log(is_notfizzbuzz(NaN));
console.log(is_notfizzbuzz(Infinity));