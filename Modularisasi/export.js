// NAMED EXPORT
console.log('ini named export');
export const myFunction = (students) => {
    let str = '';
    let arr = []
    for (let i = students.length-1; i >= 0; i-- ){
        const strr = students[i]
        arr.push(strr)
        str += students[i]

    }
    return {
        str,
        arr
    }
};

export const Combination = (obj) => {
    const {name1, name2, nomor} = obj
    // console.log(name1,name2);
    let str = ''
    let numResult = 0
    let numQuantity = 0
    for (const name of name2){
        str += name
    }
    for (const nextName of name1){
        str += nextName
    }
    for (const totalNum of nomor ){
        numResult += totalNum
        numQuantity ++
        str += totalNum

    }
    return {str, numResult, numQuantity} 
}

// export default
console.log('ini export default');
const secoondFunc = (name) => {
    let result = []
    for (const str of name)
    result.push(str)

    return result.reverse()
}

const counting = (arr) => {

    let result1 = 0;
    let result2 = '';

    for (const num of arr){
        // const allNum = Number(num)
        const allNum = num
        if (typeof allNum === 'string'){
            result2 += allNum
        } else{
            result1 += allNum
        }

    }
    return {result1, result2}

}

export default { secoondFunc, counting};


/*

Export
Export adalah sesuatu yang kita gunkan untuk melabeli sesuatu function/method/variabel
agar dapat diakses dari luar modul saat ini. Export terdiri dari dua jenis, yaitu default export dan named export. Perhatikan contoh named export berikut ini.

// named export
export const name = 'John';
export const email = 'john@gmail.com';
export const age = 25;

Cara tersebut merupakan cara export sebelum deklarasi dilakukan. Cara lainnya adalah export setelah deklarasi dilakukan seperti berikut ini.

//export default
const name = 'John';
const email = 'john@gmail.com';
const age = 25;
export { name, email, age };

Hasilnya akan tetap sama. Variable yang sudah diekspor (name, email, dan age) dapat digunakan di module lainnya. Cara mengimpor named export adalah dengan menuliskan nilainya di dalam sebuah kurung kurawal. Perhatikan contoh berikut ini.
import { name, email, age } from './user.mjs';
console.log(name, email, age);

Variable name, email, dan age akan diimpor dengan named import (yang sudah kita bahas di materi sebelumnya) sebelum digunakan. 
Terakhir, ada teknik yang disebut dengan default export. Default export adalah cara kita untuk mengekspor minimal satu function/method/variable di sebuah modul. Dengan menggunakan default export, modul lain yang ingin menggunakan nilainya tidak perlu tahu spesifik namanya karena secara default sudah ada function/method/variable yang diekspor. Perhatikan contoh berikut ini.
import goodMorning from './anotherfile.mjs';
import anotherName from './anotherfile.mjs';

goodMorning();
anotherName();

Mengimpor nilai dari default export tidak membutuhkan kurung kurawal seperti contoh di atas. Contoh di atas akan mencetak dua tulisan Good morning! di Terminal/Console. Apakah dengan menggunakan default export kita hanya bisa mengekspor satu fungsi, metode, atau variabel saja? Tentu tidak. 
Secara teknis, kita bisa mengekspor lebih dari satu fungsi, metode, atau variabel, tetapi hal ini tidak disarankan ketika menggunakan export default. Sebaiknya, ketika menggunakan default export, satu modul satu nilai. Di JavaScript, satu modul hanya bisa memiliki satu default export. Tujuan dari hal ini adalah agar struktur kode lebih jelas dan memudahkan navigasi ketika ingin mencari suatu modul.
import sayHi, { sayGoodBye } from './anotherfile.mjs';

sayHi(); // Hai, ini default export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs

Named export cocok digunakan ketika ingin mengekspor banyak nilai dari satu modul. Selain itu, named export mengharuskan kita untuk menulis nama function/method/variable secara spesifik ketika mengimpornya. Menulis nama secara spesifik membuat codebase menjadi konsisten.

Default export cocok digunakan untuk menghindari conflict ketika mengimpornya karena kita tidak perlu menulis function/method/variable sesuai dengan namanya. Selain itu, default export membuat struktur lebih jelas karena dalam satu module hanya ada satu nilai yang diekspor.

*/


// Cara Menggunakan module

// Sebelumnya, kita sudah tahu konsep modularisasi di JavaScript. Anda mungkin sudah tahu juga cara menggunakan impor atau ekspor. Di materi ini, kita akan coba menggunakan module di JavaScript.

// MengEkspor Variable
// Misalnya, ada suatu module yang ditulis di berkas module.mjs. Di dalam berkas tersebut, kita akan menulis satu variabel yang akan kita ekspor. Untuk mengekspornya dapat dilakukan seperti berikut.
export const name = 'Muhamad sodikin';
// Selain mengekspor variable yang bertipe string, kita juga dapat mengekspor variable yang bertipe array.
export const favoriteFood = ['pizza', 'pasta', 'sushi']
// Mengekspor function
//Cara untuk mengekspor function tak berbeda jauh dengan cara mengekspor variable.
export function sayHi (name){
    console.log(`Hi, ${name}`);
}
// Agar tidak perlu menulis kata kunci export di setiap nilai yang ingin diekspor, Anda dapat mengekspor di akhir berkas seperti berikut.

const name1 = 'John';
const favoriteFood1 = ['pizza', 'pasta', 'sushi'];
 
function sayHi1(name) {
  return`Hi, ${name}!`
}
 
export { name1, favoriteFood1, sayHi1 };

// Nilai yang telah diekspor tersebut siap digunakan di mana pun.
