// let sayi = 65;
// if (sayi > 50 && sayi < 100) {
//   console.log("sayi 50-100 arasındadıır");
// }

// let sayi = 10;
// if (sayi % 2 == 0 && sayi > 0) {
//   console.log("sayı pozitif çifttır.");
// }

// let x = 40,
//   y = 50,
//   z = 70;

// if (x > y && x > z) {
//   console.log("x en büyük");
// } else if (y > x && y > z) {
//   console.log("y en büyük");
// } else if (z > y && z > x) {
//   console.log("z en büyük");
// } else {
//   console.log("hatalı girdi");
// }

let vize1 = 10;
let vize2 = 10;
let final = 70;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;

console.log(ortalama);

// if (ortalama >= 50) {
//   console.log("geçti");
// } else console.log("galdı");

// if (ortalama >= 50 && final >= 50) {
//   console.log("geçti");
// } else console.log("galdı");

if (ortalama >= 50 || final >= 70) {
  console.log("geçti");
} else console.log("galdı");
