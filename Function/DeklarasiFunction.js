/**
 Mari kita ambil kasus sebelumnya. Kita tahu bahwa implementasi rumus untuk konversi angka suhu berskala celsius ke fahrenheit seperti berikut.

9 / 5 * {angka_suhu_celsius} + 32;

Untuk mencapai kode yang lebih simpel dan bersih karena akan digunakan berulang kali, kita dapat membungkusnya dengan function.
 */

const temperatureInCel = 90

function convertCelsiusToFahrenheit(temperature) {
    if (temperature !== undefined){
        const temperatureInFahrenheit = 9 / 5 * temperature + 32;

        console.log('Hasil konversi:', temperatureInFahrenheit);
    }
 
}

// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit); // [Function: convertCelsiusToFahrenheit] hanya mencetak function karna tidak memberikan invoke
convertCelsiusToFahrenheit() // tanpa argument hasil menjadi NAN
// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCel)

//Parameter dan Argument.
// Nilai yang diberikan dalam parentheses saat pemanggilan function, ia disebut sebagai argument. Argument ini bisa berasal dari nilai yang langsung dimasukkan atau nilai yang tersimpan dari variabel.

// Langsung memasukkan nilai
convertCelsiusToFahrenheit(100);

// Memasukkan nilai dengan variabel
const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);

//JavaScript memiliki solusi lain untuk mengatasinya jika tidak ada nilai apa pun yang disertakan ketika pemanggilan function. Ia adalah default parameter. Fitur ini memungkinkan parameter function memiliki nilai yang telah ditentukan atau default value jika ia tidak diberikan argument atau nilai apa pun. Berikut caranya.

function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;
 
  console.log('Hasil konversi:', temperatureInFahrenheit);
}
//Simpel saja. Kita tambahkan sintaksis assignment (=) dan diikuti dengan nilai default-nya. Dengan cara ini, parameter akan bernilai default value.

convertCelsiusToFahrenheit();
 
/* Output:
Hasil konversi: 122
*/
//Bagaimana jika kita ingin mengubah nilainya? Tenang, kita dapat memberikan nilai argument seperti biasanya. Masukkan saja nilai argument dalam parentheses saat function dijalankan. Nilai tersebut akan menggantikan default value.
//Jika mau, Anda dapat bermain langsung pada interactive code berikut.

// Jika mau, Anda dapat bermain langsung pada interactive code berikut.
function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;

  console.log('Hasil konversi:', temperatureInFahrenheit);
}

// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122

// Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194