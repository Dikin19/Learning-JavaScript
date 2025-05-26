/*
Dapat dilihat bahwa selain membuat object dengan beberapa properti, kita juga dapat membuat object dengan properti kosong. Properti yang ada di dalam object dapat ditambah dan dihapus. Di dalam kurung kurawal tersebut dapat ditulis properti dari object. 
Properti memiliki key dan value. Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun, seperti string, number, atau boolean. Properti yang ada di dalam object dipisahkan oleh koma.
 */
const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
// ketika key name value 'dcoding' ketika key dan value diberi koma lalu digabungkan didalama {} disebut sebagai property


/*
Mengakses menggunakan dot
Cara pertama untuk mengakses nilai properti yang ada di object adalah menggunakan dot notation (.). Contohnya ketika ingin mengakses properti name dari object user dapat ditulis seperti berikut ini.
*/
const user1 = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
console.log(user1.name, '==> menampilkan value dari key name') // maka kita akan ditampilkan value dari key nama.
/*Kita dapat memanggil nama object, kemudian menuliskan tanda titik yang diikuti dengan nama propertinya. Sebelum titik adalah nama object-nya dan setelah titik adalah nama properti yang ingin diakses. Kekurangan dari dot notation adalah nama key yang ingin diakses harus valid; tidak boleh mengandung spasi; tidak boleh diawali angka; dan tidak boleh mengandung spesial karakter. */


// Mengakses menggunakan square bracket untuk menutupi  kekurangan menggunakan dot notation, ada cara lain yaitu menggunakan square bracket. Contoh:
const user2 = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
console.log(user2['last name'], user2.age); // Output: Indonesia 9
console.log(user['name']);
// user2['last name'] digunakan untuk mengakses properti dengan spasi di dalamnya ataupun tidak memakai spasi bisa digunakan.
// user2.age adalah cara umum mengakses properti yang tidak memiliki spasi.


//Mengakses data menggunakan object destructuring
/*
Selain itu nilai properti dari object dapat diakses juga dengan cara lainnya yaitu menggunakan object destructuring. Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (variabel). Contohnya seperti berikut.
*/
const indentty = {
    name : 'dikin',
    age : 27,
    'full name' : 'Muhamad Sodikin',
    alamat : 'Depok'
}
const {'full name': fullName, age, alamat} = indentty;
console.log(fullName, age, alamat);
// Saat melakukan destructuring terhadap properti yang mengandung spasi seperti 'full name', Anda tidak bisa langsung menggunakannya sebagai nama variabel. Anda harus memberi alias (rename) properti tersebut.


//Destructuring object yang key-nya tidak ada akan mengembalikan nilai undefined. Oleh karena itu, kita bisa memanfaatkan default value ketika destructuring object seperti berikut ini agar nilainya tidak undefined.
const user3 = {
  'name': 'Dicoding',
  lastName: 'Indonesia',
  age: 9
};
const { name, lastName, isMale = false } = user3;
console.log(isMale); // Output: false
//Karena di object user tidak ada properti isMale, ketika properti tersebut diakses akan mengembalikan nilai false sesuai dengan nilai default yang kita berikan.
//Object destructuring sangat berguna sekali ketika Anda memiliki object dengan properti yang banyak dan ingin mendapatkan nilai masing-masing properti seperti contoh berikut.


//Untuk mendapatkan masing-masing properti dari object user, Anda hanya perlu melakukan object destructuring seperti berikut ini. 
const user5 = {
  id: 24,
  email: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};
const { id, email } = user5;
console.log(id, email);
//Tanpa menggunakan object destructuring, Anda akan melakukan hal berikut ini.
const user6 = {
  id1: 24,
  email1: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};
const id1 = user6.id1;
const email1 = user6.email1;
console.log(id1, email1);
//Hasilnya, object destructuring sangat memudahkan hidup para programmer JavaScript karena kita tidak perlu lagi melakukan hal yang rumit hanya untuk mendapatkan nilai properti dari object.


//Perlu dicatat bahwa mengakses properti yang tidak ada di dalam object akan menyebabkan error dan nilai kembaliannya adalah undefined yang mana hal ini jika tidak ditangani akan mengganggu program yang dibuat.
const user7 = { name: 'Dicoding' };
console.log(user7.age); // Output: undefined


//Mengubah nilai di properti object
//Untuk mengubah nilai properti di object sangat mudah asalkan kita mengetahui nama object dan nama properti yang ingin diubah. Memodifikasi object dapat dilakukan dengan assignment operator (=). 
const account = {
  balance: 1000,
  debt: 10,
  jenis: 'credit'
};
account.balance = 2000;
account.jenis = 'debit'
console.log(account.balance); // Output: 2000
console.log(account.jenis); // Output: 2000
//Object account yang awalnya memiliki nilai properti balance 1000 berubah menjadi 2000. Sebentar, sepertinya ada yang aneh. Object account diinisialisasi menggunakan const, kok bisa berubah nilainya? Bukannya const bersifat immutable (tidak dapat diubah)?
// gambar schema.png const.drawio
// menginialisasi adalah memberi nilai awal dan mengubah setelah di iniliasai
//Nilai yang ada di object dapat diubah karena object berbeda dengan number, string, dan boolean yang nilainya tidak mungkin berubah. Selain itu, nilai properti dapat diubah karena kita hanya mengubah nilainya bukan menginisialisasi ulang properti dari object tersebut. Ingat, mengubah dan menginisialisasi ulang adalah hal yang berbeda.


//Menghapus properti di object
//Untuk menghapus properti pada object dapat menggunakan operator delete dengan menuliskan nama object lalu tanda titik dan diikuti nama propertinya. Contohnya seperti di bawah ini.
const user8 = {
  'name': 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
delete user8.age;
console.log(user8); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }
//Selain menggunakan dot notation (.), kita juga bisa menggunakan operator delete dengan tanda kurung siku seperti berikut ini.
delete user8['name'];
console.log(user8);