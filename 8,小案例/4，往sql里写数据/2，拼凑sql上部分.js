//⚠️name为更新的字段名，一定要记得修改
//first和last为要更新的id首位序号
var string = 'UPDATE MyNewTable1 SET type = CASE id';
var first = 333;
var last = 355;
var array = [
	 '总记产品录数',
	'有效产品数',
	'转让产品列表',
	'产品ID，股权代码',
	'转让ID',
	'产品名称',
	'产品短名称',
	'利率',
	'计息方式（1：一次性还本付息方式；2：按月付息到期还本；3：按月付息（以月利率计算利息）到期还本；4：按季付息；5：等额本息）',
	'计息方式描述',
	'投资期限（天）',
	'最低投资金额',
	'剩余可投金额，为0即为售罄',
	'是否可使用广金币',
	'是否可使用广金券',
	'起息日',
	'结息日',
	'风险评级',
	'转让价格',
	'原价',
	'差价',
	'转让状态（2：已申报；6：已成交；8：已撤单）',
	'转让用户ID'
];
for (var i = first;i<=last;i++) {
	string = string + ` WHEN ${i} Then '${array[i-first]}'`;
}
string = string + ' END';
console.log(string);