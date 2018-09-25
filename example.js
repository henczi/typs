require('./typs.js');

class Foo {
	constructor() {
		this.x = '24';
	}
	log(){
		console.log('Foo');
	}
}

class Bar {
	constructor() {
		this.x = '42';
	}	
	log(){
		console.log('Bar')
	}
}

class Baz {
    log() {
        console.log('Baz')
    }
}


Foo.__types__ = {
	foo: Foo,
    bar: Bar,
    arrFoo: Foo,
    arrBar: Bar,
    baz: Baz,
}

Bar.__types__ = {
    foo: Foo,
    arrFoo: Foo,
}

var parsed = TYPS.parse({
    foo: { x: 1, y: 2 },
    bar: { z: 3 },
    baz: { w: 4 },
    arrFoo: [{ x: 10, y:20 }, { x: 11, y: 21 }, {}],
    arrBar: [
        { 
            foo: { x: 100, y:200 },
            arrFoo: [{ x: 1000, y:2000 }, {}] 
        },
        {},
    ],
    obj: {
        subObj: {
            str: 'test'
        },
        num: 99,
        bool: true,
        null: null,
    },
    x: 0,
    y: 0,
}, Foo);

console.log('parse:');
console.log(parsed);
console.log('stringify:');
console.log(TYPS.stringify(parsed));
