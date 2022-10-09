//from forloops.html

//start function
var output;

function init(){
    output = document.getElementById("output");
}

function count(){
    output.innerHTML="";
    for(i=1; i<=10; i++){
        output.innerHTML += i +"<br/>";
    }//end for loop
}//end count function

function back(){
    output.innerHTML="";
    for(i=10;i>=1;i--){
        output.innerHTML += i + "<br/>";
    }//end for loop
}//end function

function byFives(){
    output.innerHTML="";
    for(i=1; i<=20;i++){
        if (i%5==0){
            output.innerHTML += i +"<br/>";            
        }
    }//end loop
}//end function