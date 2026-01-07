// let urun1 = "samsung s26";
// let urun2 = "samsung s22";
// let urun3 = "samsung s23";

let urunler = ["samsung  s26", "samsung  s22", "samsung s23"];
let fiyatlar = [24.544, 42.546, 12.123];
let renkler = ["gold", "black", "silver"];

let sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}}`;
sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}}`;
sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}}`;

let urun1 = ["samsung s12", 14.532, ["gold", "black", "silver"]];
let urun2 = ["samsung s42", 54.532, "pinkk"];
let urun3 = ["samsung s31", 75.532, "black"];

urun1[0] = "samsung s26 pro";

sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2][2]}`;
// sonuc = `${urun2[0]} ${urun2[1]} ${urun2[2]}`;
// sonuc = `${urun3[0]} ${urun3[1]} ${urun3[2]}`;

console.log(sonuc);
