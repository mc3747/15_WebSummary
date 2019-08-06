//this总是指向一个对象
//✅ 3种使用场合
//1，全局的this：全局环境使用this，它指的就是顶层对象window
//function f() {
//	console.log(this === window);
//}
//f() // true

//2，构造函数的this：构造函数中的this，指的是实例对象
var Obj = function (p) {
	this.p = p;
};
var o = new Obj('Hello World!');
console.log(o.p);

//3，对象方法的this
var obj1 ={
	foo: function () {
		console.log(this);
	}
};
obj1.foo() // this指向obj1

//✅ 几种注意事项
//1，改变this的指向：如果单独使用对象的值
//(false || obj1.foo)() // window

//2，this的指向，要看上下文
var f = function () {
	console.log(this.x);
}
var x = 1;
var obj = {
	f: f,
	x: 2,
};
// 单独执行
f() // 1
// obj 环境执行
obj.f() // 2

//3，this使用多层嵌套的改进方式1：在第二层改用一个指向外层this的变量
var o1 = {
	f1: function() {
		console.log(this);
		var that = this;
		var f2 = function() {
			console.log(that);
		}();
	}
}

o1.f1()

//4，this使用多层嵌套的改进方式2：通过'use strict'声明采用严格模式，这时内部的this一旦指向顶层对象，就会报错

//5，避免数组处理方法中的 this ，
	//	使用中间变量固定this
var o2 = {
	v: 'hello',
	p: [ 'a1', 'a2' ],
	f: function f() {
		var that = this;
		this.p.forEach(function (item) {
			console.log(that.v+' '+item);
		});
	}
}

o2.f()
	//	将this当作foreach方法的第二个参数，固定它的运行环境
	var o3 = {
		v: 'hello',
		p: [ 'a1', 'a2' ],
		f: function f() {
			this.p.forEach(function (item) {
				console.log(this.v + ' ' + item);
			}, this);
		}
	}

	o3.f()
//6，避免回调函数中的 this