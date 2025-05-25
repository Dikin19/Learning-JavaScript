// Ada rumus yang menjadi panduan perubahannya. Kita ambil satu contoh rumus mengubah skala suhu celsius ke fahrenheit.
// 9 / 5 * {angka_suhu_celsius} + 32;

let temperatureInCelsius;
let temperatureInFahrenheit;

temperatureInCelsius = 50;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 122

temperatureInCelsius = 70;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 158

temperatureInCelsius = 100;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 212


function TemperatureInCelcius (TempInCel){
    const TemperatureInFahrenheit = 9/5 * TempInCel + 32

    // return `Hasil konversi: ${TemperatureInFahrenheit}`
    return TemperatureInFahrenheit
}

console.log('Hasil konversi:', TemperatureInCelcius(50));
console.log(TemperatureInCelcius(70));
console.log(TemperatureInCelcius(100));