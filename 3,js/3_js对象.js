// 创建方式
function objectData() {
	// 1，常规方法
	person = new Object();
	person.firstname = "John";
	person.lastname = "Doe";
	person.age = 50;
	person.eyecolor = "blue";

	// 2，字面量方法
	person1 = {
		firstname: "John",
		lastname: "Doe",
		age: 51,
		eyecolor: "blue"
	};
	// 3，使用对象构造器：Person函数
	person2 = new Person("John", "Doe", 52, "blue");
	console.log('1，new Object方法✅' + JSON.stringify(person));
	console.log('2，字面量方法✅' + JSON.stringify(person1));
	console.log('3，使用对象构造器方法✅' + JSON.stringify(person2));
	
}
// 对象构造器1：可以使用函数用this，也可以直接写变量
function Person(firstname, lastname, age, eyecolor) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.eyecolor = eyecolor;
	// 添加方法要写如下两句：复杂函数作为属性
	this.changeName=changeName;
	 function changeName(name)
    {
        this.lastname=name;
    };
	// 简易函数作为属性
	 this.fullName = function () 
	{
	  return this.firstName + " " + this.lastName;
	}
}
// 对象构造器2：可以使用函数用this，也可以直接写变量
var Person1 = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};

// 对象添加属性：
function objectData1() {
	person = new Person("John", "Doe", 52, "blue");
	console.log('添加和修改属性前：✅' + JSON.stringify(person));
	person.age = '100';
	person.newProperty = 'AAA';
	console.log('添加和修改属性后：✅' + JSON.stringify(person));
}

// 对象添加方法
function objectData2() {
	person = new Person("John", "Doe", 52, "blue");
	console.log('添加方法前：✅' + JSON.stringify(person));
	person.changeName('🍎AAA');
	console.log('添加方法后：✅' + JSON.stringify(person));
}

// 访问对象属性：
function objectData3() {
	person = new Person("John", "Doe", 52, "blue");
	// 1,点访问属性
	console.log('点访问属性✅'+person.firstname);
	// 2,中括号访问属性
	console.log('点访问属性✅'+person['firstname']);
}

// 访问对象方法：
function objectData4() {
	person = new Person("John", "Doe", 52, "blue");
	console.log('加括号输出方法表达式✅' + person.fullName);
	console.log('加括号输出方法结果✅' + person.fullName());
	console.log('加括号输出方法表达式✅' + Person1.fullName);
	console.log('加括号输出方法结果✅' + Person1.fullName());
	
}