//✅ 1，数组去重
const list = [1, 1, 2, 3, 6, 45, 8, 5, 4, 6, 5]
const uniqueList = [...new Set(list)] 
console.log(uniqueList);

//✅ 2，判断是否是空数组
const arr = [];
const flag = Array.isArray(arr) && !arr.length;
console.log(flag);

//✅ 3，克隆数组
const _arr = [0, 1, 2];
const arr2 = [..._arr];
console.log(arr2);

//✅ 4，合并数组
const arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

//✅ 5，清空数组
const arr6 = [0, 1, 2];
arr6.length = 0;
console.log(arr6);

//✅ 6，截断数组
const arr7 = [0, 1, 2];
arr7.length = 2;
console.log(arr7);

//✅ 7，交换赋值
let a = 0;
let b = 1;
[a, b] = [b, a];
console.log(a,b);

//✅ 8，过滤空值：undefined、null、""、0、false、NaN
const arr8 = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);
console.log(arr8);

//✅ 9，数组首部插入成员
let arr9 = [1, 2]; 
//方法1
//arr9.unshift(0);
//方法2
arr9 = [0].concat(arr9);
//方法3
//arr9 = [0, ...arr];
console.log(arr9);

//✅ 10，数组尾部插入成员
let arr10 = [0, 1]; 
//方法1
//arr10.push(2);
//方法2
//arr10.concat(2);
//方法3
//arr10[arr10.length] = 2;
//方法4
arr10 = [...arr10, 2];
console.log(arr10);

//✅ 11，统计数组成员个数
const arr11 = [0, 1, 1, 2, 2, 2];
const count11 = arr11.reduce((t, c) => {
	t[c] = t[c] ? ++ t[c] : 1;
	return t;
}, {});
console.log(count11);
// count => { 0: 1, 1: 2, 2: 3 }


//✅ 12，reduce代替map和filter
const _arr12 = [0, 1, 2];

// map
const arr13 = _arr12.map(v => v * 2);
const arr14 = _arr12.reduce((t, c) => {
	t.push(c * 2);
	return t;
}, []);
console.log(arr13,arr14);
// arr => [0, 2, 4]

// filter
const arr15 = _arr12.filter(v => v > 0);
const arr16 = _arr12.reduce((t, c) => {
	c > 0 && t.push(c);
	return t;
}, []);
console.log(arr15,arr16);
// arr => [1, 2]

// map和filter
const arr17 = _arr12.map(v => v * 2).filter(v => v > 2);
const arr18 = _arr.reduce((t, c) => {
	c = c * 2;
	c > 2 && t.push(c);
	return t;
}, []);
console.log(arr17,arr18);
// arr => [4]