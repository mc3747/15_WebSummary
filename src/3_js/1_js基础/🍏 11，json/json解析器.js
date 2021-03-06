var log = function () {
	console.log.apply(this, arguments)
}
//✅ 1.自定义json解析器
var MyJson = function (jsonStr) {
	this.i = 0
	this.str = jsonStr

	this.next = (n = 1) => {
		let newI = this.i + n
		if (newI <= this.str.length - 1) {
			this.i += n
		} else {
			throw new Error('指针越界')
		}
	}

	this.parseKeyWord = (keyWord, n) => {
		let keyWordDict = {
			'null': null,
			'false': false,
			'true': true,
		}
		let content = this.str.substr(this.i, n)
		if (content === keyWord) {
			this.next(n)
			return keyWordDict[keyWord]
		} else {
			throw new Error('意外的错误:' + this.i)
		}
	}

	this.parseString = () => {
		let result = ''
		this.next() // 扫描到 "
		while (this.str[this.i] !== '"') {
			result += this.str[this.i]
			this.next() // 去往下一个字符串的字符
		}
		this.next()
		return result //此时扫描到字符串末尾的 "
	}

	this.parseNumber = () => {
		let result = 0
		let numberStr = ''
		let endList = [',', ']', '}']
		while (!endList.includes(this.str[this.i])) {
			numberStr += this.str[this.i]
			this.next()
		}
		result = parseFloat(numberStr)
		return result
	}

	this.parseArray = () => {
		let result = []
		this.next()
		while (this.str[this.i] !== ']') {
			let ele = this.parseValue()
			result.push(ele)
			if (this.str[this.i] === ',') {
				this.next()
			}
		}
		this.next()
		return result
	}

	this.parseValue = () => {
		if (this.str[this.i] === '"') {
			return this.parseString()
		} else if (this.str[this.i] === '[') {
			return this.parseArray()
		} else if (this.str[this.i] === '{') {
			return this.parseObject()
		} else if (this.str[this.i] === 't') {
			return this.parseKeyWord('true', 4)
		} else if (this.str[this.i] === 'f') {
			return this.parseKeyWord('false', 5)
		} else if (this.str[this.i] === 'n') {
			return this.parseKeyWord('null', 4)
		} else {
			return this.parseNumber()
		}
	}

	this.parseObject = () => {
		this.next()
		let result = {}
		let key, value
		while (this.str[this.i] !== '}') {
			key = this.parseString()

			if (this.str[this.i] !== ':') {
				throw new Error('意外的语法,第' + this.i + "个字符")
			}

			this.next() // 此时到达匹配值处
			value = this.parseValue()
			result[key] = value
			if (this.str[this.i] === ',') {
				this.next() // 跳过,
			}
		}
		if (this.i + 1 < this.str.length - 1) {
			this.next()
		}
		return result //此时扫描到 }
	}

	this.parse = () => {
		return this.parseValue()
	}
}
var parse = function () {
	let jsonStr = '{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}'
//	let jsonStr = '{"error":0,"status":"success","date":"2014-05-10","results":[{"currentCity":"南京","weather_data":[{"date":"周六(今天, 实时：19℃)","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/dayu.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/dayu.png","weather":"大雨","wind":"东南风5-6级","temperature":"18℃"},{"date":"周日","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/zhenyu.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/duoyun.png","weather":"阵雨转多云","wind":"西北风4-5级","temperature":"21 ~ 14℃"}]}]}'
	var myJson = new MyJson(jsonStr)
	log(myJson.parse())
}

parse()

//✅ 2.系统自带json解析器:JSON.parse
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);
console.log(obj);

//✅ 3.系统自带json解析器:eval运算符
var obj1 = eval("(" + json + ")");
console.log(obj1);