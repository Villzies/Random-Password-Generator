// Assignment code here


function generatePassword() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 8;
  let password = "";
for (let i = 0; i <= passwordLength; i++) {
 let randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
}
console.log(generatePassword)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
