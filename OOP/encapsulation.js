// ENCAPSULATION
/*
Setelah kelar membahas pilar OOP pewarisan, berikutnya kita akan membahas pilar utama berikutnya dari OOP yaitu encapsulation. Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. Menyembunyikan data adalah bagian kunci dari encapsulation.

Desain OOP yang baik adalah object hanya akan menampilkan data yang dibutuhkan oleh object lain. Data akan diisolasi dan tidak dapat diakses langsung dari luar. Secara sederhana, encapsulation adalah membuat data yang ada di class sebagai private.

Di dunia nyata, kita bisa lihat contohnya pada mesin kopi. Mesin kopi memiliki data dan method yang bersifat private seperti pengatur suhu, pemanas, dan method memanaskan air. Data dan method tersebut tidak bisa diakses oleh pihak luar (kita sebagai pengguna).
*/

const { version } = require("react");


// Properti and Method
// Seperti yang Anda ketahui, di dalam sebuah class kita dapat mendefinisikan dua hal, yaitu property dan method. Karena kita menerapkan encapsulation, kita harus mengatur akses dari keduanya. Secara umum, property yang ada di dalam instance class bersifat mutable (dapat diubah). Perhatikan contoh berikut ini.
// console.log('Peroperty dapat diubah');
//     class CoffeeMachine {
//         constructor (waterAmount){
//             this.waterAmount = waterAmount;
//             this.Temperature = 90
//         }

//     makeCoffee () {
//         console.log('Membuat kopi dengan suhu', this.Temperature);
//         }

//     }

//     const coffee = new CoffeeMachine(100)
//     console.log('sebelum diubah');
//     coffee.makeCoffee();

//     console.log();
//     console.log('Setelah diubah');
//     coffee.Temperature = 60
//     coffee.makeCoffee();

/**
Pada contoh di atas, kita menetapkan temperature mesin kopi 90 derajat Celcius, tetapi ada pengguna yang iseng mengubahnya menjadi 60. Mengubah nilai tersebut bisa saja mengakibatkan mesin kopi rusak. Meskipun kita sudah menetapkan nilai temperature, nilainya tetap dapat diubah. Hal ini tidaklah baik. Untuk mencegah hal itu terjadi lagi, kita dapat menerapkan getter dan setter.
Getter terdiri dari method get. get adalah cara untuk mendapatkan nilai dari property, sedangkan setter terdiri dari method set. set adalah method untuk menetapkan nilai property. Dengan begitu, kita dapat mengatur akses ke property yang dimiliki oleh object. Perhatikan contoh berikut ini.
*/

    class CoffeeMachine {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this._temperature = 90
    }

    set temperature(temperature) {
        console.log('you are not allowed to change the temperature');
    }

    get temperature() {
        return this._temperature;
    }
    }

    const coffee = new CoffeeMachine(10);
    console.log('Sebelum diubah: ', coffee.temperature);
    coffee.temperature = 100;
    console.log('Setelah diubah: ', coffee.temperature);

// enambahan underscore (_) di variable temperature untuk menandakan bahwa nilai temperature tidak dapat diubah. Namun, sebenarnya penggunaan tanda underscore tidak benar-benar membuat property temperature tidak dapat diubah, ia masih dapat diubah. Penggunaan underscore hanyalah code convention yang disepakati oleh komunitas JavaScript.
// Untuk membuat nilainya benar benar tidak dapat diubah, Anda dapat melakukannya dengan cara berikut

    class CoffeeMachine2 {
        #temperature2 = 90
        #brand = 'lamarzoco'

        constructor(WaterAmount2){

            this.WaterAmount2 = WaterAmount2;
            this.#temperature2 = this.#defaultTemperature();
            this.#brand = this.#defaultBrand();
        }

        set temperature2(temperature2){
            console.log('you are not allowed to change the temperature')
        }

        get temperature2(){
            return this.#temperature2
        }

        set brand (value){
            return this.#brand = value
        }

        get brand(){
            return this.#brand
        }

        #defaultBrand (){
            return this.brand
        }

        #defaultTemperature(){
            return this.temperature2
        }

        updateMachine (newTemperature, newBrand){
            this.#temperature2 = newTemperature;
            // this.#brand = newBrand;
            //jikaingin mengubah lebih dari satu cocok menggunakan method update jika hanya satu bisa menggunakan setter
        }

    }

    const coffee2 = new CoffeeMachine2 (10)
    console.log();
    console.log('menampilkan temperature dari getter');
    coffee2.temperature2 = 100 // ini sebelum di update masih masuk dalam set temperature 
    // kita juga bisa membuat logic mengubah set untuk merubah nilai langsung tampa menggunakan method update
    coffee2.updateMachine(80) // karna update mesin sudah menjadi method untuk update property public
    console.log(`current temperature`, coffee2.temperature2);// akses dari getter yang diberikan dari default temperature
    console.log();
    coffee2.brand = 'small lamarzoco' // ni contoh menggunaka setter untuk update nilai
    console.log('menampilkan brand dari getter');
    console.log('brand :', coffee2.brand);

// Versi singkat

    // class CoffeeMachine2 {
    //     #temperature2 = 90
    //     #brand = 'lamarzoco'

    //     constructor(WaterAmount2){

    //         this.WaterAmount2 = WaterAmount2;
    //     }

    //     set temperature2(value){
    //         console.log('you are not allowed to change the temperature')
    //     }

    //     get temperature2(){
    //         return this.#temperature2
    //     }

    //     set brand (value){
    //         console.log('cannot change');
    //     }

    //     get brand(){
    //         return this.#brand
    //     }

    //     method (a,b){
    //         return a + b
    //     }

    // }

    // const coffee2 = new CoffeeMachine2 (10)
    // console.log();
    // coffee2.temperature2 = 89
    // console.log('menampilkan temperature dari getter');
    // console.log(`current temperature`, coffee2.temperature2);// akses dari getter yang diberikan dari default temperature
    
    // console.log();
    // console.log('menampilkan brand dar getter');

    // console.log();
    // coffee2.brand = 'test'
    // console.log('brand :', coffee2.brand);
    // console.log('method', coffee2.method(1,2));
    // console.log(coffee2.WaterAmount2);

// cara kerja method dan function sama hanya teknis penempatanya saja yang berbeda