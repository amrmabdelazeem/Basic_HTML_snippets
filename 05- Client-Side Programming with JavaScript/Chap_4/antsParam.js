//using functions with parameters

function makeSong(){
    //create output variable
    var output = document.getElementById("output");
    output.innerHTML ="";
    
    output.innerHTML += verse(1);
    output.innerHTML += chorus();
    output.innerHTML += verse(2);
    output.innerHTML += chorus();
}//end makesong

function chorus(){
    var result = "...and they all go marching down <br/>";
    result += "to the ground <br/>";
    result += "to get out <br/>";
    result += "of the rain. <br />";
    result += "boom boom boom boom <br />";
    result += "boom boom boom boom <br /> <br/>";
    return result;
}//end chorus

//creating a function that takes parameters
function verse(verseNumber){
    var distraction;
    if (verseNumber == 1){
        distraction = "suck his thumb";
    } else if (verseNumber == 2){
        distraction = "tie his shoe";
    } else{
        distraction = "there's a problem here..";
    }//end else'
    
    var result = "The ants go marching ";
    result += verseNumber + " by " + verseNumber + ", ";
    result += "hurrah, hurrah <br/>";
    result += "The ants go marching ";
    result += verseNumber+ " by "+ verseNumber + ", ";
    result += "hurrah, hurrah <br/>";
    result += "The ants go marching ";
    result += verseNumber+ " by "+ verseNumber + "<br/>";
    result += "The little one stops to";
    result += distraction + "<br/> <br/>";
    
    return result;
}//end verse