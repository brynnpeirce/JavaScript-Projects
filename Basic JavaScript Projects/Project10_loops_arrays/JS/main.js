function Call_Loop() {  // while loop. will write out 1-99
    var Digit = "";
    var X = 1;
    while (X < 100) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function text_Length() { // .length will display how many characters are in a given sentence
    var text = "How many characters are in this sentence?";
    document.getElementById("Length").innerHTML = text.length
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //created an array 
    var num = [];
    num[0] = "50";
    num[1] = "27";
    num[2] = "18";
    num[3] = "23";
    document.getElementById("Array").innerHTML = "I am " + num[3] + " years old.";
}

function constant_function() { 
    const dinner = {drink:"Diet Coke", app:"Ceasar Salad", main:"Mac-n-Cheese", dessert:"Chocolate Cake"};
    dinner.drink = "Italian Soda";
    dinner.cook = "My mom";
    document.getElementById("Constant").innerHTML = "The meal " + dinner.cook + " cooked was amazing." 
    + "We started with " + dinner.app + " and ended with " + dinner.dessert + "!";
}

function let_keyword() { //using let keyword
    let B = "Brynn";
    document.getElementById("keyword").innerHTML = B;
}

let house = { //example of using .description 
    color: "white",
    bedrooms: "3",
    bathrooms: "2",
    AC: "yes",
    description: function() {
        return "The color of the house is " + this.color + ", it has " + this.bedrooms + " bedrooms and " + this.bathrooms + " bathrooms.";
    }
} ; 
document.getElementById("house_object").innerHTML = house.description();