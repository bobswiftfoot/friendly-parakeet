//TODO
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numericalCharacters = "123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var lowerCase = false;
var upperCase = false;
var numericalCase = false;
var specialCase = false;

function generatePassword()
{
  var passwordLength = lengthPrompt();
  casePrompts();

  var validCharacters = "";
  if(lowerCase)
  {
    validCharacters += lowerCaseCharacters;
  }
  if(upperCase)
  {
    validCharacters += upperCaseCharacters;
  }
  if(numericalCase)
  {
    validCharacters += numericalCharacters;
  }
  if(specialCase)
  {
    validCharacters += specialCharacters;
  }

  var password = "";
  for(var i = 0; i < passwordLength; i++)
  {
    password += validCharacters[Math.floor(Math.random() * (validCharacters.length))];
  }

  return password;
}

function lengthPrompt()
{
  var length = window.prompt("How long do you want your password? (Enter # between 8-128)");
  length = parseInt(length);
  if(length >= 8 && length <= 128)
  {
    return length;
  }
  window.alert("Please enter a valid input.")
  return lengthPrompt();
}

function casePrompts()
{
  lowerCase = characterPrompt("lowerCase");
  upperCase = characterPrompt("upperCase");
  numericalCase = characterPrompt("numerical");
  specialCase = characterPrompt("special");

  if(!lowerCase && !upperCase && !numericalCase && !specialCase)
  {
    window.alert("At least one character set must be chosen.")
    return casePrompts();
  }
}

function characterPrompt(type)
{
  var responce = window.prompt("Do you want " + type + " characters? (Yes/No)").toLowerCase();

  switch(responce)
  {
    case "yes": 
    {
      return true;
    }
    case "no":
    {
      return false;
    }
    default:
    {
      window.alert("Please enter a valid input.")
      return characterPrompt(type);
    }
  }
}

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
