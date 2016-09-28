
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

var button=document.getElementById('counter');




var func=function(){
    //Create a request to counter endpoint
    var request=new XMLHttpRequest();

    
    //Capture the response & store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
          //Take sone action
          if(request.status==200)
          {
              var counter=request.responseText;
               var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          }
          
      }  
    };
    
    //Make a request
    request.open('GET', "http://lawlug026.imad.hasura-app.io/counter", true)
    request.send(null);
   
    
    
};