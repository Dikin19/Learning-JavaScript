// Menstructurkan data dengan set 
// Terakhir, struktur data yang kita bahas adalah set. Set adalah struktur data yang spesial dibandingkan dengan map, array, dan object. Kenapa dikatakan spesial?
//Jawabannya adalah karena set tidak memiliki key dan indeks ketika menyimpan data. Selain itu, data yang disimpan di dalam set akan bernilai unik artinya tidak akan ada data yang duplikat. Spesial, bukan?

// Membuat Set
// Set dapat dibuat dengan cara menuliskan object constructor set seperti contoh berikut ini.
console.log('Membuat Set');
const set = new Set();
console.log(set);
console.log('==============================================');

// Set juga dapat dibuat beserta dengan nilainya seperti berikut ini.
console.log('Membuat set bersama nilai');
const MySet = new Set([1,2,3])
console.log(MySet);
console.log('==============================================');

// Menyimpan nilai dalam set
// Untuk menambahkan nilai set setelah diinisialisasi dapat menggunakan method add.
console.log('Menyimpan nilai dan tidak dapat di duplicate');
const set1 = new Set()
set1.add(1);
set1.add('apple')
set1.add(1);
set1.add('apple')
set1.add('mangga')
console.log(set1, 'data hanya 1 tidak dapat diduplicate');
console.log('==============================================');

// Mengakses nilai Set
// Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan (looping). Cara pertama adalah menggunakan keyword for seperti berikut ini.
console.log('Mengakses nilai set dengan perulangan for');
const set2 = new Set()
set2.add('1. belajar set')
set2.add('2. Mengakses nilai set')
set2.add('3. dengan perulangan for of')

for (const nilai of set2){
    console.log(nilai);
}
console.log();
console.log('Menggunakan forEach')
set2.forEach((nilai) => console.log(nilai));
console.log();
set2.forEach((nilai)=>{
    console.log(nilai);
})

// Menghapus nilai set 
console.log();
console.log('Menghapus nilai set');
const SetDelete = new Set()
SetDelete.add(1)
SetDelete.add(2)
SetDelete.add(3)
console.log('sebelum didelete', SetDelete);
SetDelete.delete(1)
console.log('sesudah delete data nomor 1', SetDelete);