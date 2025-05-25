// 1. STRING
// String adalah tipe data yang merepresentasikan teks.
// Yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).
function ExmpleStr (){
    const Contohtstring1 = "Ini merupakan contoh string di JavaScript"
    const Contohtstring2 = 'Ini merupakan contoh string di JavaScript'
    const Contohtstring3 = `Ini merupakan contoh string di JavaScript`

    return {Contohtstring1,Contohtstring2,Contohtstring3}
}
// console.log(ExmpleStr());

//Baris baru hanya bisa dituliskan secara langsung ketika Anda menggunakan backticks. Untuk tanda kutip tunggal atau ganda, kita harus menggunakan notasi \n.
function exmStr2 () {
    const satu = "baris pertama. \nbaris kedua double quote"
    // const satu = 'baris pertama. \nbaris kedua single quote'
//     const satu = `baris pertama.
// baris kedua`

    return satu
}
// console.log(exmStr2());

//Backticks sering disebut juga sebagai template literals karena memungkinkan kita menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;
// console.log(text);

// 2. NUMBER
//Nilai Infinity dihasilkan ketika kita melakukan operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. Contohnya kode di bawah ini.
const result = 50 / 0;
// console.log(result); // output: Infinity

//Nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.
const result1 = Number('dikinstringdipaksamenjadinumber')
// console.log(result1);

// 3. BOOLEAN
//Untuk membuat nilai boolean, kita bisa menuliskan true atau false secara langsung. Contohnya seperti kode di bawah ini.
const completed = true; 
const passed = false; 
// console.log(completed, passed); // output: true false

//Nilai boolean juga biasa diperoleh dari hasil penggunaan operator perbandingan.
const isGreater = 5 > 2 
const falsee = 2 > 3 
const truee = 2 > 1
// console.log(isGreater, falsee, truee);

// 4. Nilai kosong (lebih baik memberikan nilai null daripada undefined)
//Null banyak diadopsi dalam berbagai bahasa pemrograman sebagai tipe data standar untuk menunjukkan nilai yang tidak ada. Untuk membuat null, kita cukup menulis sintaksis null.
const pesanNull = null
// console.log(pesanNull);

//Undefined hadir dalam JavaScript sebagai nilai implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun.
let message;
// console.log(message); // output: undefined

//Kta juga bisa secara eksplisit memberikan nilai undefined ke dalam sebuah variabel.
let message11 = undefined;
// console.log(message11); // output: undefined

//Sekilas, null dan undefined terlihat sama, tetapi sebenarnya mereka berbeda. Perbedaan ini dapat terlihat lebih jelas ketika kita membandingkan objek yang propertinya bernilai null dan undefined dalam format JSON.
const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };
// console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
// console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}
//Properti yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON karena JSON tidak mendukung tipe data undefined. Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.

// MENGUBAH NILAI ANTAR TIPE DATA
//1. Mengubah ke string menggunakan fungsi String() dan method .toString().
const number = 123
const boolean = true
function builtinString (str1,str2) {
    const strNumber = String(str1);
    const ToStrMethod = str2.toString();
    
    return {strNumber,ToStrMethod}
}
// console.log(builtinString(number,boolean));

//2.  untuk mengubah bentuk numerik, seperti “10”, “3.14” dapat dilakukan dengan menggunakan fungsi Number(). Berikut contoh penggunaannya.
const strNumber = '123';
const strFloat = '3.14';
const boolean1 = true;
function builtInNumber (num1,num2,num3){
    const numFromString = Number(num1);
    const floatFromString = Number(num2);
    const numFromBoolean = Number(num3);

    return {
        numFromString,
        floatFromString,
        numFromBoolean
        //Dalam number, nilai boolean direpresentasikan dengan angka 1 dan 0. Boolean true akan diubah menjadi 1, sedangkan false diubah ke 0.
    }
}
// console.log(builtInNumber(strNumber,strFloat,boolean1));

//3.Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer).
const cm = '20cm';
const px = '60px';
function builtInParseInt (cm,px){
    const IntFromCm = parseInt(cm);
    const IntFromPx = parseInt(px);

    return {IntFromCm, IntFromPx}
}
// console.log(builtInParseInt(cm,px)); // { IntFromCm: 20, IntFromPx: 60 }

// 4. fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter string satu per satu sehingga dapat mengubah numerik yang mengandung satuan.
const cm1 = '20.55cm';
const px1 = '64.23px';
function builtInParseFloat (cm1, px1){
    const floatFromCm = parseFloat(cm1);
    const floatFromPx = parseFloat(px1);

    return {
        floatFromCm,
        floatFromPx
    }
}
// console.log(builtInParseFloat(cm1, px1)); //{ floatFromCm: 20.55, floatFromPx: 64.23 }

// 5. Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean(). Sama seperti fungsi sebelumnya, kita cukup memberikan nilai yang akan diubah di antara tanda kurung. Berikut adalah contoh penggunaan fungsi Boolean().
/* const number1 = 123;
const string = 'Dicoding';
const empty = null;
const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);
console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
false
0
-0
0n
''
null
undefined
NaN
*/

// 6. tipe data number (age) secara otomatis dikonversi menjadi string karena operator + digunakan untuk penggabungan string.
const age = 20;
const message1 = 'Umurku: ' + age;
console.log(message1); // output: Umurku: 20

// 7. strNumber (yang merupakan string) dikonversi menjadi number karena operator * digunakan untuk operasi aritmetika.
const strNumber1 = '123';
const result2 = strNumber1 * 2;
console.log(result2); // output: 246

// 8. penggunaan operasi aritmetika yang mengubah nilai boolean menjadi number.
const bool = true;
const result3 = 1 + bool;

console.log(result3); // output: 2

