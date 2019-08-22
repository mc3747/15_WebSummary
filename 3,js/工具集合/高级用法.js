//✅ 1，取代if的条件判断
const getScore = score => {
		const scoreData = new Array(101).fill(0).map((data, idx) => ([idx, () => (idx < 60 ? '不及格' : '及格')]))
		const scoreMap = new Map(scoreData)
		return (scoreMap.get(score) 
					? scoreMap.get(score)() 
					: '未知分数')
}
console.log(getScore(0));

//类数组对象的遍历
/*
1，document.getElementsByTagName()语句返回(document.querySelectorAll(selector);)
2，function代码内的arguments变量
3, string

*/
//var a =  "rtretew";
//let test =function(a,b) {
//	[1].prototype.forEach.call(this.arguments, (el, idx, list) => {
//		console.log(el) // 元素节点
//	})
//}
//test(1, 2);