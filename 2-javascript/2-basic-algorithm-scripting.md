# Basic Algorithm Scripting Solutions (freeCodeCamp)
These are my solutions for freeCodeCamp's "Basic Algorithm Scripting" unit. I've provided links on the headings so you can see the problem or try it yourself. These are in the same order as freeCodeCamp presents them. 

I've also added step-by-step what my code does. Occasionally, freeCodeCamp is very obtuse with how they present their problems. I will provide an explanation of the problem if it's not too obtuse to breakdown. 

**Tips On Completing This Section of fCC**

1. Create your own cheatsheet of the most common string methods 
2. Create another cheatsheet of the most common array methods
3. Don't look at the solution until you've completed it yourself!
    - If you can't solve without looking at the solution, I highly suggest going over your string and array methods. 
4. Something I noticed: this entire unit on freeCodeCamp IS NOT a review of what you've already learned. freeCodeCamp uses this section for you to go out and learn about various string and array methods which haven't been taught in the lessons before this unit. I highly, highly suggest making a cheatsheet of string and array methods! It will make this A LOT easier. 

***

## [Convert Celsius to Fahrenheit](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit) Solution

1. Simply use the algorithm to convert Celsius to Fahrenheit to return the value

<details>
  <summary>:exclamation: Click here to view the code </summary>

```javascript
function convertToF(celsius) {
  return celsius * 9 / 5 + 32;
}
```
</details>


***

## [Reverse a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string) Solution

 1. Split the string into an array using .split() 
 2. Reverse the array using .reverse()
 3. Join the array with no spaces in between using .join("")

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}
```

</details>

***

## [Factorialize a Number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number) Solution

 1. Create an empty array 
 2. Loop to add numbers into the empty array up to the number passed through the argument 
 2. Use Array.reduce() to multiply the numbers; be sure to initialize with 1

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function factorialize(num) {
  let arr = [];
  
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr.reduce((acc, current) => acc * current, 1);
}
```
</details>

***

## [Find the Longest Word](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string) Solution

1. Split the string into an array of words
2. Create an empty array for the lengths of each word
3. Loop through the array to push the word.length of each element into the empty array
4. Use the Math.max() function to find the largest number which is the longest word
    - Be sure to use spread operator in the argument

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function findLongestWordLength(str) {
  let wordsArr = str.split(" ");
  let wordLengthsArr = [];
  
  wordsArr.forEach(word => {
    wordLengthsArr.push(word.length);
  })

  return Math.max(...wordLengthsArr);
}
```

</details>

***

## [Return Largest Numbers in Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays) Solution

1. Create an empty array
2. Loop through the array that is being passed through the argument using forEach
3. Find the max of each inner array and push into the empty array
4. Return the now filled largest array

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function largestOfFour(arr) {
  let largest = [];
  
  arr.forEach(innerArr => {
    largest.push(Math.max(...innerArr));
  })
  
  return largest;
}
```

</details>

***

## [Confirm the Ending](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending) Solution

1. We use slice to extract the last portion of the string that we need to compare with
    - To determine how much to slice, we simply take the length of the string and subtract from the length of the target
2. We compare the ending of the string with target and return the result (true or false)

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function confirmEnding(str, target) {
  let strEnding = str.slice(str.length - target.length);
  return strEnding === target;
}
```
</details>

***

## [Repeat a String Repeat a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string) Solution

1. Create an empty string container
2. Loop num amount of times 
    - In each loop, we add str to repeatedStr
3. Return repeatedStr

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function repeatStringNumTimes(str, num) {
  let repeatedStr = "";

  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}
```

</details>

***

## [Truncate a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string) Solution

1. First, check if num is greater than zero AND less than str's length
    - If yes: extract the string from index 0 to num with "..." added and return it
    - If no: simply return the string as is

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function truncateString(str, num) {
  if (num > 0 && num < str.length) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
```

</details>

***

## [Finders Keepers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers) Solution

1. Use .find() method to return the first value in the array that passes the func test

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function findElement(arr, func) {
  return arr.find(func);
}
```

</details>

***

## [Boo Who](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who) Solution

1. Use typeof operator to see if bool is a boolean!

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function booWho(bool) {
  return typeof bool === "boolean";
}
```

</details>

***

## [Title Case a Sentence](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence) Solution

1. Lowercase the entire str and then split it into an arr
2. Now map through that array with the first character of each array capitalized; also add the rest of the word to it by using slice()
3. Join the mapped array and return it

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  return arr.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
```

</details>

***

## [Slice and Splice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice) Solution

1. First, use .slice() to copy arr2; I'm calling it frankenArr
2. Splice array! 1st argument = when to start splacing, 2nd argument is how much we want removed, and 3rd argument is what we want to add
3. Finally, we need to return frankenArr! (It's alive!) 

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function frankenSplice(arr1, arr2, n) {
  let frankenArr = arr2.slice(0);
  frankenArr.splice(n, 0, ...arr1);  
  return frankenArr;
}
```

</details>

***

## [Falsy Bouncer](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer) Solution

1. Create empty array container
2. Loop through each element of arr
3. If the element has a boolean of true, then we push it into truthyArr
4. Return truthyArr

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function bouncer(arr) {
  let truthyArr = [];

  arr.forEach(element => {
    if (Boolean(element)) truthyArr.push(element);
  });

  return truthyArr;
}
```

</details>

***

## [Where Do I Belong](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong) Solution

1. Push num into arr
2. Sort arr from lowest to highest
3. Find index of num

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
```

</details>

***

## [Mutations](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations) Solution

1. Turn each word into an array and let's lowercase it while we're at it
2. We use .every() method to see if every element passes the test 
    - The test: Find the indexOf the letter from str2 in str1
        - If all letters are greater than -1, then returns true
        - If a letter returns -1, then returns false

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function mutation(arr) {
  let str1 = arr[0].toLowerCase().split("");
  let str2 = arr[1].toLowerCase().split("");

  return str2.every(letter => str1.indexOf(letter) > -1);
}
```

</details>

***

## [Chunky Monkey](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey) Solution

1. Declare a container to hold the smaller sized chunk 
2. Declare another container to hold all the chunks
3. Loop through each element of the array
    - If the size of chunk has not yet met the argument size, we push the element into chunk
        - And if it so happens that chunk's length is now filled up, we push that entire chunk into the 2nd container
        - But what if we don't have an even amount of chunks? Then instead, we check if the element is the last element of the array. If so, we push that chunk into the 2nd container
4. Finally, we return the 2nd container filled with chunk arrays 

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function chunkArrayInGroups(arr, size) {
  let chunk = [];
  let multiArr = [];
  
  arr.forEach(element => {
    if (chunk.length < size) {
      chunk.push(element); 
      if (chunk.length === size) {
        multiArr.push(chunk);
        chunk = []; 
      } else if (arr.indexOf(element) === (arr.length - 1)) {
        multiArr.push(chunk);
      }
    } 
  })
  
  return multiArr;
}
```

</details>

### Alternative Chunky Monky Solution:

1. Create an empty array container 
2. Create a loop that increments i by the size argument
    - By doing so, we can no slice the array in specific positions
    - Push the sliced array into arr2
3. Return arr2

<details>
  <summary>:exclamation: Click here to view the code</summary>

```javascript
function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
```

</details>