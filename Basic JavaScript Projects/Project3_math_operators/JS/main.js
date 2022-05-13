function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2+2=" + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction;

}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 =" + simple_Math;
}

function division() {
    var simple_Math2 = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 =" + simple_Math2;
}

function more_Math() {
    var simple_Math3 = (1 + 2) * 10 / 2 - 5;
    document.getElementById("More").innerHTML = "1 plus 2, multipied by 10, divided in half and then subtracted by 5 equals..." 
    + simple_Math3;
}

function modulus_Operator() {
    var simple_Math4 = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: "
    + simple_Math4;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Maths").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var Y = 11;
Y--;
document.write(Y);

window.alert(Math.random());

window.alert(Math.random()*100);

const Round = Math.round(5.7);
document.write(Round);
