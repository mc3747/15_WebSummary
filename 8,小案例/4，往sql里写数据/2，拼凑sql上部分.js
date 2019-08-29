//⚠️name为更新的字段名，一定要记得修改
//⚠️：记得此结果不能直接运行sql，要和下部分合起来，否则先前数据全覆盖
//first和last为要更新的id首位序号
var string = 'UPDATE MyNewTable2 SET desc = CASE id';
var first = 200;
var last = 218;
var array = [
	'状态（空：全部；0：可使用；1：已使用；2：已过期）',
	'微信授权code',
	'页码，页码从1开始',
	'每页记录数',
	'总记产品录数',
	'总页数',
	'当前页码',
	'当前页记录数',
	'我的广金券列表',
	'我的广金券ID',
	'状态（0：可使用；1：已使用；2：已过期）',
	'面值',
	'来源描述',
	'抵扣描述',
	'获得日期',
	'失效日期',
	'使用日期',
	'最短投资期限（天）',
	'最小投资金额'
];
for (var i = first;i<=last;i++) {
	string = string + ` WHEN ${i} Then '${array[i-first]}'`;
}
string = string + ' END';
console.log(string);
//⚠️：此处结果不要直接拿来运行sql