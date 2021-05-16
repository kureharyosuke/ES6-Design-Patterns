class Resource {}
class Water extends Resource {}
class Espresso extends Resource {}

class Cup {
  constructor() {}
  add(재료: Resource): void {}
}

function 커피만들기() {
  const 컵: Cup = new Cup();
  const 물: Water = new Water();
  const 에스프레스: Espresso = new Espresso();

  컵.add(물);
  컵.add(에스프레스);

  return 컵;
}

커피만들기();
