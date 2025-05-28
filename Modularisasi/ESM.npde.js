/*

Oke! Jadi gini, ESM di Node.js itu singkatan dari ECMAScript Modules.

Kalau kamu biasa pakai require() dan module.exports di Node.js, itu namanya CommonJS (CJS), yang sudah lama dipakai di ekosistem Node. Nah, ESM adalah standar JavaScript modern yang pakai import dan export, seperti yang biasa dipakai di browser modern.

Contoh perbedaan kecilnya:

✅ CommonJS (CJS)
const fs = require('fs');
    module.exports = function() { /* ... */

/* ✅ ESM (ECMAScript Module)
import fs from 'fs';
// export default function() { /* ... }*/ 

/* Kenapa ESM penting?
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

Kalau kamu mau, aku bisa bantuin bikin contoh kecil project Node.js pakai ESM biar makin jelas. Mau? 🚀*/

// Menggunakan Modularisasi ESM di Node.JS
// Karena ESModule adalah barang baru di dunia persilatan Node.js, kita perlu menambahkan konfigurasi dalam project Node.js. Kalau Anda mengikuti latihan di modul ini pada lokal komputer, Anda akan mengalami error ketika menggunakan import dan export. Mungkin beberapa dari Anda sudah menyadari akan hal ini dan telah mencari solusi error dengan berselancar di internet.
// Sebenarnya, kita hanya membutuhkan konfigurasi sederhana. Berikut cara yang dapat kita terapkan jika ingin menggunakan ES Modul di Node.js.
// Mengubah ekstensi berkas
// Cara pertama yaitu mengubah ekstensi berkas dari .js menjadi mjs. Dengan mengubah format ini, kita memberitahu ke Node.js bahwa kita ingin menggunakan ESModule. Cara ini terbilang sangat sederhana. Namun, bagaimana jika berkas project Anda sangat banyak? Tidak mungkin Anda mengubahnya satu per satu karena pasti memakan waktu cukup lama dan tidak efisien.
// Menambahkan konfigurasi di package.json
// Cara berikut ini akan menyelesaikan masalah yang ada pada cara sebelumnya yaitu dengan menambahkan konfigurasi pada level package. Dengan menambahkan konfigurasi pada level package, kita tidak perlu lagi untuk mengganti ekstensi berkas menjadi .mjs dan cara inilah yang kami lakukan sepanjang modul ini.

/* Buka berkas package.json atau jika belum memilikinya, Anda bisa membuatnya terlebih dahulu.
Setelah itu, tambahkan baris kode berikut ini
"type": "module" */

// Dua cara ini dapat membuat ESM bisa digunakan di Node.js. Anda bebas memilih cara mana pun sesuai kebutuhan di dalam project.
