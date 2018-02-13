export class Inventory {
  constructor(pasta, pizza, cannoli, espresso, gnocci, wine) {
    this.pasta = pasta;
    this.pizza = pizza;
    this.cannoli = cannoli;
    this.espresso = espresso;
    this.gnocci = gnocci;
    this.wine = wine;
  }

  addRandomFood() {
    setInterval(() => {
      let number = Math.floor(Math.random() * 6);
      switch(number){
        case 0:
          this.pasta++;
          break;
        case 1:
          this.pizza++;
          break;
        case 2:
          this.cannoli++;
          break;
        case 3:
          this.espresso++;
          break;
        case 4:
          this.gnocci++;
          break;
        case 5:
          this.wine++;
          break;
      }
    }, 1000)
  }
}
