//TODO
//Arrays of lowercase/upper/numbers/special chars
//Ask for length between 8-128
//prompt for each of string arrays
//concat strings togethers as prompts go on
//check for no on all prompts and start over
//loop through length and random on the string
function generatePassword()
{
  var passwordLength = lengthPrompt();
  var lowerCase = characterPrompt("lowerCase");
  var upperCase = characterPrompt("upperCase");
  var numericalCase = characterPrompt("numerical");
  var specialCase = characterPrompt("special");
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
