var string = 'WHERE id IN (';
	var first = 402;
	var last = 431;
	for(var i = first; i <= last; i++) {
		if (i<last) {
			string = string + i + ','
		}else {
			string = string + i + ')'
		}
		
	};
	console.log(string);