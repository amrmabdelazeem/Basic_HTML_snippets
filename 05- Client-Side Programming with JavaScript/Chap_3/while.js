//from while.html

function getPassword(){
    var correct = "HTML5";
    var guess = "";
    
    while(guess != correct){
        guess = prompt("Password?");
    }//end while
    alert("You may proceed");
}// end get password

function threeTries(){
    //continue until user is correct
    //or has three incorrect guesses
    //from while.html
    
    var correct = "HTML5";
    var guess = "";
    var keepGoing = true;
    var tries = 0;
    
    while(keepGoing){
        guess = prompt("Password?");
        if(guess== correct){
            alert("You may proceed");
            keepGoing= false;
        }
        else{
            tries++;
            if (tries>=3){
                alert("Too many tries. Launching missiles...");
                keepGoing = false;
            }//end if
        }//end if
    }//end while
}//end function