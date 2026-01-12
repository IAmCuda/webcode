// function kelimeYazdir(kelime, adet) {
//   for (let i = 0; i < adet; i++) {
//     console.log(kelime);
//   }
// }

// kelimeYazdir("miriba", 3);

//

// function alanCevreHesapla(kisa, uzun) {
//   let alan = kisa * uzun;
//   let cevre = (kisa + uzun) * 2;

//   return `alan:${alan},cevre:${cevre}`;
// }

// console.log(alanCevreHesapla(3, 7));

//

// function yaziTuraAt() {
//   let random = Math.random();

//   if (random < 0.5) {
//     console.log("yazi");
//   } else {
//     console.log("tura");
//   }
// }

// for (let i = 0; i < 10; i++) {
//   yaziTuraAt();
// }

//

// function tamBolenleriBul(sayi) {
//   let sayilar = [];
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       sayilar.push(i);
//     }
//   }
//   return sayilar;
// }

// console.log(tamBolenleriBul(20));
// console.log(tamBolenleriBul(4500));

//

function toplam() {
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}

let sonuc;
sonuc = toplam(10, 20);
sonuc = toplam(10, 20, 30);
sonuc = toplam(10, 20, 30, 40);
console.log(sonuc);
