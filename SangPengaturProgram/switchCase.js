// Anda sudah memahami percabangan dengan if statement. Tahukah Anda bahwa if statement bukanlah satu-satunya control flow yang ada di bahasa pemrograman. Selain if statement, ada juga yang namanya switch statement.
// Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus. Switch dapat menggantikan beberapa pengecekan kondisi yang dilakukan oleh if. Selain itu, menggunakan switch membuat kode menjadi lebih readable dan ringkas. Inilah struktur dari switch case statement.

// Berikut adalah penggunaan switch case di javaScript

const fruit = 'a'

switch (fruit){
    case 'banana':
        console.log(`I am banana`);
        break;
    case 'apple':
        console.log(`I am apple`);
        break;
    case 'manggo':
        console.log(`I am manggo`);
        break;
    default :
        console.log('i am not fruit');
}
// Tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi (sebuah kondisi). Keyword case diikuti dengan nilai (banana/apple/orange/strawberry) yang ingin kita bandingkan dengan variabel yang ada di dalam switch (fruit). Jika nilai yang ada di case sama dengan nilai yang ada di fruit, blok kode setelah titik dua (:) akan dieksekusi. Selain itu, ada blok kode default yang berfungsi jika tidak ada nilai case yang sama dengan nilai variabel pada switch.
// Kini, Anda akan mulai berpikir dan bertanya. Apa bedanya dengan if-else? Toh, sama-sama melakukan pengecekan kondisi. Sebenarnya, switch case memang melakukan hal yang sama dengan if/else, switch hanya menggantikan penggunaan if yang berulang untuk mengecek kondisi. Perbedaan switch case dan if/else terdapat pada penulisan sintaks yang lebih readable dan beberapa kasus penggunaan switch lebih efisien. Perhatikan contoh pengecekan kondisi dengan if/else berikut ini.
const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}
// Nilai variabel day berisi angka sesuai dengan hari ini. Kita akan mengecek kondisi secara berulang dengan membandingkan nilai variabel day dengan yang ada di dalam if, dan ini merupakan hal yang sia-sia. Bandingkan jika kita menggunakan switch berikut ini.
/*
0 → Minggu  
1 → Senin  
2 → Selasa  
3 → Rabu  
4 → Kamis  
5 → Jumat  
6 → Sabtu
*/
const day1 = new Date().getDay();

switch (day1) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}

// Keyword break akan membuat pengecekan berhenti jika nilai variabel day sama dengan nilai yang ada case. Jika menggunakan switch terlihat lebih ringkas dan mudah dibaca, kan? Switch sangat bagus digunakan ketika banyak kondisi yang perlu dicek (misalnya pada contoh di atas), jika kondisi yang akan dicek masih sedikit misalnya hanya dua kondisi, gunakanlah if/else.    
// Sebelumnya kita sudah singgung sedikit tentang penggunaan keyword break yang ada di switch case. Keyword break berfungsi untuk menghentikan pengecekan kondisi sehingga blok kode yang ada di case lainnya tidak akan dijalankan. Seandainya break lupa atau tidak ditulis, apa yang terjadi? Coba perhatikan kode berikut ini.
const number = 2;

switch (number) {
case 1:
  console.log('Ini 1');
  break;
case 2:
  console.log('Ini 2 lupa menulis break sehingga lanjut ke blok 3');
case 3:
  console.log('Ini 3');
  break;
default:
  console.log('Ini default');
}
// Variabel number bernilai 2 sehingga kode yang ada di blok case 2 akan dieksekusi. Karena tidak ada keyword break di blok kode tersebut, blok case selanjutnya akan dijalankan sehingga hasilnya menjadi seperti di bawah ini.
// Ini 2
// Ini 3
//Itulah yang terjadi jika switch case tanpa keyword break di dalamnya. Jangan sampai lupa untuk menulis break di dalam blok case, ya!