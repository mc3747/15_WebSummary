//✅，1，满足某些条件时执行函数
/*
为非假值时执行
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();

数组不为空时执行
const arr = [0, 1, 2];
arr.length && Func();

对象不为空时执行
const obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();
*/