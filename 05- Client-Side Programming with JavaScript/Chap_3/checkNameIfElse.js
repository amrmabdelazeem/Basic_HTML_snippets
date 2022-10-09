// from ifElseIF.html

// start function

function checkName(){
    lblOutput = document.getElementById("lblOutput");
    txtInput = document.getElementById("txtInput");
    
    userName = txtInput.value;
    
    //start if
    if (userName == "Tim Berners-Lee"){
        lblOutput.innerHTML = "Thanks for Inventing HTML!";
    } else if(userName == "Al Gore"){
        lblOutput.innerHTML = "Thanks for inventing the internet";
    } else if(userName == "Hakon Wium Lie"){
        lblOutput.innerHTML = "Thanks for inventing CSS";
    } else {
        lblOutput.innerHTML = "Do I KNOW you?";
    } // end if else
} // end function