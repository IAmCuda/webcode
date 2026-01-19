//function constructor
function Product(title, description, price, stock) {
  //properties
  this.title = title;
  this.description = description;
  this.price = price;
  this.stock = stock;
  // methods
  ((this.display = function () {
    return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.description} ve fiyat: ${this.price}`;
  }),
    (this.is_active = function () {
      return this.stock > 0 ? "satışta" : "stok yok";
    }));
}

//object
const product1 = new Product("samsung s25", "iyidir iyi", 12500, 122);
const product2 = new Product("iphone 1", "fenaa", 16000, 0);
const product3 = new Product("iphone 15", "kötü", 10500, 500);

// console.log(
//   product1.title,
//   product1.description,
//   product1.price,
//   product1.stock,
// );
// console.log(
//   product2.title,
//   product2.description,
//   product2.price,
//   product2.stock,
// );
// console.log(
//   product3.title,
//   product3.description,
//   product3.price,
//   product3.stock,
// );

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

console.log(product1.is_active());
console.log(product2.is_active());
console.log(product3.is_active());
