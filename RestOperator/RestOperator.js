// Ketika bekerja dengan function, sering kali function menerima argument yang kemudian menjadi parameter. Ketika argument-nya masih sedikit, seperti satu atau dua belum menimbulkan masalah. Masalah terjadi ketika argument-nya sudah melebihi dua karena terlalu banyak argument pada function membuat kode menjadi tidak bersih (tidak sesuai prinsip clean code) sehingga sulit untuk dibaca dan di-maintenance.
//Solusinya adalah menggunakan rest operator. Rest operator memungkinkan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir. 

const MyFunc = (... name) =>{
    console.log('name :', name);
}
MyFunc('dikin', 'adik', 'cantik')

//Rest parameter memungkinkan kita untuk menulis argument yang tak terbatas pada function. Rest parameter akan menangani argument tersebut menjadi sebuah array dan meneruskannya ke function. Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian dari array yang dihasilkan rest parameter.
console.log();
console.log('=========================================');
console.log('spread argument');
const SpreadArgument = (number, ...name) =>{
    console.log('number :', number);
    console.log('name :', name);
}
SpreadArgument(77, 'Muhamad', 'Sodikin')

// Karena rest parameter menangani argument sebagai array, method array.length juga dapat digunakan pada rest parameter seperti berikut ini.
console.log();
console.log('=========================================');
const SpreadLenght = (...name)=>{
    console.log('Jumlah lenght : ', name.length);
    console.log('name :', name);
}
SpreadLenght('Muhamad', 'Martin', 'Sadiah')

//Tak hanya method array.length, kita juga dapat menggunakan method array lainnya pada rest parameter.
//Selain pada parameter fungsi, rest operator juga kerap digunakan ketika kita melakukan destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.
const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites; // destructuring

console.log();
console.log('=========================================');
console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */

// Tak terasa, Anda sudah menguasai struktur data di JavaScript. Menguasai struktur data membuat Anda lebih leluasa dalam menulis program JavaScript karena Anda sudah tahu struktur data apa yang cocok untuk menangani kasus tertentu. Selanjutnya, kita akan bahas mengenai alur program!
