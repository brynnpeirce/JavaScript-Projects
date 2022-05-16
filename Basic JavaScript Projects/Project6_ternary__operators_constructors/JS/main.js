function Ride_Function() { 
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; // less than 52 = too short to ride. greater than 52= tall enough to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function newAndThis() {
    document.getElementById("New_and_This").innerHTML = 
    "I like Emily's car, it's a  " + Emily.Vehicle_Make +  Emily.Vehicle_Model + ", my favorite part is that it's  " +
    Emily.Vehicle_Color + ", my two favorite colors";
}


function nFunction() { // a nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;  
    }
}