/*区别：
1，let var，表示变量，const 表示常量，
2， let 和 const 都是块级作用域，var全局
3，let，const且在当前作用域有效不能重复声明，var可以
4，let没有变量提示，var可以
*/

console.log(a)
var a=10;

//let
//console.log(b)
//let b=5;

function foo() {
	console.log(a); 
//	console.log(b); 
}

foo();