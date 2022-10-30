//from radioGroup.html

//start function
function fight(){
    var weapon = document.getElementsByName("weapon");
    for (i =0; i < weapon.length; i++){
        currentWeapon = weapon[i];
        
        if(currentWeapon.checked){
            var selectedWeapon = currentWeapon.value;
        }//end if
    }//end for
    var output = document.getElementById("output");
    var response = "<h2>You defeated the dragon with a ";
    response += selectedWeapon + "</h2> \n";
    output.innerHTML = response;
}//end function