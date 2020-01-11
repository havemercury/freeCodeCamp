# Basic JavaScript Solutions (freeCodeCamp)
These are my solutions for freeCodeCamp's "Basic JavaScript" unit. I've provided links on the headings so you can see the problem or try it yourself. These are in the same order as freeCodeCamp presents them. 

If you're new to learning code, you should know that there is no one singular way to answer the question. There are several ways to make the code work! Some ways are just more effecient than others. I try to write my code in correspondance to what I've learned in freeCodeCamp so these will most definitely not be the most effecient way to answer the question (which for now, should be okay as we're only learning).

Lastly, one little tip for new programmers: don't compare yourself to other programmers! Everyone has a different thought process. Don't ever think, "Maybe I'm just not cut out for this" simply because another programmer has better code than you. We're all in different stages in life. My biggest tip is this: **compare yourself to the you from weeks ago, when you knew absolutely nothing about programming.** The cliched saying of "Look at how far you've come" is something you should always keep in mind during your journey!

***

## [Stand In Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line) Solution

  1. Use .push() to add the number to the end of array.
  2. Use .unshift(); to remove the first element of the array
      - Super hint: return .unshift() to get the value of the first element!

```javascript
function nextInLine(arr, item) {
  arr.push(item);
  return arr.unshift();
}
```

***

## [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code) Solution

1. Use if statements for each condition concerning strokes and par 
2. For each if statement, return the proper nickname by pulling from the *names* array using bracket notation

```javascript
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par +3) {
    return names[6];
  } else {
    return "Change Me";
  }
}

golfScore(5, 4);
```


***

## [Counting Cards](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards) Solution

1. Use a switch statement to increment or decrease *count* when card is pulled.
    - 2, 3, 4, 5, 6 increments *count*
    - 7, 8, 9 do nothing to *count*
    - 10, J, Q, K, A decrements *count*
2. Use if statements to figure out what we want to return
    - if *count* is greater than 0 aka positive, return "# Bet"
    - if *count* is less than or equal to 0 aka negative, return "# Hold"
    - otherwise, return "Change Me"
3. Finally, the function is called several times to make changes to count (plays are being made). 

```javascript
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
  }

  if (count > 0) {
    return count + ' Bet';
  } else if (count <= 0) {
    return count + ' Hold';
  } else {
    return "Change Me";
  }
}

cc(2); cc(3); cc(4); cc(5); cc(6); 
```

***

## [Record Collection](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection) Solution

### Problem Explanation

- Write a function that allows us to modify properties and their values to each record (id). The function will pass with the arguments of id, prop, and value.
- There are two things to consider when modifying the records.
    1. Whenever the argument for value is empty (""), delete the key-value pair altogether.
    2. The value for the "tracks" property is an array.

### Solution
1. Use the last if statement for when the value is empty ""
    - Delete the property
2. Use else if statement for when the prop IS "tracks"
    - We need another if statement to check if this property already exists
        - If not, then we're going to set that property as an empty array using bracket notation. Why do we need an empty array? Because the problem is asking us to add the track to the end of the array. An array needs to be set if we want to push() something into it. 
    - We push() the value into the array
3. Use else statement for when prop isn't "tracks" AND isn't an empty value
    - Use bracket notation to set the property's value
4. Return the collection

```javascript
// *note: collection object has been omitted
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = [];
    }
    collection[id][prop].push(value); 
  } else {
    collection[id][prop] = value;
  }
  return collection; 
}
```
***

## [Profile Lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup) Solution
1. Use for loop to loop through the contacts array
  - If argument name is the same as the contact's name...
    - AND if the property exists, then we return the value of the property
    - otherwise, we return "No such property"
2. Lastly, return "No such contact" if we have already looped through array and the name doesn't match anyone in the array! 

```javascript 
// contacts array omitted
function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }     
  }
  return "No such contact";
}
```