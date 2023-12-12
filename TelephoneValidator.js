function telephoneCheck(str) {
    let testRegex = /^1?[\s?|\-?]\d{10}$/
    let testRegexPara = /^1?\s?(\(\d{3}\)\s?|\-?\d{3}\-|\d{3}\s?)\d{3}(\s?|-?)\d{4}$/
    if(testRegex.test(str) || testRegexPara.test(str)) {
        return true;
    }
    return false;
  }
  
console.log(telephoneCheck("5555555555"));


possibleRegex = /^1?\s?(\(\d{3}\)\s?|\-?\d{3}\-|\d{3}\s?)\d{3}(\s?|-?)\d{4}$/

console.log(possibleRegex.test("1 (555) 555-5555"))

// first part -- ^1?\s?   Maybe a 1, maybe a space, maybe both, maybe neither
// will i need to remove possibility of just a space?

//second part -- \(\d{3}\)|\-?\d{3}\- either (###) or -###- or ###-
// but I also need _###_