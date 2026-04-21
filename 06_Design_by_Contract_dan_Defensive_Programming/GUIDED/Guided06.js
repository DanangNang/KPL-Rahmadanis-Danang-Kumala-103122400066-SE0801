// function divide(a, b) {
//     //Prakondisi
//     if (typeof a !== 'number' && typeof b !== 'number') {
//         throw new TypeError('Salah Tipe Data, harus berupa bilangan bulat');
//     }
    
//     //Postkondisi
//     if (b === 0) {
//         throw new TypeError('Pembagi tidak boleh nol');
//     }
//     const hasil = a / b;
    
//     //Pascakondisi
//     if (hasil * b === a) {
//         return hasil;
//     }

//     return hasil;
// }

// try {
//     console.log(
//         divide(6848, 864)
//     ); 
// } catch (error) {
//     console.error(error);
// }
    
//Program yang mengubah bilangan menurut basis yang diinginkan (biner atau desimal)
// const convert = (number=undefined, base=undefined) => {
//     if (typeof number !== 'number' || typeof base !== 'number') {
//         throw new TypeError('Salah Tipe Data, harus berupa bilangan bulat');
//     }
// }