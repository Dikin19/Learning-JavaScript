// Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan. Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array. Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. 

// 1. Spread Operator diobject 
const obj1 = {name: 'dikin'}
const obj2 = {age: 17, 'full name': 'Muhamad sodikin'}
console.log(obj1);
console.log(obj2);
console.log('Sebelum dibuat spread operator');
console.log();
console.log('==============================');
console.log('Sesudah dibuat spread operator');
const newObj = {...obj1,...obj2}
console.log(newObj);
// Dapat dilihat bahwa spread operator dapat mempermudah menggabungkan dua object. Selain mempermudah menggabungkan object, spread operator juga mempermudah untuk menyalin object seperti berikut ini.
// Mempermudah kita untuk menyalin obj
console.log();
const OrginalObj = {name: 'dikin', 'full name': 'Muhamad Sodikin', age: 17}
const CopyObj = {...OrginalObj}
console.log(CopyObj, 'memanggil data copyObj yang sudah melakukan spread operator dari data orginalobj');

console.log();
const originalObj2 = { name: 'Dicoding', age: 9, tall: 166 };
const { tall, ...copiedObj } = originalObj2;
console.log(copiedObj); // { name: 'Dicoding', age: 9 }

console.log();
console.log('==============================');
console.log('membuat function untuk remove property');

function omit(obj, keys) {
    const newObj = { ...obj };
    // console.log(newObj, 'data sebelum dihapus');
    console.log();
    keys.forEach(key => {
        // console.log(key, 'seee'); // age and color yang akan dihapus
        delete newObj[key]; // menghapus key yang dikirim dari keys yang sudah dilooping
    });
    return newObj;
}

// function untuk menghapus satu property
function omitOne(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

const OrginalObj1 = {name: 'dikin', 'full name': 'Muhamad Sodikin', age: 17, color: 'red'}
const result = omit(OrginalObj1, ['age', 'color']) // memasukan nilai pada function
console.log(result, 'setelah menjalankan fungsi lalu dihapus  color dan age');

