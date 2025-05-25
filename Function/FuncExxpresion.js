// Ubah function pengonversi suhu kita menjadi function expression.
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
Perbedaan lainnya dari function expression ialah tidak memiliki hoisting padanya sehingga kita tidak dapat memanggil atau menjalankan function ini sebelum dideklarasikan.
*/

// Function tersebut dinyatakan sebagai first-class citizen. Apa maksud dari diperlakukan mirip variabel? Pada JavaScript, function dapat kita jadikan sebagai nilai dan disimpan dalam variabel, nilai argumen function lain, mengembalikan nilai function dari suatu function, dsb. Mari kita lihat contohnya.

function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/* Output:
8
Kita memiliki program kalkulator sederhana. Berdasarkan contoh program di atas, kita punya dua function. Function multiply untuk melakukan operasi perkalian, sedangkan calculate sebagai function utama yang perlu dijalankan jika ingin melakukan proses aritmetika dua angka.

Identifier function multiply kita jadikan sebagai nilai argumen pertama dari calculate saat pemanggilannya. Artinya, parameter operation akan bernilai function dari multiply. Oleh karena itu, kita bisa melakukan invoke (menjalankan) parameter tersebut layaknya function.
*/

// Bagaimana dengan mengembalikan nilai function dari suatu function? Mari kita lihat contohnya.
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

/* Output:
20
33
*/

/*
Dapat disimpan sebagai nilai dalam variabel.
Dapat dikembalikan dari suatu function.
Dapat dikirimkan sebagai parameter bagi function lain.
Dapat disimpan dalam elemen array dan object literal.
Dapat memiliki method dan properties sendiri.
*/