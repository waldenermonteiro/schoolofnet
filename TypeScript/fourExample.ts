  class Animal {
    constructor(public name: string, public color: string) {}
    private sex
    protected id
    correr() {}
  
    private andar() {}
  
     comer() {}
  }
  class Coelho extends Animal {
    comer() {
        console.log(super.id)
    }
  }
  let coelho = new Coelho("Meu Coelho", "black");
  