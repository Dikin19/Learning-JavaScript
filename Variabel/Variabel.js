// Beberapa statment menjadi 1 barus bisa juga ditulis menjadi 3 statemen dan 3 baris
const age = 26; 
const name = "Dikim"; 
console.log(`Myname is ${name} and myage is ${age}`);
// const age = 20; const name = "John"; console.log(`Myname is ${name} and myage is ${age}`); 

// Expression Merupakan bagian dari sebuah statement yang menghasilkan nilai.
const result = 4 + 4
// Result adalah statment dan 4+4 adalah expression
console.log(result);

// Cara membuat commentar
//Maka dari itu, tanda // biasanya disebut dengan single line comment, sedangkan tanda /* */ disebut dengan multi line comment.

// Teks ini akan diabaikan oleh interpreter
console.log('Hai, Readers!');
console.log('Hai, JavaScript!');
// console.log('Hai, Dicoding!');

/* Uuntuk membuat comentar lebih dari satu baris

 * TODO
 * 1. Buatlah variabel bernama `PI` dan isikan dengan nilai 3.14
 * 2. Cetak nilai variabel PI di terminal menggunakan console.log
 */

const PI = '3.14';
console.log(PI);

// example const
const id = 123;
let username = 'Dicoding';

console.log(id); // output: 123
console.log(username); //output: Dicoding

//example let
let usernameLet = 'Dicoding';

console.log('Sebelum diubah:', usernameLet); // output: Sebelum diubah: Dicoding

usernameLet = 'dicodingacademy';

console.log('Setelah diubah:', usernameLet); // output: Setelah diubah: dicodingacademy


// const hanya bisa penamaan yang sama didalam 2 function yang berbeda
function printCompany () {
    const name = "pertamina"
    const legal = "LLL"

    console.log(name)
    console.log(legal)
}

printCompany()

function printCompany2 () {
    const name = "pertamina2"
    const legal = "LLL2"

    console.log(name)
    console.log(legal)
}

printCompany2()

function printCompany3 () {
    const name = "pertamina3"
    const legal = "3"

//    return `${name}, ${legal}`
//    return {name, legal}
   return [name, legal]
}

console.log(printCompany3());


// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang salah
/*
const first-name = 'Fulan'; // tidak boleh mengandung karakter -
const last name = 'Lestari'; // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
*/

// nama variabel yang benar
const firstNamee = 'Fulan';
const _secondName = 'Fulana';
 
// nama variabel yang salah karena diawali dengan angka
/*
const 1stName = 'Fulan';
const 2ndName = 'Fulana';
*/