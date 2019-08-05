/*
典型的面向对象编程语言（比如 C++ 和 Java），都有“类”（class）这个概念。所谓“类”就是对象的模板，对象就是“类”的实例
JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）
*/

/*
✅，1，构造函数的特点有3个。
为了与普通函数区别，构造函数名字的第一个字母通常大写
函数体内部使用了this关键字，代表了所要生成的对象实例。
生成对象的时候，必须使用new命令。
*/
var Vehicle = function (p) {
	this.price = p;
};

var v = new Vehicle(500);
console.log(v.price);

//✅，2，构造函数调用，忘记了new，就是普通函数，this这时代表全局对象
var Vehicle1 = function (p) {
	this.price = p;
};

var v1 =  Vehicle1(500);
console.log(price);

//✅，3，构造函数防止漏写new
//方法1，内部使用严格模式use strict
//方法2，构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象
var Vehicle3 = function (p) {
//	方法1：会报错提醒
//	'use strict';
//	方法2：则直接返回，一劳永逸
	 if (!(this instanceof Vehicle3)) {
			return new Vehicle3(p);
		}

	this.price = p;
};

var v3 =  Vehicle3(500);
console.log(v3.price);