function My_First_Function() {  //first function called My_First_Function
    var str='This is the button test!'; //variable is a string that will say "This is a button test"
    document.getElementById('Button_Text').innerHTML=str; 
}

function myFunction() { //second function called myFuntion
    var sentence = "I am learning"; 
    sentence += " a lot from this book."; //This string will add on to the string above
    document.getElementById("concatenate").innerHTML = sentence; //This will allow HTML to call on JS
}

