/*  - operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary.
	- binary	= Operator aritmetika, seperti + termasuk dalam kelompok operator binary karena membutuhkan dua operan. 
	- unary		= Seperti typeof adalah operator unary karena hanya memerlukan satu operan.
	- ternary	= operator ternary tentu saja membutuhkan tiga operan.
 */
let age = 17;
 
// Unary operator
typeof age
// console.log( typeof age);
 
// Binary operator
5 + 4;
10 / 2;
age = 17;
//  console.log(age);

// Ternary operator (conditional operator)
const ternary1 = (age < 18) ? 'You are too young TRUE!' : 'Welcome onboard False!'; 
// console.log(ternary1);

// 1. Modulus (%) Binary operator yang mengembalikan sisa hasil bagi operan kiri dan operan kanan.
// Memberikan sisa bagi
function Modulus (){
    const ModuluSatu = 12%5
    const ModulusDua = 10%5
    const ModulusTiga = 14%3

    return {ModuluSatu, ModulusDua, ModulusTiga}
}
console.log(Modulus()); //{ satu: 2, dua: 0, tiga: 2 }

// 2. Increment (++) Unary operator yang digunakan untuk menambahkan satu nilai terhadap operan yang diberikan. Operan harus berupa variabel yang dapat diubah nilainya.
function countWithPostIncrement (){
    let i = 0
    while (i<3){
        console.log('Post-Increment, i =', i);
        i++ // mulai dari 1
    }
}
// countWithPostIncrement()

function countWithPreIncrement1() {
  let i = 0;
  while (++i < 3) { // mulai dari i + 1
    console.log("Pre-Increment, i =", i);
  }
}
// countWithPreIncrement1();

function loopWithPostIncrement2() {
  for (let i = 0; i < 3; i++) {
    console.log("Post-Increment, i =", i);
  }
}
// loopWithPostIncrement2();

// 3. Binary operator yang menghitung x (basis) dengan pangkat y (eksponen). Bentuk matematika: x ^ y.
function pangkatkan(angka, pangkat) {
  return angka ** pangkat;
}
// Contoh penggunaan
// console.log(pangkatkan(2, 3));    // Output: 8 // 2*2=4
// console.log(pangkatkan(10, 2));   // Output: 100
// console.log(pangkatkan(5, 0));    // Output: 1 // 5:5 = 1

//Berikut adalah contoh kode yang menunjukkan berbagai penggunaan operator aritmetika dalam JavaScript.
6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2 *(10 + 2); // mengembalikan 24



