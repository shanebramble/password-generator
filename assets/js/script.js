// Variable Declarations
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Prompts for password criteria
var passwordCriteria = function () {
  var passwordLength = parseInt(prompt("Length of password: [8 -128] "));

  if (isNaN(passwordLength)) {
    alert("Please enter a numeric value");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a length between 8 -128");
    return;
  }

  // Prompt selections
  var isSpecialCharacter = confirm(
    "Would you like to include special characters?"
  );
  var isnumericCharacter = confirm(
    "Would you like to include numeric characters?"
  );
  var isLowerCase = confirm("Would you like to include Lower Case characters?");
  var isUpperCase = confirm("Would you like to include Upper Case characters?");

  if (
    isSpecialCharacter === false &&
    isnumericCharacter === false &&
    isLowerCase === false &&
    isUpperCase === false
  ) {
    alert("At least one character criteria needs to be confirmed.");
    passwordCriteria();
  }

  // An object to hold the different password criteria.
  var passwordCriteriaOptions = {
    length: passwordLength,
    special: isSpecialCharacter,
    numeric: isnumericCharacter,
    lower: isLowerCase,
    upper: isUpperCase,
  };
  return passwordCriteriaOptions;
};

var randomIndexing = function (passwordArray) {
  var randomIndexNumber = Math.floor(Math.random() * passwordArray.length);
  var randomPlacement = passwordArray[randomIndexNumber];
  return randomPlacement;
};


// Create to password based on input criteria
var generatePassword = function () {
  var finalPassword = [];
  var holderArray = [];
  var criteriaSelected = passwordCriteria();

  if (criteriaSelected.special) {
    // From the array of special characters,randomly add to another array.
    holderArray.push(randomIndexing(specialCharacters));
  }
  if (criteriaSelected.numeric) {
    holderArray = randomIndexing(numericCharacters);
  }
  if (criteriaSelected.lower) {
    holderArray = randomIndexing(lowerCaseCharacters);
  }
  if (criteriaSelected.upper) {
    holderArray = randomIndexing(upperCaseCharacters);
  }

  for (var i = 0; i < criteriaSelected.length; i++)
  {
    finalPassword[i] = 
  }

  var combinedResultArray = finalPassword.join('');

  return combinedResultArray;
};

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