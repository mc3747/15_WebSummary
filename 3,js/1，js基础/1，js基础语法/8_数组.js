//数组的本质也是对象，key值默认从0开始
//数组可以存放不同类型的数据,
var arr = [
	6,
	'adf',
	{a: 1},
	[1, 2, 3],
	function() {return true;}
];
console.log(typeof(arr));
console.log(Object.keys(arr));