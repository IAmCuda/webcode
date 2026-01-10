// console.log(1);
// console.log(2);
// console.log(3);

// console.log(100);

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

let sayiler = [1, 2, 3, 4, 5, 6, 7, 8, 13, 45, 214, 124];
let toplam = 0;

for (let index = 0; index < sayiler.length; index++) {
  console.log(sayiler[index]);

  toplam += sayiler[index];
}

console.log(toplam);
