class Product {
  private name: string;
  static id: number = 1;

  //parecido final
  readonly fabrica: string[] = ["pepeMundo", "luisaFabric"];

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
  public sayHello() {
    console.log("hello");
  }

  static sayHi() {
    console.log("hi");
  }
}

const product = new Product("nata");
console.log(product.getName());
product.sayHello();
console.log(product.fabrica);

console.log(Product.id);
Product.sayHi();
