var string = 'WHERE id IN (';
	var first = 333;
	var last = 355;
	for(var i = first; i <= last; i++) {
		if (i<last) {
			string = string + i + ','
		}else {
			string = string + i + ')'
		}
		
	};
	console.log(string);