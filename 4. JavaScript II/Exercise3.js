class Item {
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }
    basePrice() {
        return 1000;
    }
    calculatePriceWithDiscount() {
        return (this.basePrice() * (100 - this.discount) / 100).toFixed(2);
    }
}

var myItem = new Item("TV", 37.1126);
console.log(myItem.calculatePriceWithDiscount());