// Factory Pattern : 팩토리 패턴
// 팩토리 패턴은 클래스가 객체를 생성하는 패턴

class Person {
  constructor() {}

  make(type) {
    switch (type) {
      case "house":
        return new House();
      case "car":
        return new Car();
      default:
        return false;
    }
  }
}

class House {
  constructor() {}

  say() {
    console.log(`I'm House`);
  }
}

class Car {
  constructor() {}

  say() {
    console.log(`I'm Car`);
  }
}

const person = new Person();

const house = person.make("house");
const car = person.make("car");

house.say(); // I'm House
car.say(); // I'm Car

//Factory method for creating new shape instances | //새 모양 인스턴스를 만드는 공장 방법
function shapeFactory() {
  this.createShape = function (shapeType) {
    let shape;
    switch (shapeType) {
      case "rectangle":
        shape = new Rectangle();
        break;

      case "square":
        shape = new Square();
        break;

      case "circle":
        shape = new Circle();
        break;
      default:
        shape = new Rectangle();
        break;
    }
    return shape;
  };
}

// Constructor for defining new Rectangle | // 새 직사각형을 정의하는 생성자
let Rectangle = function () {
  this.draw = function () {
    console.log("This is a Rectangle");
  };
};

// Constructor for defining new Square | // 새 정사각형을 정의하는 생성자
let Square = function () {
  this.draw = function () {
    console.log("This is a Square");
  };
};

// Constructor for defining new Circle | // 새 원형을 정의하는 생성자
let Circle = function () {
  this.draw = function () {
    console.log("This is a Circle");
  };
};

const factory = new shapeFactory();

// Creating instance of factory that makes rectangle,square,circle respectively
// 직사각형, 정사각형, 원형을 각각 만드는 공장 인스턴스 생성

let rectangle = factory.createShape("rectangle");
let square = factory.createShape("square");
let circle = factory.createShape("circle");

rectangle.draw();
square.draw();
circle.draw();

/*
OUTPUT

This is a Rectangle
This is a Square
This is a Circle

*/

// "객체를 만들기위한 인터페이스를 정의하되 하위 클래스가 인스턴스화 할 클래스를 결정하도록합니다."
// 이 패턴은 일반적으로 비슷한 문자를 공유하지만 적절한 사용자 지정 호출을 통해 다른 개체 그룹을 처리해야 할 때 사용됩니다. 예를 들면 더 명확 해집니다.
