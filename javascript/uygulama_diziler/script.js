let meyveler = ["Kiraz", "Karpuz", "Kavun", "Erik", "Üzüm"];

let sonuc;

sonuc = meyveler.length;

sonuc = meyveler[0];
sonuc = meyveler[meyveler.length - 1];

sonuc = meyveler.indexOf("Kavun");
sonuc = meyveler.includes("Kavun");

// meyveler.push("Çilek");
// meyveler[meyveler.length] = "Çilek";

// meyveler.pop();
// meyveler.pop();

// meyveler.splice(meyveler.length - 2, 2);

// console.log(meyveler);

let ogrenci1 = ["Yiğit", "Bilgi", 2010, [50, 60, 80]];
let ogrenci2 = ["Ahmet", "Ay", 2011, [20, 10, 80]];
let ogrenci3 = ["Ali", "Bilgi", 2012, [10, 20, 90]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

console.log(2026 - ogrenci1[2]);
console.log(2026 - ogrenci2[2]);
console.log(2026 - ogrenci3[2]);

let yigit_not = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
let ahmet_not = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
let ali_not = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;
console.log(yigit_not, ahmet_not, ali_not);
