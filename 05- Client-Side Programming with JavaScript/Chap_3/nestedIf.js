// from nestedIf.html

// start function
function checkTemp(){
    var temp = prompt("What is the temperature?");
    temp = parseInt(temp);
    
    //start if
    if (temp < 60){
        //less than 60
        if(temp <32){
            //less than 32
            alert("I'm freezing!");
        } else{
            //between 32 and 60
            alert("It's cold");
        }
    } else{
        //over 60
        if (temp < 75){
            //between 75 and 60
            alert("It's cool.");
        }else{
            if (temp > 90){
                alert("It's really hot!");
        } else{
            //between 75 and 90
            alert("It's warm.");
        }
    }
    }
}// end function