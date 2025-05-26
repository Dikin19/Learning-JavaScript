// For adalah cara looping yang paling umum dilakukan di JavaScript. Semenjak kehadiran ES6, for terbagi lagi menjadi beberapa jenis. Saat ini, for terdiri dari for loop, for in, for of. Simak penjelasan berikut ini.

// 1. For Loop
// Pertama kita akan bahas for loop. dari for loop tampak seperti berikut ini.
/*
for (variabel awal; test kondisi; icreament){
    do something
}
Variabel awal adalah nilai variabel sebelum looping dilakukan. Test kondisi adalah evaluasi dari looping, jika bernilai false, looping akan berhenti. Increment adalah nilai variabel yang bertambah setiap looping dilakukan. Perhatikan contoh berikut ini.
*/
console.log('For Loop');
for (let i = 0; i < 5; i++){
    console.log(`Angka ke-${i} adalah ${i}`);
} // mulai dari angka 0 sampai 4 karena ketika increament++ 5 tidak terbaca karena tanda < bunkan <=
// Pada contoh di atas, nol merupakan nilai awal sebelum looping dijalankan. Pengecekan kondisi i < 5 sebelum looping, ketika bernilai false, looping akan terhenti. Terakhir, i++ artinya adalah nilai i akan bertambah setiap looping dilakukan. Jika dijalankan, kode tersebut akan mencetak tampilan di terminal/console seperti berikut ini.

// 2. For In (untuk object)
// For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek. Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length. Berikut contoh penggunaan for in.
console.log();
console.log('===================================');
console.log('For In prefer untuk object');
const person = {
    name: 'dikin',
    alamat: 'hj midan',
    age : 17,
}
for (const property in person){
    console.log(person, 'ini adalah person yang sudah masuk dalam for in 3 kali pengulangan karna data peron mempunyai object dengan 3 lenght');
    console.log();
    console.log(property);
    console.log(person[property]);
    console.log(`ini adakah key ${property} yang mempunya value ${person[property]}`);
}
console.log();
const obj = { name: 'Fulan', age: 20 };

for (const key in obj) {
  console.log(key, 'ini adalah key dari obj');           // name, age
  console.log(obj[key], `ini adalah nilai dari ${key} yang sudah dilooping`);      // Fulan, 20
}

// 3. For Of (untuk array jika ingin untuk object harus menggunakan Object.keys / Object.entries)
console.log();
console.log('===================================');
console.log('For Of prefer untuk Array');
const arr = ['a', 'b', 'c'];

for (const item of arr) {
  console.log(item);// a, b, c
}
// ambil langsung isinya dari array, string, atau iterable lain.
// 
const arr1 = ['a', 'b', 'c'];
const obj1 = { x: 1, y: 2 };

// for...in
console.log('for in');
for (const key in obj1) console.log(key); // x, y

// for
console.log('for');
for (let i = 0; i < arr1.length; i++) console.log(arr1[i]); // a, b, c

// for...of
console.log('for of');
for (const value of arr) console.log(value); // a, b, c

console.log('for of untuk object menggunakan Object.keys / Object.entries');
const obj2 = { a: 1, b: 2 };

// Ambil array dari key-nya
console.log('Ambil array dari key-nya');
for (const key of Object.keys(obj2)) {
  console.log(key, obj2[key]); // a 1, b 2
}

// Atau ambil array dari [key, value] pair
console.log('Atau ambil array dari [key, value] pair');
for (const [key, value] of Object.entries(obj2)) {
  console.log(key, value); // a 1, b 2
}

// Kehadiran for of dimulai pada ECMAScript 2015 (ES6). For of berbeda dengan for in. For of lebih sederhana karena kita tidak perlu memikirkan property dan key. Perhatikan contoh berikut.
const kindOfAnimal = ['ayam', 'bebek', 'kuda']
for (const animal of kindOfAnimal){
    console.log('mengambil value dari array');
    console.log(animal);
}
// Dengan for of datanya bisa kita dapatkan langsung tanpa menambahkan indeks atau nama propertinya seperti contoh di atas. Sintaksnya lebih ringkas karena kita hanya perlu memanggil variabel item. Variabel item merupakan sebuah variabel yang digunakan untuk menampung element dari array. For of dapat digunakan pada object yang bisa diiterasi seperti arrays, strings, sets, dan maps.
