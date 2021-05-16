// 옛날스타일
function OldPerson(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    console.log(`[OLD] ${this.name} is ${this.age} year old`);
  };
}

// 인스턴스 생성
const oldPerson = new OldPerson("John", 20);
oldPerson.getDetails(); // [OLD] John is 20 year old

// 뉴 스타일

class NewPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
      console.log(`[NEW] ${this.name} is ${this.age} years old`);
    };
    // getDetails () 메소드는 사람의 이름과 나이를 형식으로 인쇄합니다.
  }
}

// 인스턴스 생성
const newPerson = new NewPerson("John", 20);
newPerson.say();

//  a) Traditional "function" based syntax

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };
}

//  b) ES6 "class" syntax

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
      console.log(`${this.name} is ${this.age} years old!`);
      // getDetails () 메소드는 사람의 이름과 나이를 형식으로 인쇄합니다.
    };
  }
}

//Creating new instance of Person
const personOne = new Person("John", 20);
personOne.getDetails(); // Output - “John is 20years old!”

//“생성자는 메모리가 할당 된 후에 새로 생성 된 객체를 초기화하는 데 사용되는 특별한 방법입니다. JavaScript에서는 거의 모든 것이 객체이므로 객체 생성자에 가장 관심이 많습니다. "
