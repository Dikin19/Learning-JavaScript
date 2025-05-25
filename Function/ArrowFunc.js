// ari kita langsung saja melihat perubahan function convertCelsiusToFahrenheit menjadi arrow function.

let temperatureInFahrenheit = null;

// Deklarsi function biasa
function convertCelsiusToFahrenheit (){
  const result = (9 / 5) * temperature + 32;
  return result;
}

// Deklarasi function expresion
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194


// Refactor Kita bisa menyederhanakan penulisan arrow function body agar tidak menggunakan tanda kurung kurawal sama sekali. Mari kita lihat saja implementasinya dengan mengubah contoh kasus.
let temperatureResult;

// Arrow function
const convertCelsiusToFahrenheit1 = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureResult = convertCelsiusToFahrenheit1(90);
console.log('Hasil konversi:', temperatureResult);

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax1 = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureResult = convertCelsiusToFahrenheitInConciseSyntax1(90);
console.log('Hasil konversi:', temperatureResult);

// Lihat! Function convertCelsiusToFahrenheitInConciseSyntax memiliki penulisan sintaksis yang sangat sederhana. Jauh lebih sederhana dari sebelumnya. Di sana kita menghilangkan beberapa hal, yaitu tanda kurung kurawal dan keyword return. Sebagai gantinya, return value langsung diletakkan setelah fat arrow. Wah, hebat sekali, ya!
/**
hal yang perlu dicatat adalah pembuatan arrow function hanya tersedia dalam bentuk expression. Oleh karena itu, kita selalu menyimpan nilainya dalam variabel. Selain itu, arrow function dengan gaya seperti ini hanya mampu menampung satu return value. Silakan bungkus dengan tanda kurung kurawal buka-tutup jika memerlukan banyak kode.
Demikian pembahasan kita mengenai arrow function. Ini sekaligus sebagai akhir perjalanan dari modul Bermain dengan Function. Selamat, Anda sudah melewati berbagai rintangan!
 */

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(4));