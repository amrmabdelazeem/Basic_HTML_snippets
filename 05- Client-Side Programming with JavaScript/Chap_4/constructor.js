//building a constructor
//from constructor.html

function  Critter(lName, lage){
    this.name = lName;
    this.age = lage;
    this.talk = function(){
        msg = "Hi ! My name is " + this.name;
        msg += " and I'm " + this.age;
        alert(msg);
    }// end talk method
} // end Critter class def

function main(){
    //build two critters
    
    critterA = new Critter("Alpha", 1);
    
    critterB = new Critter("Beta", 2);
    critterB.name = "Charlie";
    critterB.age = 3;
    
    //have 'em talk
    
    critterA.talk();
    critterB.tak();
}// end main

main();