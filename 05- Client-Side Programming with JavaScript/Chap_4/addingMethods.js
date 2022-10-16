//create the critter
//from addingMethods.html

var critter = new Object();

//add some properties
critter.name = "Milo";
critter.age = 5;

//create a method
critter.talk = function(){
    msg = "Hi ! My name is "+ this.name;
    msg += " and I'm "+ this.age;
    alert(msg);
} //end method

//call the talk method
critter.talk();