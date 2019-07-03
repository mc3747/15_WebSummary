/*
✅，1，创建函数的3种方式：
① 函数声明
② 字面量方式创建
③ 使用Function构造函数创建
*/

//01 函数声明
//函数名称为：f1,a和b为该函数的形式参数（形参）
function f1(a, b) {
	return a + b;
}

//02 字面量创建函数
//使用字面量创建匿名函数并赋值给f2,可以通过f2来调用,a和b为该函数的形式参数（形参）
var f2 = function(a, b) {
	return a + b;
};

//03 构造函数创建：下面写法可以省略function关键字
//f3函数为Function这个构造函数的实例化对象，如果不传递参数，那么创建出来的函数没有任何用处。
//在创建实例对象的时候我们可以通过参数列表的方式来指定f3的结构。
//构造函数的参数中最后一个参数为函数体的内容，其余均为函数的形参。
var f3 = new Function("a", "b", "return a + b");

/*
✅，2，函数式特殊的对象
函数具有对象的一般性：
❐ 函数可以拥有属性和方法。
❐ 函数可以保存在变量、对象和数组中。
❐ 函数可以作为其它函数的参数（称为函数回调）。
❐ 函数可以作为函数的返回值进行返回。
函数具有自身的特殊性：
① 函数可以被（）运算符调用[最重要]。
② 函数可以创建独立的作用域空间。
③ 函数拥有标配的prototype属性。
*/

/*
✅，3，默认属性和方法
1，this
2，arguments：参数数组
3，length参数个数
4，name函数名称
默认方法：
1，toString：返回函数整体字符串
2，apply
3，call
*/

/*
✅ 4，函数调用方式
① 普通函数调用模式
② 对象方法调用模式
③ 构造函数调用模式
④ 上下文的调用模式
*/
// ① 普通函数调用模式
function f4(){
	console.log(f1(5, 6));
}
	

// ② 对象方法调用模式
	// 对象是键值对的集合，对象可以拥有属性和方法。
	// 当函数被保存为对象的属性时，我们称之为方法。
	//02 o对象中拥有name属性和showName方法
var o1 = {
	name: "文顶顶",
	showName: function() {
		console.log(this.name); //文顶顶
	}
};
	//03 以对象方法调用模式来调用showName函数
function f5(){
	o1.showName(); //this被绑定到o对象
}
//  ③ 构造函数调用模式
	// 构造函数：如果一个函数创建出来之后，我们总是希望使用new 前缀来调用它，那这种类型的函数就被称为构造函数。构造函数和普通函数本质上没有任何区别，
	// 开发者总是约定以函数名首字母大写的方式来人为进行区分
	//01 声明构造函数Person
   function Person() {
       console.log(this);
   }
 function  f6(){
	      //02 以构造函数的方式来调用Person
	   new Person();  //this被绑定到Person的实例化对象
   }
//  ④ 上下文的调用模式
	//声明函数f
   function f(a,b) {
       console.log(a, b, a+b);
       console.log(this);       //使用上下文模式调用时，this被绑定给o对象
       console.log(this.name);  //wendingding
   }
   //字面量的方式创建对象
   var o2 = {name:"wendingding"};

   //使用apply和call方法来调用函数
   function f7(){
	     f.apply(o2, [1,2]);
		 f.call(o2,3,4);
   }
 