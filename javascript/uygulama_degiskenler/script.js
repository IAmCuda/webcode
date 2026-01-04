var ogr1_ad = "Ada";
var ogr1_soyad = "Bilgi";
var ogr1_dogumTarihi = 2012;
var ogr1_mat1 = 70;
var ogr1_mat2 = 70;
var ogr1_mat3 = 80;
var ogr1_yas = 2026 - ogr1_dogumTarihi;
var ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
console.log(parseFloat(ogr1_ortalama));
console.log(typeof ogr1_ortalama);

console.log(ogr1_ortalama >= 50); //boolean

var ogr2_ad = "Yiğit";
var ogr2_soyad = "Emir";
var ogr2_dogumTarihi = 2011;
var ogr2_mat1 = 40;
var ogr2_mat2 = 50;
var ogr2_mat3 = 50;
var ogr2_yas = 2026 - ogr2_dogumTarihi;
var ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
console.log(ogr2_ortalama);
console.log(ogr2_yas);
console.log(ogr2_ortalama >= 50); //boolean
