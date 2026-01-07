// let kullanici1 = ["sero", "babo", 42];

let kullanici1 = {
  ad: "sero",
  soyad: "baba",
  yas: 40,
  adres: {
    sehir: "angara",
    ilçe: "çangaya",
  },
  hobiler: ["spor", "müzik"],
};

let kullanici2 = {
  ad: "se12",
  soyad: "ba12",
  yas: 42,
  adres: {
    sehir: "ang142a",
    ilçe: "çanga2",
  },
  hobiler: ["sp2or", "müzi3k"],
};

let kullanicilar = [kullanici1, kullanici2];

let sonuc;
sonuc = kullanici1;
sonuc = kullanici1["ad"];
sonuc = kullanici1["soyad"];
sonuc = kullanici1["adres"];
sonuc = kullanici1["adres"]["sehir"];
sonuc = kullanici1.adres.sehir;
sonuc = kullanici1.hobiler[0];

sonuc = kullanicilar[0];
sonuc = kullanici2.hobiler[0];

console.log(sonuc);
