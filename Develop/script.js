// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  function generatePassword() {
    console.log("YO");
  
    // 1. prompt user for the password criteria then user selects criteria
    //  1.a user chooses length of at least 8 characters and no more than 128 characters
    //  1.b confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // 2. input should be validated and at least one character type should be selected
    // 3. generate password based on criteria
    // 4. display the generated password



    return "password here!";
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
