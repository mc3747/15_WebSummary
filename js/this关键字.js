//✅1,this是什么？
/*
① this是JavaScript中所有函数的隐藏参数之一，因此每个函数中都能访问this。
② 函数中的this总是指向一个特定对象，该对象具体取决于函数的调用模式。
*/

//✅2,this的优点？
/*
this提供一种更优雅的方式来隐士的传递一个对象引用，因为拥有this，
所以我们可以把API设计得更加的简洁并且易于复用。简单点说，那就是this可以帮助我们省略参数
*/

//✅3,this指向谁？
/*this指向谁绑定给哪个对象并不是在编写代码的时候决定的，而是在运行时进行绑定的，
它的上下文取决于函数调用时的各种条件 。this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式
❐ 普通函数调用(默认绑定)
❐ 对象方法调用(隐式绑定)
❐ 构造函数调用(new绑定)
❐ 函数上下文调用(显式绑定)
*/

//✅3.1 ① 普通函数调用(默认绑定) 
	//如果是在非严格模式下，该this指向全局对象window，
	//如果是在严格模式下，不能将全局对象用于默认绑定，该this会绑定到undefined
//声明全局变量 t
var t = 123;           //所有全局变量自动成为全局对象的属性
function foo() {
//	console.log(this);  //this ---> 全局对象window
	console.log(this.t);//123
}
foo();  //非严格模式下:以普通函数方式调用

function fn() {
//	"use strict";      //作用域开启严格模式
//	console.log(this); //this --->undefined
	//Uncaught TypeError: Cannot read property 't' of undefined
	console.log(this.t);
}
fn();  //严格模式下:以普通函数方式调用

//✅3.2  ② 对象方法调用(隐式绑定)  
	//对象方法调用又称为隐式绑定，当函数引用有上下文对象的时候，隐式绑定规则会把函数调用中的this绑定到这个上下文对象
var name = "wenidngding";
function showName() {
	console.log(this.name);
}
//普通函数调用，函数中的this默认绑定到全局对象，打印wendingding
showName();
//对象的属性为函数
var obj = {
	name:"小猪佩奇",
	showName:showName
}
//对象方法调用，函数中的this绑定到当前的上下文对象obj,打印小猪佩奇
obj.showName();