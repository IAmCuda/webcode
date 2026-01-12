//scope => let, const sabit tanımlama

//global scope

var isim = "ayşe";
const tc = "1257642353"; // değişmez sabit terim

//function scope
function yazdir() {
  var isim = "can";
  var yas = 18;
  console.log(isim);
  console.log(yas);
}

if (true) {
  let isim = "canaan"; // let ile block scope oluşturmuş oldum
  let cinsiyet = "kadin";
  console.log(isim);
  console.log(cinsiyet);
}

// fonskiyonlar kendi scope alanlarını oluşturur
// block içerisinde yeni bir scope oluşmaz (let,const)

// yazdir();
console.log(isim);
console.log(cinsiyet);
