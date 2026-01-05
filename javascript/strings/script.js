//strings

var ad = "serhan";
var soyad = "basozmen";
var yas = 22;
var sehir = "ankara";

let mesaj =
  "benim adım " +
  ad +
  " ve soyadım " +
  soyad +
  ". " +
  sehir +
  "'da yaşıyorum. " +
  (65 - yas) +
  " yıl sonra emekli olacağım";

//template strings
mesaj = `benim adım ${ad} ve soyadım ${soyad}. ${sehir} da yaşıyorum. ${
  65 - yas
} yıl sonra emekli olacağım`;

console.log(mesaj);
