// Sepintas mungkin akan terpikir oleh Anda, apakah komputer selalu mengeksekusi kode dari atas ke bawah? Jawabannya adalah tidak. Tidak semua program berjalan lurus seperti jalan tol. Seperti contoh di kasus sebelumnya (memesan makanan secara daring), kode program tidak akan dieksekusi semuanya ketika dijalankan. Kode program akan menjadi dua alur atau lebih. Kode akan dieksekusi tergantung dari kondisi yang ditetapkan dan ini disebut dengan conditional flow.
// Conditional flow adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan. Jika suatu kondisi terpenuhi, kode akan dieksekusi dan kode yang lainnya akan diabaikan. Kondisi ini ditentukan dari inputan yang diberikan oleh pengguna.
// Perhatikan contoh di kehidupan sehari-hari berikut ini. Pada suatu sore, ketika berjalan-jalan di mal, Anda merasa lapar dan terpikirkan untuk mampir sejenak di sebuah resto untuk makan. Namun, sebelum makan Anda berpikir sebelum mengambil keputusan. Apakah makan di restoran mal yang harganya lebih mahal atau makan di warung kaki lima? Atau makan di rumah? Semua pilihan tersebut bergantung terhadap suatu kondisi, katakanlah kondisi keuangan Anda. Apakah Anda sudah gajian? Apakah saat ini akhir bulan? Apakah di rumah sudah ada makanan?

// Conditional Flow di JavaScript terdiri dari If Statement dan Switch Case. Yuk, kita simak pembahasannya.
// Adakalanya kita membuat program yang hanya dijalankan ketika suatu kondisi terpenuhi. Untuk melakukan hal itu, kita bisa menggunakan if statement. If statement merupakan fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak. Bentuk umumnya adalah seperti berikut ini.
// If statment 
if (expression){
    statment
}
// If statement akan mengeksekusi blok jika kondisi terpenuhi (true). Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi. Perhatikan contoh berikut ini.
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');
// Jika nilai gajian bernilai true, blok kode di dalam if akan dijalankan sehingga program tersebut akan mencetak di terminal hasil seperti berikut ini.
// Apakah if statement hanya bisa menangani satu cabang kondisi saja? Jawabannya adalah tidak. Kita bisa menggunakan keyword else untuk menambah pengecekan kondisi lainnya. Perhatikan contoh berikut ini.
const score = 80;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}
// Pada contoh tersebut, kita menggunakan operator perbandingan. Variabel score akan menentukan apakah masuk ke dalam blok if atau else. Karena variabel score bernilai 80, blok yang ada di dalam if akan dieksekusi. Lalu, jika memiliki cabang kondisi lebih dari dua, Anda dapat mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if.
const score1 = 85;

if (score1 > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score1 > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}
// Ketika dijalankan, JavaScript pertama kali mengecek apakah score bernilai lebih dari 90 atau tidak? Jika tidak terpenuhi, JavaScript akan melanjutkan pengecekan ke kondisi yang kedua. Karena score bernilai lebih dari 80, akan tampil di terminal pesan “Selamat, Anda lulus ujian!” dan blok else tidak akan dijalankan.
