console.log('Loaded!');
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
var counter=0;
var counterButton=document.getElementById("counter");
counterButton.onClick= function(){
    //Make a request to counter endpoint

    
    //Capture the response & store it in a variable

    
    //render the variable to the current span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};