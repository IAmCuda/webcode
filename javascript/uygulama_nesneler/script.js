let siparis_1 = {
  id: 101,
  musteri_id: 12,
  tarih: "31.12.2026",
  odeme_sekli: "kredi kartı",
  kargo_adresi: { mahalle: "yahya kemal mh", ilce: "çankaya", sehir: "ankara" },
  urunler: [
    {
      urun_id: 5,
      urun_adi: "iphone 16 pro",
      urun_url: "https://abc.com/iphone-16-pro",
      fiyat: 25.214,
    },
    {
      urun_id: 6,
      urun_adi: "iphone 16 pro max",
      urun_url: "https://abc.com/iphone-16-pro-max",
      fiyat: 35.214,
    },
  ],
};

let siparis_2 = {
  id: 102,
  musteri_id: 12,
  tarih: "31.11.2026",
  odeme_sekli: "kredi kartı",
  kargo_adresi: { mahalle: "yahya k2mal mh", ilce: "çankaya", sehir: "ankara" },
  urunler: [
    {
      urun_id: 6,
      urun_adi: "iphone 16 pro max",
      urun_url: "https://abc.com/iphone-16-pro-max",
      fiyat: 35.214,
    },
  ],
};

let siparis1_toplam =
  siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat * 1.2;

let siparis2_toplam = siparis_2.urunler[0].fiyat * 1.2;

console.log(siparis1_toplam);
console.log(siparis2_toplam);

let toplam_sipariş = siparis1_toplam + siparis2_toplam;

console.log("toplam sipariş:", toplam_sipariş);
let sipariş;
