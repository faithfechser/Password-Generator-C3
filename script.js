// Assignment Code
var generateBtn = document.querySelector("#generate");

// global character variables
var charLetterLow = "abcdefghijklmnopqrstuvwxyz"
var charLetterUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charNumberic = "0123456789"
var charSpecial = "!?.-_@#$*~"

// character user prompt
var passLength = prompt("How long would you like your password to be? (Password may contain 8 to 128 characters)")

if (passLength <8 || passLength > 128 || isNaN(passLength)) {
  alert("Input error, password may only contain 8 to 128 characters.")
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
