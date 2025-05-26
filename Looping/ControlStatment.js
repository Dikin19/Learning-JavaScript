// Control Statment
// Ketika melakukan perulangan, ada yang namanya control statement. Control statement berfungsi untuk menghentikan eksekusi kode. Beberapa statement yang masuk ke dalam kategori control statement adalah break dan continue. Pada contoh yang diberikan sebelumnya, mungkin Anda sudah ngeh bahwa kita menggunakan break statement. Untuk lebih detail, ikuti pembahasan berikut ini.

// 1. Break
// Break statement adalah cara kita untuk memberitahukan interpreter yang sedang mengeksekusi kode untuk berhenti dan langsung berpindah ke akhir dari percabangan atau perulangan. Perhatikan contoh berikut.

for (let i = 0; i < 10 ; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}
// Kode di atas akan mencetak angka 0 hingga sepuluh kali, tetapi akan terhenti ketika nilai variabel i sama dengan 5. Hal ini disebabkan oleh adanya statement break. Break akan menghentikan proses perulangan. 
// contoh lain dengan conditional switch
console.log();
console.log('break menggunakan switch case');
const number = 1
switch (number) {
    case 1:
        console.log('good job');
        break;
    case 2:
        console.log('dua');
        break;
    default:
        break;
}
// Di saat kondisi case terpenuhi maka program akan berhenti dan tidak akan melakukan pengecekan pada case berikutnya.

// 2. Continue
// Continue statement sama seperti break statement. Namun, alih-alih menghentikan eksekusi program, continue akan melanjutkan iterasi ke iterasi berikutnya. Continue statement hanya dapat digunakan di dalam body looping. Perhatikan contoh berikut ini.
console.log();
console.log('continue ketika sampai kondisi === 5 iterasi terhenti dan dilanjutkan lagi ke iterasi selanjutnya dan angka tidak akan menampilkan angka 5 ');
let arr = []
for (let j = 0; j < 10; j++) {
  if (j === 5) {
      continue;
  }
  arr.push(j)
}
console.log(arr);

console.log();
let str = ''
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue;
  str += (i)
}
console.log(Number(str));  // hasil: 1, 3, 5
// mudahnya continue adalah untuk skip loop