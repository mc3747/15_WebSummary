// 对方法进行封装
function addScript(url){
	document.write("<script language=javascript src="+url+"></script>");
}
addScript('bbb.js');

function a(){
	test();
	console.log('aaa');
}
