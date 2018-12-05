function decorators (color) {
	return function(target){
		target.color = color;
	}
}

// 使用时传递一个参数，如 'red'
@decorators('red')
class Car {
   
}

console.log(Car.color);  // 输出我们指定的参数red.