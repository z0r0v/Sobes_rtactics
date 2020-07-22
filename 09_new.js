function Cat(color, name) {
    this.color = color;
    this.name = name;
}

const cat1 = new Cat('black', 'Cat');
console.log(cat1);

function myNew(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj
}


const cat = myNew(Cat, 'black', 'Cat');
console.log(cat);


