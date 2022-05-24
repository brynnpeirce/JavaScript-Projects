function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " would make a great pet!";
    switch(Animals) {
        case "Panda Bear":
            Animal_Output = "Panda Bear" + Animal_String;
            break;
        case "Cow":
            Animal_Output = "Cow" + Animal_String;
            break;
        case "Tiger":
            Animal_Output = "Tiger" + Animal_String;
            break;
        case "Lion":
            Animal_Output = "Lion" + Animal_String;
            break;
        case "Snake":
            Animal_Output = "Snake" + Animal_String;
            break;
        case "Platypus":
            Animal_Output = "Platypus" + Animal_String;
            break;
            default:
            Animal_Output = "Please enter an animal exactly as written on the above list";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Gradient");
var ctx = c.getContext("2d");

//gradient
var grd = ctx.createLinearGradient(75,50,5,90,60,100);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");

//fill gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);