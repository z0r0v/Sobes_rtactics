// const preson = {
//     surname: 'Stark',
//     knows: function (what, name) {
//         console.log(`You ${what} knows, ${name} ${this.surname}`);
//     }
// };
// preson.knows('all', 'Brane');
// const john = {surname: 'Snow'};
// preson.knows.call(john, 'nothing', 'John');
// preson.knows.apply(john, ['nothing', 'John']);
// preson.knows.call(john, ...['nothing', 'John']);
// preson.knows.bind(john, 'nothing', 'John')();
// const bound = preson.knows.bind(john, 'nothing', 'John');
// bound();
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
//
// const elena = new Person('Elena', 20);
// // яаная привязка контекста
// function logThis() {
//     console.log(this);
// }
//
// const obj = {num: 42};
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();
//
//
// // не явная привязка контекста
// const animal = {
//   legs: 4,
//     logThis: function () {
//         console.log(this);
//     }
// };
// animal.logThis();

function Cat(color) {
    this.color = color;
    console.log("this", this)
    ;( () => console.log('Arrow this', this))()

};

new Cat('red');