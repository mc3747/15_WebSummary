//✅，1，原型对象 
//01 声明构造函数Person
function Person(name) {
	this.name = name;
}

//02 打印构造函数相关联的原型对象
console.log(Person.prototype);  //Objec类型的空对象

//03 给构造函数原型对象添加方法
Person.prototype.showName = function () {
	console.log(this.name);
};

//04 使用构造函数创建实例对象
var p = new Person("文顶顶");
p.showName();       //文顶顶
console.log(p);

 //✅，2，获取原型对象的方式
//01 构造函数访问原型对象：构造函数.prototype
console.log(Person.prototype);

//02 构造函数的实例对象访问原型对象：实例对象.__proto__
console.log(p.__proto__);
console.log(p.__proto__ == Person.prototype);

//03 通过Object.getPrototypeOf方法传递实例对象作为参数访问
console.log(Object.getPrototypeOf(p));

//✅，3，设置原型对象：方案1① 利用对象的动态特性设置
 //01 声明构造函数Person
function Person1(name,age) {
	this.name = name;
	this.age = age || 18;
}

//02 给构造函数原型对象添加方法
//设置原型对象的第一种方法
Person1.prototype.showName = function () {
	console.log("姓名 "+this.name);
};
Person1.prototype.showAge = function () {
	console.log("年龄 "+this.age);
};

//04 使用构造函数创建实例对象
var p1 = new Person1("文顶顶");
p1.showName();       //姓名 文顶顶
p1.showAge();        //年龄 18

var p2 = new Person1("章飞一绝",99);
p2.showName();       //姓名 章飞一绝
p2.showAge();        //年龄 99

//✅，4，设置原型对象：方案2② 替换原有的原型对象
//01 声明构造函数Person
function Person3(name,age) {
	this.name = name;
	this.age = age || 18;
}

//02 给构造函数原型对象添加方法
//设置原型对象的第二种方法：直接替换原先的原型对象
/*
注意 如果是直接替换原型对象，那么需要修正构造器属性，让constructor指向构造函数。
说明 因为替换的时候其实是用字面量的方式重新创建了新的对象，该对象作为Object构造函数的原型对象，内部没有constructor属性。这个时候如果要通过实例对象（比如p）的构造器属性判断其类型，那么会先在p身上找，没有则查找原型对象发现也没有，最终得到的Object.prototype身上的构造器属性，结果为Object 。
*/
Person3.prototype = {
	constructor:Person3,
	showName:function () {
		console.log("姓名 "+this.name);
	},
	showAge:function () {
		console.log("年龄 "+this.age);
	}
};

//04 使用构造函数创建实例对象
var p = new Person3("文顶顶rr");
p.showName();       //姓名 文顶顶
p.showAge();        //年龄 18
console.log(p.constructor); //Person函数



//✅，5,原型链继承的特性并解决方法的共享问题
//（1）提供Person构造函数
function Person4(name) {}
//（2）替换Person默认的原型对象
Person4.prototype ={
	//修正构造器属性 Object --> Person
	constructor:Person4,
	//提供实例对象的初始化方法
	init:function(name,age){
		this.name = name || "默认的姓名";
		this.age = age || 18;
	},
	//所有实例对象都需要访问的原型方法
	showName:function () {
		console.log(this.name);
	}
};
//（3）使用new来调用构造函数以创建实例对
var p4 = new Person4();
//（4）调用init方法对实例对象进行初始化操作
p4.init("文顶顶pp",20);
//（5）调用对象的方法
p4.showName();