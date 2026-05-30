// Masalah yang ditemukan adalah bahwa fungsi belum diekspor.
// Solusi yang diterapkan adalah dengan menambahkan kata kunci 'export' sebelum deklarasi fungsi.

// function tambahPengitung(terkini, jumlah) {
//     terkini = terkini + jumlah;
//     return terkini;
// }

// Perbaikan : 

export function tambahPengitung(terkini, jumlah) {
    return terkini + jumlah;
}