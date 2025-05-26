// While
// Perulangan di JavaScript tak hanya menggunakan for, tetapi ada cara lainnya yaitu while statement. While statement akan mengeksekusi statement ketika kondisinya bernilai truthy. Berikut struktur dari while statement.
/*
while (condition) 
     statement
*/

// Iterasi akan berjalan ketika kondisi bernilai true. Oleh karena itu, perlu untuk berhati-hati ketika mengecek kondisi tersebut. Akan terjadi infinite loop saat kondisinya bernilai true. 
// Supaya Anda mendapatkan gambaran penggunaan while, perhatikan contoh berikut ini.
console.log('while');
let i = 0;
while (i<5){
    console.log(`Angka ke ${i} bernilai ${i}.`);
    i++;
}
// Sama seperti contoh kode di materi for. Kode di atas akan mencetak tampilan di terminal/console sebanyak 5 kali. Keunggulan dari while adalah ia tidak perlu tahu jumlah data yang akan di-looping. 
// While hanya peduli dengan kondisi yang kita berikan. Oleh karena itu, jangan lupa untuk mengubah kondisi tersebut, misalnya pada contoh kita memberikan kondisi i < 5. Ketika while dieksekusi, jangan lupa untuk mengubah variabel i agar kondisinya berubah menjadi true atau false.
// Contoh berikut adalah contoh ketika kondisi i < 5 selalu bernilai true sehingga menyebabkan infinite loop (perulangan tanpa henti).

// contoh infinite loop
// let j = 0 
// while (j<5){
// console.log('nilai', i)
// } akanmenghasilkan infinite loop karena varibael tidak melakukan increament dan selalu 0
// Apa yang membuat infinite loop terjadi? Jawabannya adalah karena kita tidak mengubah nilai variabel i sehingga dia akan selalu bernilai 0 yang mana nol lebih kecil dari lima (kondisi akan selalu true). 

// Do-while
// Sebenarnya, while dan do-while tidak berbeda jauh. Perbedaan mereka terdapat pada urutan pengecekan kondisi. While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir. Berikut struktur dari do-while.
/*
do {
  Do something
} while (condition)
 */
// Karena do-while melakukan evaluasi kondisi di akhir, blok yang ada di dalam do setidaknya akan dijalankan satu kali. Perhatikan contoh berikut ini.
console.log();
console.log('do while');
let k = 0 
do {
    console.log(`Angka ke ${k} bernilai ${k}`);
    k++
} while (k < 5)
// Hasilnya masih sama seperti menggunakan while. 