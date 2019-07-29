// var newscript = document.createElement('script');
// newscript.setAttribute('type','text/javascript');
// newscript.setAttribute('src','bb.js');
// var head = document.getElementsByTagName('head')[0];
// head.appendChild(newscript);


function aa() {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', 'bb.js');
	document.getElementsByTagName('head')[0].appendChild(script);
	// test();
	console.log('aaa');
}
