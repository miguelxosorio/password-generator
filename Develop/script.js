//charset link http://www.net-comber.com/charset.html  
  
  // 1. confirm user for the password criteria then user selects criteria
    //  1.a user chooses length of at least 8 characters and no more than 128 characters
    //  1.b confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // 2. input should be validated and at least one character type should be selected
  // 3. generate password based on criteria
  // 4. display the generated password

// Assignment code here

// Password Values
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Prompts
var confirmNumber = confirm("Do you want to include numbers?");
var confirmCharacter = confirm("Do you want to include special characters?");
var confirmUppercase = confirm("Do you want to include Uppercase Letters?");
var confirmLowercase = confirm("Do you want to include Lowercase letters?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var randomPassword = "";
  
  if (confirmNumber) {
    randomPassword = randomPassword + number + character + lowerCase + upperCase;
  } 

  
  if (confirmCharacter) {
    randomPassword = randomPassword + character + number + lowerCase + upperCase;
  } 


  if (confirmUppercase) {
    randomPassword = randomPassword + upperCase + number + character + lowerCase;
  } 


  if (confirmLowercase) {
    randomPassword = randomPassword + lowerCase + upperCase + character + number;
  } 

  

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// // Loop 
//  for (var i = 0; i < array.length; i++) {
//  
//  const element = array[i];
  
// }