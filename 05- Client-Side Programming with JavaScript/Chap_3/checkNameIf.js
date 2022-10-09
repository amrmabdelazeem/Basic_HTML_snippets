// from if.html

function checkNameIf(){
    lblOutput = document.getElementById("lblOutput");
    txtInput = document.getElementById("txtInput");
    
    userName = txtInput.value;
    
    if(userName == "Tim Berners-Lee"){
        lblOutput.innerHTML = "Thanks for Inventing HTML";
    } //end if
} // end function