/*
✅ 1,对象的定义
1，对象其实就是键值对的集合
2，可以使用typeof来对对象类型进行简单的检查，但需要注意排除null的情况。
3，在开发中，经常会用到hasOwnProperty方法来过滤对象原型成员。
*/

/*
✅ 2,对象的获取方式
① 字面量的方式创建对象
② 内置构造函数创建对象
③ 封装工厂函数创建对象
④ 定义构造函数创建对象
⑤ 构造函数+原型对象=原型链继承创建对象
⑥ 调用系统方法创建对象
*/
// ① 字面量的方式创建对象
var bookObj = {
	name: "声名狼藉者的生活",
	price: 42.00,
	author: "福柯",
	press: "北京大学出版社",
	read: function() {
		console.log("我的书名为:声名狼藉者的的生活,作者为福柯....");
	}
};
// ② 内置构造函数创建对象
/*
String
Number
Boolean
Date
Array
Function
Object
RegExp
*/
// ③ 封装工厂函数创建对象
//提供工厂函数
function createBookNew(name, price, author, press) {
	var book = new Object();
	book.name = name;
	book.price = price;
	book.author = author;
	book.press = press;
	book.read = function() {
		console.log("我的书名为:" + book.name + ",作者为" + book.author + "....");
	};

	return book;
}

//使用工厂函数来创建对象
var book1 = createBookNew("声名狼藉者的的生活", "42.00", "福柯", "北京大学出版社");
var book2 = createBookNew("人性的枷锁", "49.00", "毛姆", "华东师范大学出版社");
var book3 = createBookNew("悟空传", "28.00", "今何在", "湖南文艺出版社");

//打印对象的属性,调用对象的方法
console.log(book1.name);
console.log(book2.name);
console.log(book3.name);
book1.read();
book2.read();
book3.read();

// ④ 定义构造函数创建对象
 //提供构造函数
function CreateBook (name,price,author,press) {
   //使用new调用该构造函数时,默认在内部会先创建Object类型的实例对象
   //并把该对象关联到当前构造函数的原型对象上，并把函数内的this绑定到该对象
   //通过this来给实例对象设置属性和方法
    this.name = name;
    this.price = price;
    this.author = author;
    this.press = press;
    this.read = function () {
        console.log("我的书名为:"+this.name+",作者为"+this.author+"....");
    };

  //默认总是把新创建的实例对象返回
}

//使用new + 函数名() 的方式来调用
var bookObj2 = new CreateBook("声名狼藉者的的生活","42.00","福柯","北京大学出版社");

// ⑤ 构造函数+原型对象=原型链继承创建对象

// ⑥ 调用系统方法创建对象
/*
✅ 3,对象的定义

*/
