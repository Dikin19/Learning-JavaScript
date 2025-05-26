// Menstructurkan Data dengan Map
// Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. Kalau sama seperti object, lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object. Map dapat menggunakan key dengan tipe data apa pun, tidak seperti object yang hanya menerima string. Jadi perbedaan mendasarnya terletak pada key yang digunakan.

// 1. Membuat Map
// Map dapat dibuat dengan mudah yaitu menggunakan object map constructor seperti berikut ini.
console.log('===========================================');
console.log('Membuat map kosong');
const map = new Map();
console.log(map,);

// Kita telah berhasil membuat map yang bernilai kosong. Selain itu, kita juga dapat menambahkan data di dalam constructor ketika menginisialisasi map seperti berikut.
// kita lanjutkan untuk menginilisasi map
// Membuat Map
console.log('===========================================');
console.log('Product map yang sudh di inilisasi');
const productMap = new Map([
    ['clothes', {price:100, number:1}   ],
    ['sweater', {price: {uniqlo:10, nb: 15}}],
    ['Uniqlo', 200],
    ['NB', 100]
]) // Map di JavaScript hanya menerima array 2 elemen per pasangan: [key, value].
// walaupun data yang dimasukan bervariasi tetap map hanya menerima element [key, value]
console.log(productMap, 'prodcutMap yang sudah di inilisasi');
//Setelah berhasil menyimpan nilai ke dalam map, kita dapat mengakses nilainya berdasarkan key tertentu dengan method get.
console.log(productMap.get('clothes'));
console.log('value dari price' ,productMap.get('clothes')?.price)
console.log(productMap.get('sweater'));
console.log('value dari Nb',productMap.get('sweater')?.price?.nb);
console.log(productMap.get('NB'));

// dibawah ini adalah cara mengakses value yang dalam kita juga bisa menggunakan (? optional chanining untuk menghindari error dan mendapatkan hasil null atau udefined) 
console.log('===========================================');
console.log('Cara akses value yang cukup complex');
console.log('Mengunakan optional chaining (?) untuk menghindari error dan dapat nilau undefined ');
const bookMap = new Map([
    ['novel', {title: 'Laskar Pelangi', pages: 300}],
    ['komik', {title: 'One Piece'}],
]);
console.log(bookMap.get('novel')?.pages);     // ?
console.log(bookMap.get('komik')?.pages);     // ?
console.log(bookMap.get('majalah')?.title);   // ?
const data = {
    user: {
        name: "Budi",
        address: {
            city: "Jakarta"
        }
    }
};
console.log(data.user.address.city);        // ?
console.log(data.user.profile?.bio);        // ?
console.log(data.admin?.name);              // ?


// Menyimpan nilai di Map
// Untuk menyimpan nilai ke dalam map, gunakanlah method set. Set menerima dua nilai yang pertama adalah keynya dan yang kedua adalah valuenya. Set memiliki struktur seperti berikut: set(key, value). Perhatikan contoh berikut ini.
console.log('===========================================');
console.log('Menyimpan nilai di Map');
const map1 = new Map()
map1.set('name', 'dikin')
console.log(map1);
//Selain menggunakan string sebagai key pada Map, kita juga dapat menggunakan number sebagai key-nya seperti berikut ini.
map1.set(1, 'number two')
console.log(map1);

// Menghapus Nilai di Map
// Menghapus nilai di map dapat menggunakan method delete. Method ini akan menghapus nilai spesifik berdasarkan key yang kita tentukan.
console.log('===========================================');
console.log('Mengahpus nilai di Map');
const map3 = new Map()
map3.set('name', 'dikin')
map3.set('age', 17)
console.log(map3);
map3.delete('age')
console.log(map3, 'setelah dihapus');