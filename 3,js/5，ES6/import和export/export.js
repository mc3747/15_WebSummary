// 1. 变量直接export
export let a1 = 100;

// 2. 变量或者函数统一export
let a2 = 200;
let a3 = 'aaa';
function f1(a,b){
	return a + b
}
export(a2,a3,f1);

// 3. 函数使用别名export
function f2(a,b){
	return a * b
}
export(F2 as f2);