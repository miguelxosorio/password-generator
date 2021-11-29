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
var askLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var randomPassword = "";
  askLength = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
 
  
  
  if (!askLength) {
    alert("Your input needs to be a number between 8 to 128!");
  } 
  
  else if (askLength < 8 || askLength > 128) {
    askLength = parseInt(prompt("Put a number between 8 to 128"));
  } 
  
  else {
    confirmNumber = confirm("Do you want to include numbers?");
    confirmCharacter = confirm("Do you want to include special characters?");
    confirmUppercase = confirm("Do you want to include Uppercase Letters?");
    confirmLowercase = confirm("Do you want to include Lowercase letters?");
  }
  
  if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
    alert("You need to select atleast 1 character type!");
  } 
  
  // Selected true for all character types
  else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {
    randomPassword = number.concat(character, lowerCase, upperCase);
  }

  
  
  
  // Selected true for 3 options
  else if (confirmNumber && confirmCharacter && confirmUppercase && !confirmLowercase) {
    randomPassword = number.concat(character, upperCase);
  }

  else if (confirmNumber && confirmCharacter && !confirmUppercase && confirmLowercase) {
    randomPassword = number.concat(character, lowerCase);
  }

  else if (confirmNumber && !confirmCharacter && confirmUppercase && confirmLowercase) {
    randomPassword = number.concat(lowerCase, upperCase);
  }

  else if (!confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {
    randomPassword = character.concat(lowerCase, upperCase);
  }





  // Selected true for 2 options
  else if (confirmNumber && confirmCharacter && !confirmUppercase && !confirmLowercase) {
    randomPassword = number.concat(character);
  }

  else if (confirmNumber && !confirmCharacter && !confirmUppercase && confirmLowercase) {
    randomPassword = number.concat(lowerCase);
  }

  else if (confirmNumber && !confirmCharacter && confirmUppercase && !confirmLowercase) {
    randomPassword = number.concat(upperCase);
  }

  else if (!confirmNumber && confirmCharacter && confirmUppercase && !confirmLowercase) {
    randomPassword = character.concat(upperCase);
  }
  
  else if (!confirmNumber && !confirmCharacter && confirmUppercase && confirmLowercase) {
    randomPassword = lowerCase.concat(upperCase);
  }

  else if (!confirmNumber && confirmCharacter && !confirmUppercase && confirmLowercase) {
    randomPassword = character.concat(lowerCase);
  }





  // Selected true for 1 option
  else if (confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
    randomPassword = number;
  }
  
  else if (!confirmNumber && confirmCharacter && !confirmLowercase && !confirmUppercase) {
    randomPassword = character;
  }

  else if (!confirmNumber && !confirmCharacter && confirmLowercase && !confirmUppercase) {
    randomPassword = lowerCase;
  }

  else if (!confirmNumber && !confirmCharacter && !confirmLowercase && confirmUppercase) {
    randomPassword = upperCase;
  }

  var finalPassword = []


  for (let index = 0; index < askLength; index++) {
    finalPassword.push(randomPassword[(Math.floor(Math.random() * randomPassword.length))]);
    console.log(finalPassword);
  }
  
  finalPassword = finalPassword.join('');
  



  return finalPassword;
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