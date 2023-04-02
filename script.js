// Assignment Code
var generateBtn = document.querySelector("#generate");

// global character variables
var charLetterLow = "abcdefghijklmnopqrstuvwxyz"
var charLetterUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charNumeric = "0123456789"
var charSpecial = "!?.-_@#$*~"

//password generator function
function generatePassword(){
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

  if (!useLetterLow && !useLetterUp && !useNumeric && !useSpecial){
    alert("At least one character type must be selected.")
    return "";
  }
  // turning character types into strings
  var character = "";
  if (useLetterLow) {
    character += charLetterLow;
  }
  if (useLetterUp) {
    character += charLetterUp;
  }
  if (useNumeric) {
    character += charNumeric;
  }
  if (useSpecial) {
    character += charSpecial;
  }

  //password generating forloop
  var password = "";
  for (var i = 0; i < passLength; i++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
