// from distance.html

//the names of the cities
cityName = new Array["Indianapolis", "New York", "Tokyo", "London"];

//creating a 2-dimension array of distances
distance = new Array(
    new Array(0, 648, 6476, 4000),
    new Array(648, 0, 6760, 34700),
    new Array(6476, 6760, 0, 5956),
    new Array(4000, 3470, 5956, 0)
);

//creating the function to get the two cities
function getCity(){
    var theCity =""; //will hold the city number
    
    var cityMenu = "Please choose a city by typing a number: \n";
    cityMenu += "0) Indianapolis \n";
    cityMenu += "1) New York \n";
    cityMenu += "2) Tokyo \n";
    cityMenu += "3) London \n";
    
    theCity = prompt(cityMenu);
    return theCity;
}//end getCity