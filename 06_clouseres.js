// function sayHelloTo(name) {
//     const massage = 'Hello ' + name;
//     return function () {
//         console.log(massage);
//     }
// }
// const helloToElena = sayHelloTo('Elena');
// const helloToIgor = sayHelloTo('Igor');
// helloToElena();
// helloToIgor();

// function createFrameworkManager() {
//     const fw = ['Angular', 'React'];
//     return {
//         print: function () {
//             console.log(fw.join(' '));
//         },
//         add: function (framework) {
//             fw.push(framework);
//         }
//     }
// }
//
// const manager = createFrameworkManager();
// console.log(manager);
// manager.print();
// manager.add('VueJS');
// manager.print();

//setTimeout

const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${j}`)
        }, 1500);
    })(i);

}
