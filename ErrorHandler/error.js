// Sepandai-pandainya tupai melompat, akan jatuh juga. Sebaik apa pun kita menulis program, suatu saat akan terjadi error. Error yang terjadi bisa berasal dari expected error (error yang terduga) dan unexpected error (error yang tidak terduga). 
// Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun. JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling. Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.

// 1. Throwing Error
// Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun. JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling. Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.
// throw (object error)
// JavaScript memiliki built-in constructor untuk standar error meliputi Error, SyntaxError, dan sebagainya.  Perhatikan contoh berikut ini.

// const error = new Error('terjadi kesalahan')
// console.log(error);
// Pada contoh di atas, kita menggunakan built-in constructor milik JavaScript, Error. Kenapa kita perlu membangkitkan exception secara sengaja? Jawabannya adalah karena kita ingin program yang dibangun tidak mengalami crash ketika terjadi sesuatu di luar dugaan.
// Misalnya, kita memiliki program yang menerima inputan pembayaran dari pembeli. Normalnya adalah jumlah yang dibayarkan harus lebih besar dari harga barang. Lalu, ada sebuah kasus dimana pembeli membayar lebih kecil dari harga barang. Hal ini akan menyebabkan error di program milik kita. Oleh karena itu, kita perlu throw error ketika pembayaran kurang dari harga barang seperti contoh berikut.
// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error('Pembayaran kurang');
// }

// Cathing Error
// Sebelumnya, Anda sudah tahu cara untuk membangkitkan error. Kini, saatnya Anda mengetahui cara untuk menangkap error yang dihasilkan oleh program JavaScript yang Anda tulis.
// Try-Catch
// Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error. Try-catch memiliki dua blok utama yaitu try dan catch. Try merupakan blok kode yang akan menangani error, sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try. Perhatikan struktur dari try-catch berikut.
/**
 
        try {
        
        // code...
        
        } catch (err) {
        
        // error handling
        
        }

 */
// Blok kode catch akan diabaikan ketika tidak ada error yang terjadi di dalam blok try. Oleh karena itu, tulislah kode yang berpotensi error di dalam blok try. Perhatikan contoh berikut ini.
console.log('ketika tidak ada error catch tidak terbaca');
try {
  console.log('Memulai program');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena tidak ada error, blok ini akan diabaikan');
}
// Kode tersebut tidak akan mengeksekusi kode di dalam blok catch. Jika ingin blok kode catch dieksekusi, tambahkan error di dalam blok try. Perhatikan contoh berikut ini.
console.log();
console.log('ketika ada error cacth terbaca');
try {
  console.log('Memulai program');
  throw new Error('Error: Program berhenti');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena ada error, blok ini akan dieksekusi');
}
// Ketika error dibangkitkan, kode yang ada di bawahnya tidak akan tereksekusi. Pada kasus ini, program akan langsung lompat ke blok catch.

// Finally 
// finally adalah block code  yang berada di akhir try-catch. Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.
try {
  console.log('Ini try block');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}

// Ketika dijalankan, akan tampil di terminal/console yang mencetak tulisan “Ini try block“ dan “Ini finally block”. Dengan menggunakan finally, ia tidak peduli apakah blok try memiliki error atau tidak. 
console.log();
try {
  console.log('Ini try block');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}