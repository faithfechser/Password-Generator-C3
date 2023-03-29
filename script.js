// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var characterLetterLow = "abcdefghijklmnopqrstuvwxyz"
var characterLetterUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characterNumberic = "0123456789"
var characterSpecial = "!?.-_@#$*~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
