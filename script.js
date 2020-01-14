document.getElementById("generate").addEventListener("click", function generatePassword() {

    var plength = prompt("How long would you like your password to be? (min 8, max 128)");
    var characters = confirm("Include special characters? (e.g. @#$)");
    var numeric = confirm("Include numbers? (e.g. 123)");
    var lowerCase = confirm("Include lowercase characters? (e.g. abc)");
    var upperCase = confirm("Include uppercase characters? (e.g. ABC)");
    var password = "";
    var passwordCharSet = "";

    let complexity = plength.value;

    if (plength < 8 || plength > 128) {
        alert("Error: choose a password within the length limits.");
    }

    else {

        if (characters) {
            passwordCharSet += "!@#$%^&*()";
        }
        else {
            passwordCharSet += "";
        }
            
        if (numeric) {
            passwordCharSet += "0123456789";
        }
        else {
            passwordCharSet += "";
        }

        if (lowerCase) {
            passwordCharSet += "abcdefghijklmnopqrstuvwxyz";
        }
        else {
            passwordCharSet += "";
        }

        if (upperCase) {
            passwordCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        else {
            passwordCharSet += "";
        }
    };
    console.log(passwordCharSet);

    for (i = 0; i < plength; i++) {
        password += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
    }
    console.log(password);

    if (password !== "") {
    document.querySelector("#passwordBox").value = password;
    }
    else {
        document.querySelector("#passwordBox").value = "Your Secure Password";
    }

    });
        
document.getElementById("copy").addEventListener("click", function() {
    document.getElementById("passwordBox").select();
    document.execCommand("Copy");
  alert("Password copied to clipboard");
});