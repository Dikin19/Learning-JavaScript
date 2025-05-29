// Spread Operator dengan Array hampir sama dengan cara spread object
// Selain di object, spread operator juga dapat digunakan di array seperti berikut ini.
const array1 = ['Dikin'];
const array2 = ['Indonesia', 'Jl. Hj Midan'];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

// Untuk menggabungkan dua array menggunakan spread operator cukup mudah, kan? Spread operator juga dapat digunakan untuk menyalin sebuah array seperti berikut.
console.log();
console.log('copy arr');
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];
console.log(copy); // Output: ['apple', 'banana', 'cherry']
// Spread operator pada dasarnya sama seperti menggunakan looping untuk mendapatkan nilai yang ada di dalam object maupun di dalam array.