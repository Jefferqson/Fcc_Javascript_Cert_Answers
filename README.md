# Fcc_Javascript_Cert_Answers

Here is will I be putting passing answers I made for the five challenges to get the Javascript certification from FreeCodeCamp. I will also make Python equivalents for each. This will help me complete the challenges, since I am more familiar with Python and translating it from one to the other will help organize my thoughts. Additionally, it will help me keep track of the differences between the two, thereby learning both languages a little better.

(1) Palindrome Checker 
The goal here was to create a program that would detect if a string was a palindrome, including numbers and excluding punctuation and spaces. 
I completed this in Python first and tried to translate it over to Javascript. It took me not more than ten minutes to do this in Python, but considerably longer to do in Javascript. Largely, this was because Python has a convenient .reverse() method for strings, whereas Javascript does not. Javascript also does not have an .isalpha() method. To simplify the string and get rid of punctuation and make it lower case, therefore, required testing it against a regex, separately replacing spaces, and then setting it to lower case. Having done that, I made a simple for, if loop comparing the string from both sides and returning true if they match.
Later on, I learned that there is a .reverse() method in Javascript, but only for arrays. So, I made an alternative which uses the same regex filtering, but then turns the string into an array, reverses it, and turns it back into a string, comparing the input to the output to see if they match.

(2) Roman Numeral Converter
I was determined with this project not to have to type out 40 characters in numeralObject (1, 2, 3...10, 20, 30...100, 200, 300...1000, 2000, 3000) and instead find an easy way to get the program to make the correct number of I, X, C, and M. My first attempts did not work. I first tried to separate out the number argument by place value, but this proved to be more challenging that I thought. I had to separate out all the place values, first, and then apply to each the correct string from numeralObject, and then provide a separate line to get the correct multiples of I, X, C and M. However, even this did not work. So, instead, I tried to work from the other side and subtract values from the argument, and this worked much better. The code ended up looking rather neat since I learned that Javascript allows unpacking variables from objects.

(3) Ceaser Cipher
My first goal was to avoid having to type out every letter in the dictionary. This was not feasible. My second goal was to avoid having to type out an object of letter, number pairs for every letter in the alphabet. This proved more feasible. Solving this challenge was rather straightforward. The only conceptual difficulty was how to deal with letters from the second half of the alphabet being offset by 13. You can just subtract 13 from them, instead of adding it (though I had to count this out to be sure). The only syntactic difficulty I ran into was that Javascript did not seem to like the syntax of 0 <= variable <= 12 which the Python IDE I am using had shamed me into using. The only real difference with the Python version is that Python doesn't allow the .split() method to have an empty seperator like Javascript does. Instead, one can just use the list() function. 

(4) Telephone Validator
I won't be doing this one in Python too since it is really just a couple of regex and nothing else. I enjoyed this one. I broke the regex into two parts depending on whether or not there were 10 digits in a row or 3, 3, and 4 digits. I went through and considered as many cases as I could think of, then ran it against the tests on the site, modifying it along the way. 

(5) Cash Register
This final challenge was a step up from the previous ones, not only because it needed to do more things, but also because it involved using a nested array. It took a bit just to figure out what was being asked for. The first difficulty was figuring out how to break the change amount into the correct amount of each denomination. I used the same basic idea from the roman numeral challenge of subtracting each denomination value from the total change amount from highest to lowest. The much greater difficulty, however, was that I did this by creating a second, denomination values nested array. The output was an optimal array -- it put out the change with the least number of bills/coins. However, it didn't account for whether or not the drawer had those denomination in the optimal amounts. To deal with this, the simplest solution was to add a second condition -- the program should stop subtracting not just when doing so would result in the amount being negative or zero, but also if it would go over the amount of the denomination in the register. The easiest way to add this condition was to go through both arrays, which are in the same order, but doing this was not so simple. The solution, it seems, was to use a for loop with an i-variable so the program could effectively iterate through both arrays at the same time.
