// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate a random password based on user criteria
function generatePassword() {
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumeric = confirm("Include numbers?");
  var useSpecial = confirm("Include special characters?");

  // Define character sets based on user criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var allChars = "";

  if (useLowercase) allChars += lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumeric) allChars += numericChars;
  if (useSpecial) allChars += specialChars;

  if (allChars === "") {
    alert("At least one character type must be selected.");
    return "";
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
