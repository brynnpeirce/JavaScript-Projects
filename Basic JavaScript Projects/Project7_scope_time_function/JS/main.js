// global variable
var A = 12;
function Add_numbers_1() {
    document.write(20 + A + "<br>");
}

function Add_numbers_2() {
    document.write(A + 100);
}

Add_numbers_1();
Add_numbers_2();

// local variable
function Add_numbers_3() {
    var X = 12;
    document.write(20 + X + "<br>");
}

//will show error in console.log
function Add_numbers_4() {
    document.write(X + 100);
}

Add_numbers_3();
Add_numbers_4();


function date_Function() { // if statement
    if (new Date().getHours() > 18 ) {
        document.getElementById("Date").innerHTML = "Good evening!";
    }
}

function if_Statement() {
if (5 > 1) {
    document.getElementById("work").innerHTML= "five is greater than 1!";
}
}

function Color_Function() { //if/else statement
    color = document.getElementById("color").ariaValueMax;
    if (color == "purple") {
        Vote = "Thats my favorite color too!";
    }
    else {
        Vote = "Meh";
    }
    document.getElementById("favorite_Color").innerHTML = Vote;
}

function Time_function() { //else if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}