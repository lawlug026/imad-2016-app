console.log('Loaded!');

var marginLeft=0;
var moveRight=function(){marginLeft+=1; img.style.marginLeft=marginLeft+"px";};
var img=document.getElementById('madi');
img.onclick=function(){var interval=setInterval(moveRight, 20);
};

var maintext=document.getElementById("mainBody");
maintext.innerHTML=maintext;