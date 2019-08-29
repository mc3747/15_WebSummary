
//1,Class 可以通过extends关键字实现继承
//2,不管有没有显式定义，任何一个子类都有constructor方法
//3,只有调用super之后，才可以使用this关键字

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color; // ReferenceError
		this.color = color; // 正确
	}
}

//super关键字
//第一种情况，super作为函数调用时，代表父类的构造函数;super()只能用在子类的构造函数之中，用在其他地方就会报错
//第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
//super 只能访问原型对象，不能访问实例对象
class A {
	constructor() {
			this.x = 2;
		}
		
	y() {
		return 2;
	}
}
A.prototype.z = 3;

class B extends A {
	constructor() {
		super();
		console.log(super.x); 
		console.log(super.y()); 
		console.log(super.z); 
	}
}

let b = new B();