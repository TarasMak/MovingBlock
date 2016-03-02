document.addEventListener('keydown', handler, false);

function handler (e){
  var block1 = document.getElementById("block");
  var top = window.getComputedStyle(block1).getPropertyValue('top');
  var left = window.getComputedStyle(block1).getPropertyValue('left');
  e = e || window.event;
  var key=e.charCode ||e.keyCode;
  console.log(e.type, key);
 if  (key===37||key===100){block1.style.left=(parseInt(left, 10)-50) + "px";}
  else if  (key===38||key===104){block1.style.top=(parseInt(top, 10)-50) + "px";}
  else if  (key===39||key===102){block1.style.left=(parseInt(left, 10) + 50) + "px";}
  else if  (key===40||key===98){block1.style.top=(parseInt(top, 10) + 50) + "px";}
  else if  (key===105){block1.style.top=(parseInt(top, 10) - 50) + "px"; block1.style.left=(parseInt(left, 10) + 50) + "px";}
   else if  (key===99){block1.style.top=(parseInt(top, 10) + 50) + "px"; block1.style.left=(parseInt(left, 10) + 50) + "px";}
  else if  (key===97){block1.style.top=(parseInt(top, 10) + 50) + "px"; block1.style.left=(parseInt(left, 10) - 50) + "px";}
   else if  (key===103){block1.style.top=(parseInt(top, 10) - 50) + "px"; block1.style.left=(parseInt(left, 10) - 50) + "px";}
  else if  (key===101){block1.style.backgroundColor="#" + Math.floor(Math.random()*255)  + ";" + Math.floor(Math.random()*255)  + ";" + Math.floor(Math.random()*255);}
  
}