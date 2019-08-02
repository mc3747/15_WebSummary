//函数声明的3种方式
//✅ 1，function命令
function print1(s) {
	console.log(s);
}
//✅ 2，函数匿名表达式
var print2 = function(s) {
	console.log(s);
};
//✅ 3，函数声明表达式
//好处：一是可以在函数体内部调用自身，二是方便除错
var print3 = function f(s) {
	console.log(s);
	console.log(f);
};
//✅ 4，Function 构造函数
var print4 = new Function(
	's',

	'return x + y'
);