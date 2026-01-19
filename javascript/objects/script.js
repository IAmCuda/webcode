const product = {
  //properties
  title: "samsung tab3",
  description: "nice tablet",
  price: 24.055,
  stock: 125,

  //methods
  display: function () {
    return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.description} ve fiyat: ${this.price}`;
  },
  is_active: function () {
    return this.stock > 0 ? "satışta" : "stok yok";
  },
};
const product2 = {
  //properties
  title: "samsung tab3",
  description: "nice tablet",
  price: 24.055,
  stock: 125,

  //methods
  display: function () {
    return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.description} ve fiyat: ${this.price}`;
  },
  is_active: function () {
    return this.stock > 0 ? "satışta" : "stok yok";
  },
};

//pattern => copy1,copy2

// rectagle => name,width,height
//person => name,surname,dateofbirth

console.log(product.title);
console.log(product.description);
console.log(product.price);

console.log(product.display());

console.log(product.is_active());
