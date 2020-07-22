// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }
//
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says myay`);
// };
//
// const cat = new Cat('Cat1', 'white');
// cat.voice();
// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);


// function Person() {};
// Person.prototype.legs = 2;
// Person.prototype.skin = 2;
// const person = new Person();
// person.name = 'Vladlen';
// console.log('skin' in person);
// console.log(person.legs);
// console.log(person.eyes);
// console.log(person.name);
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin')); //skin in prototype

const proto = {year: 2019};
const myYear = Object.create(proto);
console.log(myYear.year);
proto.year = 2200;
console.log(myYear.year);
// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);

