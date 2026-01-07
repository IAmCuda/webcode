let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.7");
sonuc = parseFloat("10.7");
sonuc = parseFloat("10araba");
sonuc = parseFloat("a1");

sonuc = isNaN("a10");
sonuc = Number.isInteger(19.4);

let sayi = 10.346432;
sonuc = sayi.toPrecision(4);
sonuc = sayi.toFixed(4);

sonuc = Math.round(2.1);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.7);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2, 5);
sonuc = Math.min(2, 5, 3, 5, 67, 7, 2, 1);
sonuc = Math.max(2, 5, 3, 5, 67, 7, 2, 1);

sonuc = Math.floor(Math.random() * 100 + 1);

console.log(typeof sonuc);
console.log(sonuc);
