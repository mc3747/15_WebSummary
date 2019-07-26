//✅ 1，闭包就是函数f2，即能够读取其他函数内部变量的函数
function f1() {
	var n = 999;
	function f2() {
		console.log(n);
	}
	return f2;
}

var result = f1();
result(); // 999

//✅ 2，闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在
function createIncrementor(start) {
	return function () {
		console.log(start);
		return start++;
	};
}

var inc = createIncrementor(5);
inc();
inc();
inc();
inc();

//✅ 3，闭包的另一个用处，是封装对象的私有属性和私有方法
function Person(name) {
	var _age;
	function setAge(n) {
		_age = n;
	}
	function getAge() {
		return _age;
	}

	return {
		name: name,
		getAge: getAge,
		setAge: setAge
	};
}

var p1 = Person('张三');
p1.setAge(25);
console.log(p1.getAge());

//✅4，闭包的缺点：外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。