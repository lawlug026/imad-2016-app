
/*

//Moving the image
var marginLeft=0;
var moveRight=function(){marginLeft+=1; img.style.marginLeft=marginLeft+"px";};
var img=document.getElementById('madi');
img.onclick=function(){var interval=setInterval(moveRight, 20);
};

var maintext=document.getElementById("mainBody");
*/


//Counter Button

var counterButton=document.getElementById('counter');
var counterc=0;
counterButton.onClick = function(){
    //Make a request to counter endpoint

    
    //Capture the response & store it in a variable

    
    //render the variable to the current span
    counterc=counterc+1;
    var span=document.getElementById('count');
    span.innerHTML=counterc.toString();
    
    
};