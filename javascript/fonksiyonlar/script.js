function selamlama(mesaj) {
  console.log(mesaj);
}

selamlama("merhb");
selamlama("sa");

function yasHesaplama(dogumYili) {
  let simdi = new Date().getFullYear();
  return simdi - dogumYili;
}

console.log(yasHesaplama(2003));
console.log(yasHesaplama(2008));
yasHesaplama(2006);

function emekliligeKacYilKaldi(dogumYili, isim) {
  let yas = yasHesaplama(dogumYili);

  let kalan_sene = 65 - yas;

  if (kalan_sene > 0) {
    console.log(`${isim} emekli olmana ${kalan_sene} yıl kaldı`);
  } else {
    console.log("zaten emeklisin la");
  }
}

emekliligeKacYilKaldi(1997, "ayşe");
emekliligeKacYilKaldi(1950, "aali");
