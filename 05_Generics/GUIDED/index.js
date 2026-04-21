//Write a program that prints the numbers from 1 to 100. But for multipes of three print "Buzz" instead of the number and 
// for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
/** 
 * 
 * @param {String} input Dertan string
 * @return {String} Deretan string yang ada FizzBuzz
 */

function fizzBuzz(input) {
    /** @type {Array<String>} */
    const deretLarik = input.split(" ");

    let hasil = " ";

    for (const d of deretLarik) {
        const bil = +d;
        let fz = "";

        if (bil % 3 === 0) {
            fz += "Fizz";
        }

        if (bil % 5 === 0) {
            fz += "Buzz";
        }

        if (fz != "") {
            hasil += `${fz} `;
            continue;
        }

        hasil += `${bil} `;
    }
    return hasil;
}

console.log(
    fizzBuzz("123 35 1 24 15 15 66 25 1 2")
);