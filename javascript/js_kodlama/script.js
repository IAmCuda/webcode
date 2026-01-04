// değişkenler  (variables)

var a = 5000;
var b = 5000;
var c = 6000;
var d = 7000;
var kdv = 1.18;

console.log(a * kdv); // product a

a = 3500;

console.log(a * kdv); // product a
console.log(b * kdv); // product b
console.log(c * kdv); // product c
console.log(d * kdv); // product d

// Değişken Tanımlama Kuralları

// Türkçe karakter kullanmamalıyız.

// var ürünFiyat = 6990;
var urunFiyat = 6990;

// Arada boşluk olmamalıdır.

// var urun Adi="samsung s24";
// var urunAdi = "samsung s24";
// var urun_Adi = "samsung s24";

// Sayı ile başlayamaz.

// var 1urun ="samsung";
// var urun1 = "samsung";
// var urun2 = "samsung";

// Komut isimleri kullanmamalıyız.

// var for = 10;

// DeğişKEN Türleri

var urunAdi = "Iphone 16"; //string
var urunFiyat = "70000"; //string

var urunFiyat2 = 70000; //number

console.log(typeof urunAdi);
console.log(typeof urunFiyat);
console.log(typeof urunFiyat2);

var sayi1 = 10;
var sayi2 = 20;

console.log(sayi1 + sayi2);

var ad = "serhan";
var soyad = "başözmen";

console.log(ad + " " + soyad);

ad = "ahmet";

console.log(ad + " " + soyad);

var sinavNotu = 60;
var basarilimi = sinavNotu >= 50; //boolean => true,false

console.log(basarilimi);

var yas;

console.log(yas);
console.log(typeof yas);
