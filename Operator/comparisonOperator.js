//Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan. Salah satu penggunaan operator perbandingan adalah ketika kita berhadapan dengan skenario “Apakah x lebih besar dari y?” dan mendapatkan hasil dalam bentuk “Ya” atau “Tidak”.

// 1. Sama (==) Membandingkan dua operan, tanpa memperhatikan tipe data. Jika nilai kedua operan dianggap sama, operasi akan mengembalikan true, sebaliknya false.
function bandingkanNilai(a, b) {
  if (a == b) {
    return `✅ ${a} == ${b} → true`;
  } else {
    return `❌ ${a} == ${b} → false`;
  }
}
// Contoh penggunaan
// console.log(bandingkanNilai(1, 1));          // ✅ 1 == 1 → true
// console.log(bandingkanNilai(1, '1'));        // ✅ 1 == 1 → true
// console.log(bandingkanNilai(2, 6));          // ❌ 2 == 6 → false
// console.log(bandingkanNilai('Dicoding', 'dicoding')); // ❌ Dicoding == dicoding → false


// 2. Tidak Sama (!=)Membandingkan dua operan, tanpa memperhatikan tipe data. Jika nilai kedua operan dianggap tidak sama, operasi akan mengembalikan true, sebaliknya false. 
function tidakSama(a, b) {
  if (a != b) {
    return `✅ ${a} != ${b} → true (berbeda)`;
  } else {
    return `❌ ${a} != ${b} → false (dianggap sama)`;
  }
}
// Contoh penggunaan
// console.log('==========================');
// console.log('function dari tidak sama');
// console.log(tidakSama(1, 1));           // ❌ 1 != 1 → false
// console.log(tidakSama(1, '1'));         // ❌ 1 != 1 → false
// console.log(tidakSama(2, 6));           // ✅ 2 != 6 → true
// console.log(tidakSama('Dicoding', 'dicoding')); // ✅ Dicoding != dicoding → true

// 3. Identik (===) Membandingkan dua operan beserta tipe datanya. Jika kedua operan identik, operasi akan mengembalikan true, sebaliknya false.
function nilaiStrictSama(a, b) {
  if (a === b) {
    return `✅ ${a} === ${b} → true (sama nilai & tipe)`;
  } else {
    return `❌ ${a} === ${b} → false (berbeda nilai atau tipe)`;
  }
}
// Contoh penggunaan
// console.log(nilaiStrictSama(1, 1));           // ✅ true
// console.log(nilaiStrictSama(1, '1'));         // ❌ false
// console.log(nilaiStrictSama(2, 6));           // ❌ false
// console.log(nilaiStrictSama('Dicoding', 'dicoding')); // ❌ false

// 4. Tidak Identik (!==) Membandingkan dua operan beserta tipe datanya. Jika kedua operan tidak identik, operasi akan mengembalikan true, sebaliknya false.
function nilaiStrictTidakSama(a, b) {
  if (a !== b) {
    return `✅ ${a} !== ${b} → true (berbeda nilai atau tipe)`;
  } else {
    return `❌ ${a} !== ${b} → false (sama persis)`;
  }
}
// Contoh penggunaan
// console.log(nilaiStrictTidakSama(1, 1));            // ❌ false
// console.log(nilaiStrictTidakSama(1, '1'));          // ✅ true
// console.log(nilaiStrictTidakSama(2, 6));            // ✅ true
// console.log(nilaiStrictTidakSama('Dicoding', 'dicoding')); // ✅ true

// 5. lebih dari (>) Membandingkan dua operan, apakah operan pertama lebih dari operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
function LebihBesarDari (a, b){
    if (a > b){
        return `✅ ${a} > ${b} true -> ( benar ${a} lebih besar)`
    } else {
        return `❌ ${a} > ${b} false -> (tidak lebih besar)`
    }
}
// console.log(LebihBesarDari(2,1));
// console.log(LebihBesarDari(2,3));

// 6. lebih besar atau sama dengan (>=) Membandingkan dua operan, apakah operan pertama lebih dari atau sama dengan operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
function lebihBesarAtauSama(a, b) {
  if (a >= b) {
    return `✅ ${a} >= ${b} → true (benar, ${a} lebih besar atau sama)`;
  } else {
    return `❌ ${a} >= ${b} → false (tidak lebih besar atau sama)`;
  }
}
// Contoh penggunaan
// console.log(lebihBesarAtauSama(4, 2)); // ✅ 4 >= 2 → true
// console.log(lebihBesarAtauSama(4, 5)); // ❌ 4 >= 5 → false
// console.log(lebihBesarAtauSama(4, 4)); // ✅ 4 >= 4 → true

// 7. kurang dari (<) Membandingkan dua operan, apakah operan pertama kurang dari operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
function lebihKecilDari(a, b) {
  if (a < b) {
    return `✅ ${a} < ${b} → true (benar, ${a} lebih kecil)`;
  } else {
    return `❌ ${a} < ${b} → false (tidak lebih kecil)`;
  }
}
// // Contoh penggunaan
// console.log(lebihKecilDari(4, 2)); // ❌ 4 < 2 → false
// console.log(lebihKecilDari(4, 5)); // ✅ 4 < 5 → true
// console.log(lebihKecilDari(4, 4)); // ❌ 4 < 4 → false

// 8. kurang dari sama dengan (<=) Membandingkan dua operan, apakah operan pertama kurang dari atau sama dengan operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
function kurangDariAtauSama(a, b){
    if (a<=b){
        return `✅ ${a} <= ${b} -> true (benar, ${a} lebih kecil sama dengan)`
    } else {
        return `❌ ${a} <= ${b} -> false (tidak lebih kecil sama dengan)`
    }
}
console.log(kurangDariAtauSama(2,3));
console.log(kurangDariAtauSama(2,2));
console.log(kurangDariAtauSama(2,1));
