document.write("11" + 7); //combining a string and a number
document.write(typeof "animal") // using typeof operator

function my_Function() {
    document.getElementById("A").innerHTML = 0/0
}

function number_One() {
document.getElementById("B").innerHTML = isNaN('Hello');
}

function number_Two() {
document.getElementById("C").innerHTML = isNaN(9);
}

document.write(-3E310)

document.write(3E310)

document.write(5<10);
document.write(5>10);

console.log(10+6);

console.log(10<4);

document.write(10 == 10); // comparing 2 variables
document.write(10 == 5+3);

var savings = 1000;
var checkings = 1000;
document.write(savings === checkings); //comparing two variables to be same type and value

document.write("happy" === 10); // will display false
document.write("ten" === 10); //false
document.write(10 === 11); ///false

document.write(10>11 && 10<12); //false
document.write(9>8 && 8<10); // true

document.write(10>9 || 10>1); //true
document.write(2<1 || 1>11); //false

function not_Function() {
    document.getElementById("Not").innerHTML = !(10>1); //false
}

function not_Function2() {
    document.getElementById("Notagain").innerHTML = !(10<1); //true
} 

