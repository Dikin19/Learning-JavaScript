// Data di dalam array terurut sehingga untuk mengaksesnya dapat dengan mudah dengan menggunakan nilai indeks-nya. Indeks merupakan angka yang digunakan untuk merujuk ke nilai di dalam array, sehingga kita bisa menambahkan, mengubah, atau menghapus nilainya. Indeks array dimulai dari angka 0. Untuk mengakses nilai di dalam array, gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi dari nilai yang ingin diakses seperti berikut.
const arr = [1,2,3,4]
console.log('cara akses element array')
console.log(arr[2])// karna index dimulai dari 0 maka index ke 2 dari arr adalah 3

// 1. indexing (Mengubah data)
console.log('=============================================================')
let myArr = [1,2,3,4,5,6]
console.log('nilai awal sebelum indexing');
console.log(myArr);
myArr [0] = 10; // MAKA akan mengganti nilai 1 yang berada pada index 0 dari variabel myArr menjadi 10
console.log('nilai setelah indexing')
console.log(myArr)

// 2. Menggunakan Push (Menambahkan data)
console.log('=============================================================')
let myPushArr = [1,2,3,4]
console.log('nilai awal sebelum di push')
console.log(myPushArr)
myPushArr.push(7)
console.log('nilai setelah push')
console.log(myPushArr)

// 2. Menghapus element dan Data Array 
console.log('=============================================================')
let myDeleteArr = ['satu','dua','tiga','empat']
console.log('nilai awal sebelum didelete');
console.log(myDeleteArr);
delete myDeleteArr[1]
console.log('nilai setelah delete');
console.log(myDeleteArr, 'berhasil dihapus tetapi masih ada element yg belum terhapus');
//Data pada array sudah berhasil dihapus, tetapi element-nya masih ada. Lalu, bagaimana cara untuk menghapus element dan datanya? Untuk melakukan hal itu dapat dilakukan dengan menggunakan method splice() seperti berikut ini.
myDeleteArr.splice(1,1)
console.log(myDeleteArr, 'setelah di slice untuk menghapus elementnya');
myDeleteArr.splice(1,2)
console.log(myDeleteArr, 'menghapus dari index 1 dan total hapus 2 index jadi index 1 dan 2 dihapus');
// Terakhir, ada cara lainnya yaitu menggunakan method shift dan pop. Kekurangan dari kedua method ini adalah tidak sefleksibel delete dan splice karena shift hanya menghapus element pertama dan pop menghapus element terakhir.
console.log('=============================================================')
console.log('ada shift hanya menghapus element awal dan pop menghapus element akhir');
const ShiftAndPop = [1,2,3,4,5,6]
console.log('sebelum melakukan method shift', ShiftAndPop);
ShiftAndPop.shift()
console.log('setelah melakukan method shift', ShiftAndPop);
console.log('sebelum melakukan method pop',ShiftAndPop);
ShiftAndPop.pop()
console.log('setelah melakukan method pop',ShiftAndPop);

// 3. Array Destructuring
//Destructuring digunakan untuk melihat isi dari array. Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign. Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.
console.log('=============================================================')
const students = ['dikin', 'adik', 'abang']
const [manis, cantik, ganteng] = students
console.log(manis);
//Dapat dilihat bahwa variabel greeting didapatkan dari array introduction tanpa harus mengaksesnya menggunakan index. Destructuring array mempermudah kita untuk memecah struktur data menjadi bagian-bagian yang lebih kecil seperti contoh kode di atas. Destructuring array hanya dapat dilakukan jika array tersebut tidak bernilai null atau undefined. Ketika melakukan destructuring pada array yang bernilai null atau undefined akan menyebabkan error. 

//Array Methode
// Perlu diketahui bahwa array memiliki banyak sekali method atau fungsi bawaan yang dapat digunakan untuk memudahkan proses pengelolaan atau penggunaannya. Kita hanya akan membahas beberapa method array yang sering digunakan dalam kehidupan sehari-hari oleh programmer JavaScript.
console.log('=============================================================')
//1. Reverse adalah method yang digunakan untuk membalikkan nilai array. Metode reverse() mengembalikan array dengan element yang dibalik.
const myArray3 = ['Android', 'Data Science', 'Web'];
console.log('sebelum', myArray3);
myArray3.reverse();
console.log(myArray3, 'reverse'); // Output: [ 'Web', 'Data Science', 'Android' ]
//Element pertama array akan menjadi element terakhir akhir dan sebaliknya. Method reverse tidak akan membuat array baru, tetapi mengatur ulang elemen tersebut di dalam array yang sudah ada.

//2. Sort adalah method yang digunakan untuk mengurutkan nilai array. Loh, katanya array sudah menyimpan data secara terurut kok masih perlu mengurutkan array menggunakan sort? Memang array sudah mengurutkan data sesuai dengan indeks-nya tetapi mengurutkan berdasarkan indeks saja belum cukup. 
//Terkadang, kita butuh untuk mengurutkan array berdasarkan kriteria tertentu sesuai kebutuhan aplikasi. Secara default, array akan diurutkan secara ascending. Contohnya seperti berikut.
const myArray = ['Web', 'Android', 'Data Science'];
console.log('sebelum', myArray);
myArray.sort();
console.log(myArray, 'sort berdasarkan abjad'); // Output: [ 'Android', 'Data Science', 'Web' ]
// Secara default, method sort akan mengurutkan berdasarkan abjadnya.