//from regex.html

function testRegex(){
    var regex = document.getElementById("txtRegex").value;
    var working = document.getElementById("txtWork").value;
    var output = document.getElementById("output");
    
    if(working.match(regex)){
        output.style.backgroundColor = "#AAFFAA";
        output.innerHTML = "It's a match!";
    } else {
        output.style.backgroundColor = "#FFAAAA";
        output.innerHTML = "Not a match";
    }//end if
}//end function