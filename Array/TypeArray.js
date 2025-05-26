// Array dapat menyimpan nilai dengan tipe data apa pun, seperti number, object, dan string. Oleh karena itu, array bersifat dinamis sehingga kita dapat menambahkan element baru di dalam array. Array juga merupakan sebuah object. Anda dapat memanfaatkan method typeof untuk melihat jenis tipe data dari array tersebut seperti berikut.
const array = [1,2]
console.log(typeof array)

// Cara membuat array bisa menggunakan 3 cara 

// 1. Menggunakan object constructor Array dapat dibuat dengan constructor new Array() seperti berikut.
const array1 = new Array('coba')
console.log('Menggunakan object constructor')
console.log(array1);
const array2 = new Array(7) //array kosong yang mempuyai 7 slot kosong
console.log(array2)

// 2. Menggunakan sintaks array from.
// Cara lainnya untuk membuat array adalah menggunakan Array.from. Contohnya seperti di bawah ini.
const name = Array.from('dikin')
console.log('Menggunakan sintaks array from')
console.log(name);
// Array.from merupakan method untuk membuat array yang diperkenalkan di ES6. Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
const users = new Array('dikin', 'hilton', 'dikay');
const customer = Array.from(users)
console.log(customer, 'itu adalah hasil dari users new array dan menjadi customer dengan method Array.from   ')

// 3. Menggunakan array literal
// Terakhir, cara yang paling mudah, singkat, dan disarankan untuk membuat array adalah menggunakan object literals. Membuat array dengan literals lebih disarankan karena lebih sederhana dan mudah untuk dibaca. Contohnya seperti berikut ini.
// Element yang ada di dalam array literals dipisahkan oleh tanda koma. Element kosong juga dapat ditambahkan di dalam array literals seperti berikut.
const fruits = ['apple', 'banana', 'orange', 'manggo']
console.log('Menggunakan array literal')
console.log(fruits)