//✅ES6 的类，完全可以看作构造函数的另一种写法
class B {}
let b = new B();
console.log(B.prototype.constructor)
console.log(b.constructor)

//✅constructor：一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
class Foo {
	constructor() {
		return Object.create(null);
	}
}
let foo = new Foo();
console.log(foo.constructor)
console.log(Foo.prototype.constructor)
console.log(foo instanceof Foo)

//✅定义类
class Point {
//	实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
	constructor(x, y) {
	//	自身属性	
		this.x = x;
		this.y = y;
	}
	//	原型方法
	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

var point = new Point(2, 3);
point.toString() // (2, 3)
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true

//✅class的get和set
class MyClass1 {
	constructor() {

	}
	get prop() {
		return 'getter';
	}
	set prop(value) {
		console.log('setter: '+value);
	}
}

let inst = new MyClass1();
inst.prop = 123;
console.log(inst.prop);

//✅属性表达式:可以使用变量，用中括号
let methodName = 'getMethod';
let propertyName = 'getProperty';
class MyClass2 {
	constructor(length) {
		// ...
	}
	[propertyName] = '我是属性';
	[methodName]() {
		console.log('我是属性表达式')
	}
}
let demo2 = new MyClass2();
demo2.getMethod();
console.log(demo2.getProperty);

//✅类可以使用立即表达式：不用创建class类名
let demo3 = new class {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}('张三');

demo3.sayName(); // "张三"