Pengantar Modularisasi Harmonis
“Coding like poetry should be short and concise.”  - Santosh Kalwar, Computer Scientist.

Singkat dan jelas, itulah tujuan yang ingin kita capai ketika menuliskan kode suatu program. Agar tujuan itu tercapai, Anda harus bisa memecah kode menjadi keping-keping. Tujuan dari memecah kode agar mudah dibaca dan ringkas. Modularisasi dapat membantu Anda untuk memecah kode program Anda sehingga lebih terstruktur, singkat, dan jelas. 

Berikut adalah objektif pembelajaran yang akan dicapai pada modul ini.

Menjelaskan sebuah masalah yang dapat dipecahkan dengan teknik modularisasi.
Membedakan antara default export dan named exports, begitu juga dengan default import dan named imports.
Mengidentifikasi "module" dalam konteks JavaScript.
Mengimplementasikan modularisasi untuk mengekspor function, variable, atau nilai lain di dalam sebuah module.
Menggunakan nilai function, variable, atau nilai lain yang diimpor dari sebuah module.


Mengenal Modularisasi
Program yang bertambah besar dan memiliki banyak fitur, kodenya pun akan menjadi kompleks. Idealnya, kode yang ditulis memiliki struktur yang jelas dan ringkas. Untuk menjaga kode tetap terstruktur dan ringkas ketika programnya semakin kompleks, butuh upaya yang besar. Salah satu cara agar kode program yang kompleks menjadi tetap terstruktur dan jelas adalah dengan menerapkan modularisasi. 

Modularisasi adalah cara kita untuk memecahkan kode program yang kompleks dan besar menjadi bentuk yang lebih sederhana dan ringkas. Implementasi dari modularisasi di JavaScript adalah dengan membuat berkas-berkas terpisah per bagian function/method yang disebut dengan modul. Kode yang ada di dalam Modul dapat digunakan oleh modul lainnya dengan cara export dan import.

dos-e8a6b3a18dc66aa3c9a8c681ffaedce020240730104435.jpeg

Manfaat dari modularisasi adalah dapat menyelesaikan masalah terkait struktur dan kode program. Modularisasi dapat mempermudah kita untuk memahami keseluruhan struktur program sehingga gampang untuk berkolaborasi. Modularisasi membuat struktur kode menjadi rapi, memahami struktur dan membaca kode program yang sudah kompleks pun menjadi lebih mudah. Selain itu, function/method yang ditulis dapat digunakan kembali di tempat lainnya (reusable). Misalnya, satu function dapat digunakan di dua fitur yang berbeda.

JavaScript awalnya tidak memiliki konsep modularisasi. JavaScript hanya mengenal scope yang sama dari function/method/variable. Namun, semenjak adanya ECMAScript 2015, JavaScript bisa menggunakan konsep modularisasi dan dapat menggunakan keyword import dan export.  

Import memungkinkan kita untuk memasukkan function/method/variable dari modul lain. Export memungkinkan kita untuk mengeluarkan function/method/variable ke modul lain agar dapat digunakan.

Apakah Anda kepo untuk mengetahui lebih detailnya? Yuk, lanjut ke materi selanjutnya!

// Oke! Jadi gini, ESM di Node.js itu singkatan dari ECMAScript Modules.

Kalau kamu biasa pakai require() dan module.exports di Node.js, itu namanya CommonJS (CJS), yang sudah lama dipakai di ekosistem Node. Nah, ESM adalah standar JavaScript modern yang pakai import dan export, seperti yang biasa dipakai di browser modern.

Contoh perbedaan kecilnya:

✅ CommonJS (CJS)
const fs = require('fs');
module.exports = function() { /* ... */ }

✅ ESM (ECMAScript Module)
import fs from 'fs';
export default function() { /* ... */ }

Kenapa ESM penting?
ESM adalah standar resmi JavaScript dari spesifikasi ECMAScript.

Banyak tools modern (seperti bundler, TypeScript, library frontend) makin fokus ke ESM.

Bisa pakai import/export langsung tanpa transpiler seperti Babel.

Bagaimana cara pakai ESM di Node.js?
Ada beberapa cara:
1️⃣ Ubah ekstensi file jadi .mjs.
Misalnya index.mjs. Node otomatis paham itu ESM.

2️⃣ Atau, kalau mau tetap pakai .js, tambahkan di package.json:
{
  "type": "module"
}
Kalau itu sudah di-set, semua file .js di project-mu dianggap ESM.

Kekurangan atau hal yang perlu diperhatikan?
Tidak bisa campur sembarangan antara ESM dan CommonJS.

Beberapa fitur seperti __dirname dan __filename nggak ada langsung di ESM (perlu workaround).

Kadang modul third-party masih pakai CJS, jadi harus hati-hati kalau mau di-import.

Kalau kamu mau, aku bisa bantuin bikin contoh kecil project Node.js pakai ESM biar makin jelas. Mau? 🚀