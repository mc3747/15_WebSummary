//1，✅整数和小数
	//1，JavaScript 内部，所有数字都是以64位浮点数形式储存,1和1.0相等
	console.log(1 === 1.0);
	//2，由于浮点数不是精确的值
	console.log(0.1 + 0.2 === 0.3);
	console.log(0.3 / 0.1);
	console.log((0.3 - 0.2) === (0.2 - 0.1));


//2，✅数值精度
	//	Number对象的MAX_VALUE和MIN_VALUE属性，返回可以表示的具体的最大值和最小值
	console.log(Number.MAX_VALUE) 
	console.log(Number.MIN_VALUE)
	
//3,✅数值的进制
/*
十进制：没有前导0的数值。
八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
十六进制：有前缀0x或0X的数值。
二进制：有前缀0b或0B的数值。
*/

//4,✅特殊的数值
	//1，正零和负零：所有场合都是等价的，除了用作分母
console.log((1 / +0) === (1 / -0));

	//2，NaN：
	//表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错,数学公式转换的场合
	//NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number
console.log(0 / 0);
console.log(typeof(0 / 0));
console.log(typeof(NaN));
console.log(5 - 'x');
console.log(Math.sqrt(-1));

//	3,Infinity:表示“无穷”，Infinity表示正的无穷，-Infinity表示负的无穷
	
//5，✅与数值相关的全局方法
//1，parseInt()
//2，parseFloat()
//3，isNaN()
//4，isFinite()