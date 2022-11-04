class Pizza {

  constructor(price) {
    this.toppings = ["Cheese"];
    this.crustStyle = ["Normal"];
    this.cookWellDone = true;
    this.lightSauce = true;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  changeCrust(crust) {
    this.crustStyle.shift(1);
    this.crustStyle.push(crust);
  }
  setSize(size) {
    this.size = size;
  }
 
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
}


}




let pizza1 = new Pizza();


pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
pizza1.changeCrust("Thick");
pizza1.size ='s'

console.log(pizza1);
console.log(pizza1.price);
