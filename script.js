var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordLength = null; 
var confirmNumericCharacters = false;
var confirmLowercaseCharacters = false;
var confirmUppercaseCharacters = false;
var confirmSpecialCharacters = false;
var trimmed = "";
var shuffled = "";

console.log(numericCharacters + upperCasedCharacters)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = trimmed;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = window.prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);
  if ( passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid value entered");
  }
  else {
    confirmNumericCharacters = window.confirm("Click OK to confirm numeric characters.");
    console.log(confirmNumericCharacters);
    confirmLowercaseCharacters = window.confirm("Click OK to confirm using lowercase characters");
    console.log(confirmLowercaseCharacters);
    confirmUppercaseCharacters = window.confirm("Click OK to confirm using uppercase characters");
    console.log(confirmUppercaseCharacters);
    confirmSpecialCharacters = window.confirm("Click OK to confirm using special characters");
    console.log(confirmSpecialCharacters);

    //Get characters from an array - choose from these arrays to create password
    var rand = "";

    for (let i = 1; i <= passwordLength; i++) {
    
    if (confirmNumericCharacters) {
      rand+= numericCharacters[(Math.random() * numericCharacters.length) | 0]
    } 
    if (confirmUppercaseCharacters) {
      rand+= upperCasedCharacters[(Math.random() * upperCasedCharacters.length) | 0]
    }
    if (confirmLowercaseCharacters) {
      rand+= lowerCasedCharacters[(Math.random() * lowerCasedCharacters.length) | 0]
    }
    if (confirmSpecialCharacters) {
      rand+= specialCharacters[(Math.random() * specialCharacters.length) | 0]
    }
    }
    console.log(rand) 
    console.log(rand.length)
    //Loop pull numeric,uppercase,lowercase,special characters

    trimmed = rand.substring(0, passwordLength);
    console.log(trimmed); 

    var shuffled = rand.split('').sort(function(){return 0.5-Math.random()}).join('');
  } 
}





