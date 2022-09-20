function createPhone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let phone1 = new createPhone('Apple', 'Iphone X', 1000);
let phone2 = new createPhone('Samsung', 'Galaxy S', 1000);

console.log(phone1);
console.log(phone2);
