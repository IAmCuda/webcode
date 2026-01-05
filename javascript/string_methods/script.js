var kursAdi = "komple uygulamalı web geliştirme eğitimi";
var sonuc;

sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(11);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(11);

sonuc = kursAdi.replace("eğitimi", "kursuu");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[2];

console.log(sonuc);
