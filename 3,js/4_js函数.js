function myFunction1()
{
    console.log("1普通函数");
}
function myFunction2(var1)
{
    console.log("2带参数的函数" + var1);
}
function myFunction3(var1)
{
    console.log("3带返回值的函数" + var1);
}
const myFunction4 = function () {
	console.log("4函数常量");
}

myFunction5 = ()=>{
	console.log("5箭头函数");
}

myFunction6 = (var1)=>{
	console.log("6带参数的箭头函数" + var1);
}
const myFunction7 = ()=>{
	console.log("7箭头函数常量");
}
function myFunction8(a,b)
{
	// arguments是个参数数组列表，
    console.log("8函数的默认参数");
	console.log(arguments[0]+'参数列表');
	console.log(arguments.length+'参数个数');
	// name：函数名称
	console.log(myFunction7.name+'函数的名称');
	// length，参数个数
	console.log(myFunction7.length+'参数的个数');
	// toString（），方法作为字符串返回
	console.log(myFunction7.toString+'函数作为字符串返回');
	console.log(myFunction7.toString()+'函数作为字符串返回');
}
function myFunction9(a,b=3){
	// ⚠🍉默认参数只能通过显示参数a，b访问，通过参数列表只能访问传入的值
	console.log(arguments[0]+'参数列表');
	console.log(arguments[1]+'参数列表');
	console.log(b+'参数b');
}
// 1，普通函数调用
function demo1(a,b){
	return a + b;
}
// 2，方法调用
var demo2 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function (a) {
        return this.firstName + " " + this.lastName + a;
    }
}
// 3，构造函数:
function demo3(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

// 4，作为函数方法调用：call() 和 apply() 是预定义的函数方法
function demo4(a,b){
	return a + b;
}
function myFunction10(){
	console.log('1,作为函数调用'+demo1(2,10));
	console.log('2,作为方法调用'+demo2.fullName(1));
	var x = new demo3("John","Doe");
	console.log('3,使用构造函数调用'+x.firstName);
	// 此处的this就是
	console.log('4,使用构造函数调用'+demo4.call(demo4,2,10));
	console.log('4,使用构造函数调用'+demo4.call(this,2,10));
}

function myFunction10(){
	
}