function full_Sentence() {  //will connect all variables together to creat a whole sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function slice_Method() { //will pick out a cetain word from the string 
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); // will take out anything but characters 27-33
    document.getElementById("Slice").innerHTML = Section;
}

function upper_case() { // changes lowercase to uppercase
    var str = "hello";
    var string = str.toUpperCase();
    document.write(string);
}
upper_case();

function search_for() {  // function can search for something in specified string
var string = "Mr. Blue has a blue dog";
document.write(string.search("dog"));
}
search_for();

function string_Method() { //prints out numbers like it is a string
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { 
    var X = 12938.301292837636276377;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_method() {
    var num = 5.588769;
    document.getElementById("fix").innerHTML = num.toFixed();
}

function value_of() {
    var B = "Brynn Peirce";
    document.getElementById("value").innerHTML = B.valueOf();
}