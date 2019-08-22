//✅ 1，判断对象的类型:比typeof对象类型更细
const type = data => Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
console.log(type([]));

console.log(typeof([]));