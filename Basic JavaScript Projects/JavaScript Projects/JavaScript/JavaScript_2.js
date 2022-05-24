function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Form must be filled out before you submit");
        return false;
    }
}