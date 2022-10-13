// Assignment code here
function plength(error){
  if(error){
    alert("Number of characters not valid")
  }
  var length = prompt("Enter password length between 8 and 128 characters")
  if(length >= 8 && length <= 128){
    console.log("Valid pword")
  } else {
    plength("error")
  }
  return length
}
function ptype(error){
  if(error){
    alert("please select 1, 2, 3, or 4")
  }
  var uppercase = prompt("Please enter password type... 1:  lowercase  2: lowecase and uppercase 3:  lowercase, uppercase, and numeric 4:  lowercase, uppercase, numeric, and special characters.")
  if(uppercase != 1 && uppercase != 2 && uppercase != 3 && uppercase != 4){
    console.log(uppercase)
    ptype("error")
  
  } else {
    return uppercase
  }
  
}
function generatePassword(){
  var alphabetlower = "abcdefghijklmnopqrstuvwxyz";
  var alphabetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var number = "1234567890";
  var special = "!#$%&'()*+,-./:;<=>?@^_`{|}~";
  var result = ""
  var length = plength()
  var type = ptype()
  if(type == 1){ // lowercase only
    for ( var i = 0; i < length; i++ ) {
      result += alphabetlower.charAt(Math.floor(Math.random() * 
 alphabetlower.length));
   }

  } else if(type == 2 ) { // lower and upper
    var hold = alphabetlower + alphabetupper
    for ( var i = 0; i < length; i++ ) {
      result += hold.charAt(Math.floor(Math.random() * 
      hold.length));
   }
  } else if( type == 3){ // lower upper and numeric
    var hold = alphabetlower + alphabetupper + number
    for ( var i = 0; i < length; i++ ) {
      result += hold.charAt(Math.floor(Math.random() * 
      hold.length));
   }
  } else if ( type == 4) { // lower upper numeric and special
    var hold = alphabetlower + alphabetupper + number + special
    for ( var i = 0; i < length; i++ ) {
      result += hold.charAt(Math.floor(Math.random() * 
      hold.length));
   }
  }
  console.log(result)
  return result
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
