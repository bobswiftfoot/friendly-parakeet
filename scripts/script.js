//List of all valid characters
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numericalCharacters = "123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Booleans for case prompts
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

//Get the length the user wants
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

//Prompt for all 4 cases
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

//Prompt for character types
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
