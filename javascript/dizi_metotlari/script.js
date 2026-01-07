let ogrenciler = ["Çınar", "ahmet", "merve"];

let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// sonuc = ogrenciler.pop();
// sonuc = ogrenciler.shift();

// sonuc = ogrenciler.push("sevil");
// sonuc = ogrenciler.unshift("emine");

// sonuc = ogrenciler.indexOf("ahmet");
// sonuc = ogrenciler.lastIndexOf("ahmet");
// sonuc = ogrenciler.includes("ahmet");

sonuc = ogrenciler.splice(0, 1, "ali", "canan");

console.log(sonuc);
console.log(ogrenciler);
