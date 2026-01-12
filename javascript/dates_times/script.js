let simdi = new Date();
//get methods
sonuc = simdi;
sonuc = simdi.getDate(); //gün
sonuc = simdi.getDay(); //0-6  0=pzt
sonuc = simdi.getFullYear();

//set methods
simdi.setFullYear(2028);
simdi.setMonth(5);
simdi.setDate(29);

let dogumTarihi = new Date(1997, 9, 12);

sonuc = dogumTarihi;

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
sonuc = saniye;
sonuc = dakika;
sonuc = saat;
sonuc = gun;
console.log(sonuc);
