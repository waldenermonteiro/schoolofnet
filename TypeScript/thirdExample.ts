class Animal {
  constructor(public name?: string, public color?: string) {
    this.name = name;
    this.color = color;
  }
}

let myAnimal: Animal = new Animal("COELHÃO", "white");

myAnimal.color;

interface ObjectValue {
  category: string;
  product?: string;
}
function show({ category, product }: ObjectValue) {
  console.log(category);
  console.log(product);
}
show({ category: "Category", product: "Product" });

class Product implements ObjectValue {
  category: string;
}

let product = new Product();

product.category = "Category";

interface IAnimal {
  name: string;
  color: string;

  correr() 

  andar() 

  comer() 
}
class Animal2 implements IAnimal {
  constructor(public name: string, public color: string) {}
  correr() {}

  andar() {}

  comer() {}
}
class Coelho extends Animal2 {
  comer() {
      super.comer()
  }
}
let coelho = new Coelho("Meu Coelho", "black");
