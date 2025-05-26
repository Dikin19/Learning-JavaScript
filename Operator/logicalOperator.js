//LOGICAL OPERATOR
//Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Dengan operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.

// 1. AND (&&) Binary operator yang menghasilkan nilai true apabila kedua operan bernilai true (atau truthy). Jika salah satu operan bernilai false (atau falsy), operasi akan mengembalikan false.
function logikaDan(a, b) {
  const hasil = a && b; //nilai true hanya didapatkan ketika ke2 operand sama 
  return `${a} && ${b} = ${hasil}`;
}
// Contoh penggunaan
// console.log(logikaDan(true, true));   // true && true = true
// console.log(logikaDan(false, true));  // false && true = false
// console.log(logikaDan(true, false));  // true && false = false
// console.log(logikaDan(false, false)); // false && false = false

// 2. OR (||) Binary operator yang menghasilkan nilai true apabila salah satu operan bernilai true (atau truthy). Jika kedua operan bernilai false (atau falsy), operasi akan mengembalikan false.
function logikaOr(a, b){
    const hasilOr = a || b;
    return `${a} || ${b} = ${hasilOr}`
}
// console.log(logikaOr(true, true));   
// console.log(logikaOr(false, true));
// console.log(logikaOr(true, false));
// console.log(logikaOr(false, false));

// 3. NOT (!) Unary operator yang mengubah operan bernilai true menjadi false dan false menjadi true.
function logikaNot(expresi) {
  const hasil = !expresi;
  return `!${expresi} = ${hasil}`;
}
// Contoh penggunaan
// console.log(logikaNot(true));           // !true = false
// console.log(logikaNot(false));          // !false = true
// console.log(logikaNot(1 > 2));          // !(1 > 2) = true
// console.log(logikaNot(4 === 4));        // !(4 === 4) = false

//Berikut adalah contoh kode yang menunjukkan berbagai penggunaan operator logika dalam JavaScript.
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
 
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
 
// NOT
console.log(!true); // false
console.log(!false); // true

// STRING OPERATOR
const first = 'bekerja';
const second = 'sama';
const merged = first + second;
 
console.log(merged); // Output: bekerjasama
//Meskipun terlihat sederhana, penggunaan simbol + ini bisa sedikit membingungkan. Contohnya, pada operasi "2" + 2, hasilnya bukan 4, melainkan "22". Hal ini terjadi karena salah satu operannya adalah string sehingga simbol + berfungsi sebagai operator string.