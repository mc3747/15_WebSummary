//✅使用Object.create方法创建对象
/*
Object.create(proto, [propertiesObject])

参数说明
第一个参数proto：新创建对象的原型对象。
第二个参数propertiesObject：可选的参数，如果没有指定为 undefined，则表示要添加到新创建对象的可枚举属性信息，存放对象的属性描述符以及相应的属性名称。

如果传入的参数为null，则创建出来的空对象不会继承Object原型成员，没有基础方法。
如果传入的参数为Object.prototype，那么创建出来的对象等同于{}空对象。
*/
////01 字面量方式创建对象obj
//var obj = {name:"wendingding",age:18};
//console.log(obj);
//
////02 使用Object.create方法来创建新对象
//var o = Object.create(obj);
////o是一个空对象，o.__proto__指向obj对象
//console.log(o);
////wendingding 访问原型对象obj上面的name属性
//console.log(o.name);
//
////03 测试传入null的情况
//var o1 = Object.create(null);
////打印结果为空对象，No properties 该对象身上没有任何成员
//console.log(o1);
//
////04 测试传入Object.prototype的情况
//var o2 = Object.create(Object.prototype);
////o2 是空对象，等价于{}
//console.log(o2);

//✅对象的操作：增删改查
 //00 提供obj对象
//通过字面量方式创建obj对象，该对象现在拥有name属性和showName方法
//因使用字面量方式创建，所有obj的原型对象(__proto__)指向object.prototype
var obj = {
	name:"wendingding",
	showName:function () {
		console.log(this.name);
	}
};

//01 添加属性或方法
//a 使用点语法来为obj对象添加age属性和showAge方法
obj.age = 18;
obj.showAge = function (){
	console.log(this.age);
};

//b 使用中括号语法来为obj对象添加age属性和showAge方法
obj["class-name"] = 41;
obj["showClassName"] = function () {
	console.log(this["class-name"]);
};

//02 修改属性或方法
//如果对象的属性已经存在，那么设置该属性的时候表示修改
obj.age = 20;
obj.showAge = function (){
	console.log("年龄" + this.age);
};

//03 查询属性或者调用方法
console.log(obj.name);      //wendingding
console.log(obj["age"]);    //20
obj.showName();             //wendingding
obj["showName"]();          //注意，不推荐使用这种方法

//04 删除对象中的属性或方法
//语法形式：delete 对象.属性 | delete 对象[属性]
delete obj.name;
delete obj["showName"];
console.log(obj);

//05 对象的遍历
for (key in obj)
{
	 console.log(key, obj.key);
}