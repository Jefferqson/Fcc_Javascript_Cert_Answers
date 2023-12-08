function palindrome(str) {
    str = str.replace('_', "")
    let testRegex = /[a-zA-z0-9]/ 
    var newString = "";
    for (let i = 0; i < str.length; i++) {
        if(testRegex.test(str[i])) {  
            newString += str[i];
        }
    }
    console.log(newString);
    newString = newString.toLowerCase();
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] == newString[(newString.length - 1) - i] ) {
        } else {
            return false;
        }
    } 
    return true;
}
