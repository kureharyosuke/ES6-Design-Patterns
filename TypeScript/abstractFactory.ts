// 추상 팩토리 Abstract Factory
// 추상 팩토리는 여러 객체가 하나의 클래스 내에서 선언될 수 있도록 도와준다.

interface ICoffeeFactory {
  makeCup(): Cup;
  makeWater(): Water;
  makeEspresso(): Espresso;
}

class CoffeeFactory implements ICoffeeFactory {
  constructor() {}
  makeCup(): Cup {
    return new Cup();
  }
  makeWater(): Water {
    return new Water();
  }
  makeEspresso(): Espresso {
    return new Espresso();
  }
}

function coffeeMachine(factory: ICoffeeFactory) {
  const cup: Cup = factory.makeCup();
  const water: Water = factory.makeWater();
  const espresso: Espresso = factory.makeEspresso();

  cup.add(water);
  cup.add(espresso);

  return cup;
}

coffeeMachine(new CoffeeFactory());
