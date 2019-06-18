  function Color(){
     this.r = Math.floor(Math.random()*255);
     this.g = Math.floor(Math.random()*255);
     this.b = Math.floor(Math.random()*255);
     this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
  };
  
  var getRandomColor = function(){    
    return  '#' + (function(color){    
         return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])    
         && (color.length == 6) ?  color : arguments.callee(color);    
    })('');    
 } ;