// Untuk memberikan kemampuan function mengembalikan nilai (return statement), kita gunakan kata kunci return dan diikuti nilai kembaliannya.

function sumNumbers(a, b) {
  const result = a + b;
  return result;
}

const result = sumNumbers(2, 4);
console.log('2 + 4:', result);

/* Output:
2 + 4: 6
*/

//function akan terhenti jika eksekusi kode sudah mencapai return statement. Artinya, seluruh kode yang mengikuti statement ini tidak akan dijalankan. JavaScript akan menganggap program function sudah selesai jika statement ini sudah dibaca.
function generateGreetingWorldMessage() {
  return 'Halo, dunia!';
  console.log('Aku tidak akan tampil!');
}
 
const message = generateGreetingWorldMessage();
console.log(message);
 
/* Output:
Halo, dunia!
*/

// Anda bisa bermain dengan return value dalam function pada interactive code berikut.
function convertCelsiusToFahrenheit(temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/