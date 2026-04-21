function fizzBuzz(arr) {
    let hasil = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        if (num % 14 === 0) {
            hasil.push("FizzBuzz");
        } else if (num % 2 === 0) {
            hasil.push("Fizz");
        } else if (num % 7 === 0) {
            hasil.push("Buzz");
        } else {
            hasil.push(num);
        }
    }
    return hasil.join(" ");
}
module.exports = fizzBuzz;