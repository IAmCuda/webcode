let sayilar = [3, 5, 7, 8, 12, 23, 45, 65];

//

// for (let i = 0; i < sayilar.length; i++) {
//   console.log(sayilar[i] * sayilar[i]);
// }

//

// for (let i = 0; i < sayilar.length; i++) {
//   if (sayilar[i] % 5 == 0) {
//     console.log(sayilar[i]);
//   }
// }

// let i = 0;
// while (i < sayilar.length) {
//   if (sayilar[i] % 5 == 0) {
//     console.log(sayilar[i]);
//   }
//   i++;
// }

// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }

//

let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];

//
// for (let i = 0; i < urunler.length; i++) {
//   console.log(urunler[i].toUpperCase());
// }

//
// let adet = 0;
// for (let i = 0; i < urunler.length; i++) {
//   if (urunler[i].includes("samsung")) {
//     adet++;
//   }
// }
// console.log(adet + " tane kelime bulundu.");

//

let ogrenciler = [
  { ad: "Ahmet", soyad: "Ay", notlar: [60, 70, 80] },
  { ad: "Ayşe", soyad: "Yılmaz", notlar: [10, 20, 35] },
  { ad: "Yiğit", soyad: "Bilgi", notlar: [70, 70, 80] },
];
let toplam_sinif = 0;
for (let i = 0; i < ogrenciler.length; i++) {
  let not_toplam = 0;
  let adet = 0;
  let ortalama = 0;
  let basari = "";
  for (let x = 0; x < ogrenciler[i].notlar.length; x++) {
    not_toplam += ogrenciler[i].notlar[x];
    adet++;
  }

  ortalama = not_toplam / adet;

  toplam_sinif += ortalama;

  if (ortalama >= 50) {
    basari = "başarılı";
  } else {
    basari = "başarısız";
  }

  console.log(
    `${basari}:${ogrenciler[i].ad} ${ogrenciler[i].soyad}  isimli öğrencinin not ortalaması ${ortalama}.`
  );
}

console.log("sınıf ortalaması: " + toplam_sinif / ogrenciler.length);
