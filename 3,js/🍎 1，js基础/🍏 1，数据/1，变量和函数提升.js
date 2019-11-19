//1，变量提升
var a = 10;
function foo() {
	console.log(a); // ??
	var a = 20;
	
}
foo();

//2，函数提升
f1();
function f1() {
	console.log('我是f1')
}

//3，函数作为变量提升：下列代码报错
//f2();
//var f2 = function (){
//	console.log('我是f2')
//};