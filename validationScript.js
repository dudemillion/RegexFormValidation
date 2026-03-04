// JavaScript code for form validation
let form = document.getElementById("myForm");
let output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    let input = document.getElementById("inputField").value;
    if (/^[a-zA-Z0-9]+$/.test(input) === false) {
        output.innerHTML = "Error! Input is not alphanumeric!";
        event.preventDefault();
    } else {
        alert("Successfully submitted!");
    }
})