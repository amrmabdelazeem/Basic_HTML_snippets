// from checkboxes.html

function order(){
    //get variables
    var chkPepperoni = document.getElementById("chkPepperoni");
    var chkMushroom = document.getElementById("chkMushroom");
    var chkSausage = document.getElementById("chkSausage");
    var output = document.getElementById("output");
    
    var result = "<ul> \n"
    
    if (chkPepperoni.checked){
        result += "<li>" + chkPepperoni.value + "</li> \n"
    } //end if
    if (chkMushroom.checked){
        result += "<li>" + chkMushroom.value + "</li> \n";
    }//end if
    if (chkSausage.checked){
        result += "<li>" + chkSausage.value + "</li> \n";
    }//end if
    
    result += "</ul> \n"
    output.innerHTML = result;
}//end funcion