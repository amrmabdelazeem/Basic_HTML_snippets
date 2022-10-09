//from ifElse.html

function checkName(){
    lblOutput= document.getElementById("lblOutput");
    txtInput= document.getElementById("txtInput");
    
    userName= txtInput.value;
    
    //start if statement
    if (userName == "Tim Berners-Lee"){
        lblOutput.innerHTML ="Thanks for inviting HTML!";
    }
    else{
        lblOutput.innerHTML= "Do I know you?";
    } //end if
} // end function