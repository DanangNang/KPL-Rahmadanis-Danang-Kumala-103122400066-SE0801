/**
 * Persamaan Linear Satu Variabel dan dua suku
 * @param {string} x 
 * @param {number} a 
 */

export function plsv_dua(x, a) {
    // 3x = 12
    const coeff = parseInt(x);
    const hasil = a / coeff;

    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}

/**
 * Persamaan  Linear Satu Variabel dan tiga suku
 * @param {sring} x 
 * @param {number} a 
 * @param {number} b 
 */
export function plsv_tiga(x, a, b) {
    // y - 8 = 10
    let hasil = 0;
    // jika hanya satu koefisien
    if (x.length === 1) {
        hasil = b - a;
    } else if (x.length === 2) {
        const coeff = parseInt(x);
        hasil = (b - a) / coeff;
    }

    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}

/**
 * 
 * @param {string} x 
 * @param {number} a 
 * @param {number} b 
 */
export function ptlsv_dua(x, a, op, b) {
    // x - 2 <5
    let hasil = 0;

    const balikkan_op = {
        ">": ">",
        "<": "<",
        ">=": ">=",
        "<=": "<=",
    }
    const coeff = parseInt(x)

    if (x.length === 1) {
        hasil = b - a;
    } else if (x.length >= 2) {
        
        hasil = (b - a) / coeff;
    }
    const op_baru = coeff <= -1 ?
    balikkan_op[op] : op

    return {
        "x": "x",
        "dengan": op_baru,
        hasil
    }
}