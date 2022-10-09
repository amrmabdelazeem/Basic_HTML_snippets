// from switch.html

function checkName(){
    var name = prompt("What is your name?");
    
    switch(name){
        case "Bill Gates":
            alert("Thanks for MS Bob!");
            break;
        case "Steve Jobs":
            alert("The Newton is awesome");
            break;
        default:
            alert("Do I know you?");
    }//end
}//end function