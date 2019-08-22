//1，时间比对：
const time1 = "2019-02-14 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime = time1 > time2;
console.log(overtime);


//2，格式化金钱：千分位
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214.99);
console.log(money);


//3,生成星级评分
const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(4);
console.log(start);

//4,操作URL查询参数:获取url字符串中的参数
const url = 'https://segmentfault.com/a/1190000014747781?utm_source=young&sex=male';
//方法1：split方法
function getUrlParam1(sUrl, sKey) {
	var left= sUrl.indexOf("?") + 1
	var right= sUrl.lastIndexOf("#")
	var parasString = sUrl.slice(left, right)
	var paras = parasString.split('&');
	var parasjson = {}
	paras.forEach(function (value, index, arr) {
		var a = value.split('=');
		parasjson[a[0]] !== undefined ? parasjson[a[0]] = [].concat(parasjson[a[0]], a[1]) : parasjson[a[0]] = a[1];
	});
 
	let result = arguments[1] !== void 0 ? (parasjson[arguments[1]] || '') : parasjson;
	return result
}

//方法2：正则匹配：Exec方法
function getUrlParam2(sUrl, sKey) {
	var resObj = {};
	var reg = /(\w+)=(\w+)/g;
	while (reg.exec(sUrl)) {
		resObj[RegExp.$1] ? resObj[RegExp.$1] = [].concat(resObj[RegExp.$1], RegExp.$2) : resObj[RegExp.$1] = RegExp.$2;
	}
	if (sKey) {
		return (resObj[sKey] ? resObj[sKey] : '');
	}
	return resObj;
}

//方法3：如果在浏览器中获取，直接用以下方法
//const params = new URLSearchParams(location.search.replace(/\?/ig, ""));
//params.has("young"); // true
//params.get("sex"); // "male"

console.log(getUrlParam2(url,"utm_source"));
