// Assignment Code
var generateBtn = document.querySelector("#generate");

// global character variables
var charLetterLow = "abcdefghijklmnopqrstuvwxyz"
var charLetterUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charNumeric = "0123456789"
var charSpecial = "!?.-_@#$*~"

//random password function
function passwordGen(){
  // character user prompt
  var passLength = prompt("How long would you like your password to be? (Password may contain 8 to 128 characters)")
  // password length alert system
  if (passLength <8 || passLength > 128 || isNaN(passLength)) {
    alert("Input error, password may only contain 8 to 128 characters.")
    return "";
  }
  //local character type usage variables
  var useLetterLow = confirm("Should your password include lowercase letters?")
  var useLetterUp = confirm("Should your password include uppercase letters?")
  var useNumeric = confirm("Should your password include numeric characters?")
  var useSpecial = confirm("Should your password include special characters?")


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
