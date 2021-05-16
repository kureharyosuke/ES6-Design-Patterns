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
const personFunc = new Person("John", 20);
personFunc.getDetails(); // Output - “John is 20years old!”

const personClass = new Person2("John", 20);
personClass.getDetails(); // Output - “John is 20years old!”

// 아래 코드에서 이름과 나이 속성을 가진 함수 / 클래스 Person을 정의했습니다.
// getDetails () 메소드는 사람의 이름과 나이를 형식으로 인쇄합니다.
// "이름은 나이가되었습니다!"
// 구문은 (a) 전통적인 함수 기반 구문과 (b) EC6 클래스 구문의 두 가지 형식으로 제공됩니다.
// 그런 다음 new 키워드를 사용하여 생성자 메서드를 호출하고 각 속성 값을 전달하여 Person 클래스에 대한 개체를 인스턴스화합니다.
