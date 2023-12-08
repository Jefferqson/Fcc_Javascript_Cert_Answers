# The exercise starts with a string
palindrome_string = "A man, a plan, a canal. Panama"
new_string = ""
for ch in palindrome_string:
    if ch.isalpha():
        ch += new_string
    else:
        pass
if new_string == new_string[::-1]:
    print(True)
else:
    print(False)
