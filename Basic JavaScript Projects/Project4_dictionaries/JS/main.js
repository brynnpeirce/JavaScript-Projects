function my_Dictionary() { //function that can be called on in html
    var colors = { //dictionary of colors
        RD: "red", 
        YLW: "yellow",
        BL: "blue",
        OR: "orange",
        PRL: "purple",
        PRL: "pearl"

    };
    delete colors.RD; //deleted the color red
    document.getElementById("Dictionary").innerHTML = colors.PRL; //print pearl
}