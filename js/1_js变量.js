// let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。
// 二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;       // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2

}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;       // 不同的变量    
        console.log(x);  // 2  
    }
    console.log(x);  // 1

}