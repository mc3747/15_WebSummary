function decorators (color) {
	return function(target){
		target.color = color;
	}
}



console.log(Car.color);  // 输出我们指定的参数red.