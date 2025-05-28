

// NAMED IMPORT → pakai {}
import { myFunction, Combination} from "./export.js";
// import { myFunction} from "./export.js";

// export default function -> tidak pakai {}
import funcs from "./export.js"
const {secoondFunc, counting} = funcs
// import secoondFunc from "./export.js";
// import counting from "./export.js"

console.log(myFunction('adik'));
console.log(secoondFunc('dikin'));
console.log(counting([1,2,3,4,'a']));
console.log(Combination({name1: 'sodikin', name2:'muhamad', nomor: [50,20,7]}));



/*
import myFunction from './anotherfile.mjs';
myFunction();

Contoh di atas akan menghasil tulisan “Ini adalah function export default”. Contoh tersebut dikatakan sebagai default import. Default import dapat bekerja jika di modul lainnya terdapat function/method/variable yang di-export default. 
Pada contoh di atas, export default-nya adalah myFunction. Default import juga memungkinkan kita untuk import function/method/variable yang namanya tidak harus sama dengan function/method/variable aslinya. Simak contoh berikut agar lebih terbayang.

import result from './anotherfile.mjs';
result();

Apa pun nama yang kita tulis ketika mengimpor function dari berkas anotherFile.mjs di main.mjs, function myFunction akan tetap terimport. Begitulah cara kerja default import. Lalu, bagaimana ketika kita ingin mengimpor dari suatu modul yang memiliki banyak function/method/variable yang di-export? Jawabannya adalah kita dapat menggunakan named import.
Berbeda dengan default import yang tidak memerlukan nama spesifik, named import memungkinkan kita mengimpor function/method/variable tertentu berdasarkan namanya. Saat menggunakan named import, pastikan nama fungsi yang ingin diimpor sesuai.

import { myFunction } from './anotherfile.mjs';
myFunction();

Ketika menggunakan named import, selain memastikan nama function sesuai, kita juga akan menuliskan nama function yang diimpor dalam kurung kurawal {}. Selain itu, kita juga dapat mengimpor lebih dari satu function/method/variable. Perhatikan contoh berikut ini.
import { name, email, age } from './anotherfile.mjs';
console.log(name);
console.log(email);
console.log(age);

Apa yang dilakukan pada contoh di atas sebenarnya sah-sah saja. Namun, ada cara lainnya yaitu menggunakan import *. Import * dapat dilakukan ketika function/method/variable yang ingin kita impor dari modul yang sama sangat banyak.
Jika function/method/variable yang ingin kita import sangat banyak, kita dapat menggunakan import *. Perhatikan contoh berikut.
import * as variable from './anotherfile.mjs';
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

Selain menggunakan tanda bintang (*), kita juga dapat menambahkan as variable (sebagai alias) untuk mengimpor seluruh variable yang berasal dari modul lainnya (pada contoh anotherfile.mjs). Apa perbedaan antara import {} dan import *?
import * memungkinkan kita untuk mengimpor seluruh module yang di export. Namun, kekurangannya adalah sulit untuk dibaca karena tidak eksplisit, sedangkan menggunakan import {} akan menjadi eksplisit sehingga kita bisa tahu apa saja function/method/variable yang ingin di-import.
Pada contoh sebelumnya, Anda telah melihat contoh penggunaan keyword as. Keyword tersebut digunakan pada import yang disebut dengan import alias. Import alias digunakan untuk mengubah nama dari function/method/variable yang berasal dari modul lain menjadi nama yang kita inginkan. Tujuan dari import alias adalah mempermudah ketika kita memiliki nama function/method/variable yang sama di beberapa modul. 
Misalnya, Anda memiliki function dengan nama myFunction di dua modul berbeda, yaitu user.mjs dan customer.mjs. Lalu, Anda ingin menggunakan kedua function tersebut di satu modul yaitu main.mjs.
Tanpa menggunakan import alias, Anda akan mendapatkan error seperti berikut.

Error tersebut terjadi karena myFunction diimpor sebanyak dua kali. Untuk mengatasi hal tersebut, gunakanlah import alias.

import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();

Alih-alih menggunakan myFunction, kita mengubah namanya menjadi userFunction dan customerFunction. Import alias juga meningkatkan readability kode yang ditulis. Kita langsung tahu konteks dan maksud dari function/method/variable yang diimpor contohnya userFunction yang berasal dari modul user dan konteksnya adalah user. Menggunakan alias saat mengimpor tidak hanya menghindari konflik seperti kasus sebelumnya, tetapi juga meningkatkan keterbacaan kode.
Dari tadi kita sudah bahas import dan di contoh Anda mungkin sudah melihat penggunaan export. Nah, untuk pembahasan mengenai export akan kita bahas di materi selanjutnya. Yuk, teruskan perjalananmu untuk mengetahui modularisasi!

*/

// Mengimpor Variable
// Tadi kita sudah mengekspor beberapa nilai dan function di berkas module.mjs. Sekarang, tambahkan berkas baru bernama index.js yang akan kita gunakan untuk mengimpor dan menggunakan variable dan function yang telah diekspor sebelumnya.
import { name1, favoriteFood1 as food, sayHi1 } from "./export.js";

console.log(name1);
// console.log(favoriteFood1);

// Setelah itu, kita dapat mencetak nilainya di Terminal.
// Selain mengimpor dengan named import, kita juga dapat mengimpornya menggunakan import alias. Tenang saja, hasilnya akan tetap sama.
console.log(food);

// Mengimport function
// Untuk mengimpor function dapat dilakukan dengan cara berikut ini.
console.log(sayHi1('Muhamad Sodikin'));

// Karena kita mengimpor seluruh nilai yang ada di module tersebut, gunakanlah keyword * agar lebih ringkas.
import * as user from './export.js';
console.log(user.name1);
console.log(user.favoriteFood1);
console.log(user.sayHi1(user.name1));
// Memahami konsep modularisasi dapat membantu Anda untuk membuat program JavaScript yang lebih modular, terstruktur, dan modern. Terus semangat untuk menguasai bahasa JavaScript ini dengan terus menyimak modul-modul berikutnya!


// Quiz Modularisasi
// import fungsi unique secara default
console.log();
console.log('quizmodularisasi export default');
import Unique from '../QUIZ/Modularisasi.js'
console.log('angka unique',Unique([1,1,2,2,2,3,3,4,4,5,5,'a','a','b','b']));

// import fungsi splitString secara named
console.log();
console.log('quizmodularisasi export named');
import { splitString } from "../QUIZ/Modularisasi.js";
console.log(splitString('Muhamadsodikin'));
console.log(splitString('Muhamad sodikin'));