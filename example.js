require('./typs.js');

class B {
	constructor() {
		this.x = '42'
		this.logT = () => console.log('BT')
	}	
	log(){
		console.log('B')
	}
}
B.prototype.__types__ = {}

class A{
	constructor() {
		this.x = '24'
		this.logT = () => console.log('AT')
	}
	log(){
		console.log('A');
	}
}
A.prototype.__types__ = {
	b: B,
	a: A,
}

var parsed = TYPS.parse({b:{x:11, y:99}, a:{b:{}}, x:10, y:66}, A);
console.log('parse:');
console.log(parsed);
console.log('stringify:');
console.log(TYPS.stringify(parsed));
