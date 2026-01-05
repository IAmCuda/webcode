let url = "https://www.sadikturan.com";
let kursAdi = "Komple Uygulamalı Web Geliştirme Kursu";

let sonuc;
sonuc = url.length;

sonuc = kursAdi.split(" ").length;

sonuc = url.startsWith("https");

sonuc = kursAdi.indexOf("Web");

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replaceAll("ş", "s").replaceAll("ı", "i");
sonuc = `${url}/${kursAdi}`;

console.log(sonuc);
