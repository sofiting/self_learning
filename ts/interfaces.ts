interface calculatePrice {
  iva: number;
  finalPrice: (price: number) => number;
}

interface discount {
  priceWithDiscount: (price: number, discount: number) => number;
}

class Milk implements calculatePrice, discount {
  public price: number;
  iva: number = 0.21;
  constructor(price: number) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  priceWithDiscount(price: number, discount: number): number {
    const discountedPrice = price - (price * discount) / 100;
    return this.finalPrice(discountedPrice);
  }

  finalPrice(price: number): number {
    return price + (price * this.iva) / 100;
  }
}

const milk = new Milk(10);
var finalDisPrice: number = milk.priceWithDiscount(milk.getPrice(), 0.3);
console.log("price after discount", finalDisPrice);
console.log("final price: ", milk.finalPrice(finalDisPrice));
