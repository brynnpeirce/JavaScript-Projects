function my_Dictionary() {
    var colors = {
        RD: "red",
        YLW: "yellow",
        BL: "blue",
        OR: "orange",
        PRL: "purple",
        PRL: "pearl"

    };
    delete colors.RD;
    document.getElementById("Dictionary").innerHTML = colors.PRL;
}