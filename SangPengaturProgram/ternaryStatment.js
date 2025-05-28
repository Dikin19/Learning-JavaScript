// JavaScript menyediakan sintaksis yang lebih ringkas yaitu menggunakan ternary operator. Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan tanda tanya (?). 
// Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:

/* 
1. Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
2. Ekspresi yang dieksekusi jika kondisinya benar.
3. Ekspresi yang dieksekusi jika kondisi salah.
*/

// Berikut adalah bentuk dasar dari ternary operator.
// let result = condition ? value1 : value2;

const price = 50000
const isMember = true
const discount = isMember? 0.1:0;
console.log(`selamat anda mendapatkan discount sebesar ${price*discount}`);
// Kode di atas memiliki variabel isMember dengan nilai true sehingga ketika dieksekusi akan mendapatkan discount sebesar 0.1 atau 10%. Anda juga dapat mencoba untuk mengganti nilai variabel isMember menjadi false sehingga hasilnya tidak akan mendapatkan discount. So, menggunakan ternary operator membuat kode lebih ringkas dan readable, kan?
