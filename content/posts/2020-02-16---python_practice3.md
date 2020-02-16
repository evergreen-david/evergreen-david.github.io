---
title: python-practice3
date: "2020-02-16T11:40:23"
template: "post"
draft: false
slug: "/posts/python-practice3"
category: "python-practice3"
description: "python-practice3"
tags:
  - "python"
---

#### 1. Complete the code to iterate through the keys and values of the car_prices dictionary, printing out some information about each one.
```Python
def car_listing(car_prices):
  result = ""
  for key in car_prices:
    result += "{} costs {} dollars".format(key,car_prices[key])+ "\n"
  return result

print(car_listing({"Kia Soul":19000, "Lamborghini Diablo":55000, "Ford Fiesta":13000, "Toyota Prius":24000}))


```

#### 2. Taylor and Rory are hosting a party. They sent out invitations, and each one collected responses into dictionaries, with names of their friends and how many guests each friend is bringing. Each dictionary is a partial list, but Rory's list has more current information about the number of guests. Fill in the blanks to combine both dictionaries into one, with each friend listed only once, and the number of guests from Rory's dictionary taking precedence, if a name is included in both dictionaries. Then print the resulting dictionary.

```Python
  # Combine both dictionaries into one, with each key listed 
  # only once, and the value from guests1 taking precedence
  combined_dic = guests1
  for key2 in guests2:
    if key2 in guests1:
      pass
    else:
      combined_dic[key2] = guests2[key2]
  
  return combined_dic

Rorys_guests = { "Adam":2, "Brenda":3, "David":1, "Jose":3, "Charlotte":2, "Terry":1, "Robert":4}
Taylors_guests = { "David":4, "Nancy":1, "Robert":2, "Adam":1, "Samantha":3, "Chris":5}

print(combine_guests(Rorys_guests, Taylors_guests))

```

#### 3. Use a dictionary to count the frequency of letters in the input string. Only letters should be counted, not blank spaces, numbers, or punctuation. Upper case should be considered the same as lower case. For example, count_letters("This is a sentence.") should return {'t': 2, 'h': 1, 'i': 2, 's': 3, 'a': 1, 'e': 3, 'n': 2, 'c': 1}.

```Python
def count_letters(text):
  result = {}
  # Go through each letter in the text
  convert_text = text.lower()

  for letter in convert_text:
    if letter.isalpha():
      if letter in result:
        result[letter] += 1
      else:
        result[letter] = 1

  return result

print(count_letters("AaBbCc"))
# Should be {'a': 2, 'b': 2, 'c': 2}

print(count_letters("Math is fun! 2+2=4"))
# Should be {'m': 1, 'a': 1, 't': 1, 'h': 1, 'i': 1, 's': 1, 'f': 1, 'u': 1, 'n': 1}

print(count_letters("This is a sentence."))
# Should be {'t': 2, 'h': 1, 'i': 2, 's': 3, 'a': 1, 'e': 3, 'n': 2, 'c': 1}




```
