# Intermediate Algorithm Scripting Solutions (freeCodeCamp)
These are my solutions for freeCodeCamp's "Intermediate Algorithm Scripting" unit. I've provided links on the headings so you can see the problem or try it yourself. These are in the same order as freeCodeCamp presents them. 

***

## [Sum All Numbers in a Range](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range) Solution

1. Figure out the max and min
2. Create empty array container
3. Loop from min to max to add numbers into the container array
4. Use .reduce() to find the sum of the newArray and return it

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let newArr = [];

  for (let i = 0; i <= (max - min); i++) {
    console.log(min + i);
    newArr.push(min + i);
  }
  
  return newArr.reduce((sum, curr) => sum + curr, 0);;
}
```

</details>

***

## [Diff Two Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays) Solution

1. Use .filter() to push into a new array the elements of arr1 that don't match with elements of arr2
2. We also need to flip it around so that arr2 elements are also pushed into an array if the elements don't match with arr1
3. Use rest operator to combine the array and return it

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function diffArray(arr1, arr2) {
  let temp1 = arr1.filter(element => arr2.indexOf(element) == -1);
  let temp2 = arr2.filter(element => arr1.indexOf(element) == -1);
  return [...temp1, ...temp2];
} 
```

</details>

***

## [Seek and Destroy](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy) Solution

1. Copy arr into new variable (filteredArr)
2. Loop via the amount of arguments but initialize at 1 since 0th index of the arguments is the aray we're loooking thorugh
    - In the loop, use filter() on filteredArr and be sure to assign that as the filteredArr. (We want to filter the filtered array, not the original array.)
3. Return the filteredArr 

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function destroyer(arr) { 
  let filteredArr = arr;
  for (let i = 1; i < arguments.length; i++) {
    filteredArr = filteredArr.filter(element => element !== arguments[i]);
  }
  return filteredArr;  
}
```

</details>

***

## [Wherefore Art Thou](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou) Solution

1. Transform source into an array 
2. filter() through collection so we can get an array of the objects that pass our tests
3. Use every() to check each property of the source exists in the collections object
    - return true when the object has the same existing property as well as the same value

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
let srcArr = Object.keys(source);

return collection.filter(obj => {
  return srcArr.every(prop => {
    return obj.hasOwnProperty(prop) && obj[prop] === source[prop];
  });
}); 
```

</details>

***

## [Spinal Tap Case](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case) Solution

1. Split the string using a regex to cover all the cases (space, underscore, and capital letters)
2. Join the string using a dash
3. And transform it to lowercase
4. Return all in one line 

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function spinalCase(str) {  
  return str.split(/(?=[A-Z])|\s|_/).join("-").toLowerCase();
}

```

</details>

***

## [Pig Latin](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin) Solution

1. First, check if the 1st character is a vowel
    - If so, simply add + way at the end
2. Otherwise, we've got different shoes to fill!
    - Replace the consonat(s) in the beginning using regex
      - Use capture groups so that we can reorder the words  

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function translatePigLatin(str) {
  let vowels = /[aeiou]/;
  if (str.charAt(0).match(vowels)) {
    return str + "way";
  } else {
    return str.replace(/\b(\w[^aeiou]*)(\w*)\b/g, "$2$1ay");
  }
}
```

</details>

***

## [Search and Replace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace) Solution

1. Lets copy the after variable 
2. Now we figure out if the replaced word is capitalized or not using regex. 
    - If it's capitalized, we also capitalize the after argument and assign that to the copied after variable above.
3. Now we use the .replace() method and return it  

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function myReplace(str, before, after) {
  let properAfter = after;
  let cap = /^[A-Z]/;
  if (before.charAt(0).match(cap) !== null) {
    properAfter = after.charAt(0).toUpperCase() + after.slice(1);
  };
  let replacedStr = str.replace(before, properAfter);
  return replacedStr; 
}
```

</details>

***

## [DNA Pairing](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing) Solution

1. Split the string into an array
2. Map through the array so we can return an array
3. Simply use a switch case to retun the correct pairing for the element

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function pairElement(str) {
  return str.split("").map(letter => {
    switch (letter) {
      case 'A':
        return ["A","T"];
      case 'T':
        return ["T","A"];
      case 'G':
        return ["G","C"];
      case 'C':
        return ["C", "G"];
    }
  })
}
```

</details>

***

## [Missing Letters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters) Solution

1. Create an array with the character codes since we can check easier with numbers
2. From that, check if each character code increments by 1
    - If not, we set that code as our almost missing number
3. Create an if statement for when the missing number isn't undefined
    - return using the fromCharCode method and making sure to subtract 1 from the almost mising number

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function fearNotLetter(str) {
  let codeArr = str.split("").map((e, index) => {
    return str.charCodeAt(index);
  });

  let missing = codeArr.find((num, index) => {
    if (index !== 0) {
      return num - codeArr[index - 1] !== 1;
    }
  });

  if (missing !== undefined) {
    return String.fromCharCode(missing - 1);  
  } 

  return missing;  
}
```

</details>

***

## [Sorted Union](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union) Solution

1. Create empty container
2. Create a loop for each array in the argument
    - Within each loop, we want to loop the element of the array
        - If our container array does not include the element, we push it into the empty container
3. Return the container 

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function uniteUnique(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arguments.length; i++) {
    arguments[i].forEach(num => {
      if (!uniqueArr.includes(num)) {  
        uniqueArr.push(num);
      }
    })
  }

  return uniqueArr;
}
```

</details>

***

## [Title](https://www.freecodecamp.org/) Solution

1. Split the string so that each character is in the array
2. Map through the array
  - Use switch case to return the HTML entity if the characters is either &, <, >, ", or '
3. Join the mapped array 

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function convertHTML(str) {
  return str.split("").map(char => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
      default:
        return char;
    }
  }).join("");
}
```

</details>

***

## [Sum All Odd Fibonacci Numbers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers) Solution

1. Create an array of fibonacci 
2. Then use .reduce() to find the sum!

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function sumFibs(num) {
  let arr = [1, 1];

  for (let i = 0; arr[i] <= num; i++) {
    let next = arr[i] + arr[i + 1];
    if (next <= num) arr.push(next); 
  }
  
  return arr.reduce((sum, curr) => {
    if (curr % 2 != 0) {
      return sum + curr
    } else {
      return sum;
    }
  }, 0)
} 
```

</details>

***

## [Sum All Primes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes) Solution

1. Create a new array for primes. We know 2 is a prime so we add it in
2. We loop through the numbers and check each number to see if it returns a remainder when divided by every number lower than itself
    - In an empty array, we push all of the results
3. We check that empty array. If it doesn't include a 0, then that means it is a prime number. Push prime number into the primes array.
4. Use .reduce() to retrive the sum and return it

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function sumPrimes(num) {
  let primes = [2];
  
  for (let i = 3; i <= num; i++) {
    let arr = [];
    
    for (let j = 2; j < i; j++) { // i / numbers lower than itself
      arr.push(i % j); 
    }
    
    if (!arr.includes(0)) {
      primes.push(i);
    }
  }
  
  return primes.reduce((sum, current) => sum + current, 0);
}
```

</details>

***

## [Smallest Common Multiple](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple) Solution

1. First, assign the maximum and minimum of the array.
2. Assign the multiple we need to find as max.
3. Loop starting with max until we hit min (decrement)
  - If the modulus of multiple and i = 0, then we return the multiple as is.
  - Otherwise, we keep adding onto the multiple until we find a modulus that does equal 0

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function smallestCommons(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let multiple = max;

  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max; 
      i = max;
    } 
  }

  return multiple;  
}
```

</details>

***

## [Title](https://www.freecodecamp.org/) Solution

1. For as long as the arr length isn't 0 and the function argument is false, remove the first element of the array.

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```

</details>

***

## [Steamroller](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller) Solution

1. Super simple. Use the flat() method

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function steamrollArray(arr) {
  return arr.flat(Infinity);
}
```

</details>

***

## [Binary Agents](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents) Solution

1. Split into array
2. Parse each element into an array of integers and then convert each integer into a character
3. Join altogether

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function binaryAgent(str) {
  return str
    .split(" ")
    .map(code => String.fromCharCode(parseInt(code, 2)))
    .join("");
}
```

</details>

***

## [Everything Be True](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true) Solution

1. Find if there are falsy values in an object using .find()
2. Check of the object property is truthy/falsy value using Boolean()
3. If it does have a falsey, return false. Otherwise, return true.

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function truthCheck(collection, pre) {  
  let hasFalsy = collection.find(user => {
    return !Boolean(user[pre]);
  })

  return hasFalsy === undefined ? true : false;
} 
```

</details>

***

## [Arguments Optional](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional) Solution

1. Set arguments as a and b so we don't have to keep writing out arguments
2. Create if statements for each condition the problem states
    - If argument a is a number
      - If argument b is a number
        - Add a and b
    - Otherwise if there is no b argument
      - Return a function
          - If b is a number
            - Return a + b

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function addTogether() {
  let a = arguments[0];
  let b = arguments[1];

  if (typeof a === "number") {
    if (typeof b === "number") {
      return a + b;
    } else if (!b) {
      return function(b) {
        if (typeof b === "number") {
        return a + b;
        } 
      }
    }
  }
}
```

</details>

***

## [Make a Person](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person) Solution

1. Define first name as the argument
2. Define get full, first, and last name using a function
3. Define set full, first, and last name with a function using the argument passed through that function to redefine the names

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFullName = () => fullName;
  this.getFirstName = () => fullName.split(" ")[0];
  this.getLastName = () => fullName.split(" ")[1];
  this.setFullName = (name) => fullName = name;
  this.setFirstName = (name) => fullName = `${name} ${fullName.split(" ")[1]}`;
  this.setLastName = (name) => fullName = `${fullName.split(" ")[0]} ${name}`;
};
```

</details>

***

## [Map the Debris](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris) Solution

1. Loop through array to find the orbital period of each object (in case there are multiple)
2. Declare the average alt from the object
3. Use the equation to find the orbital period
4. Delete the average alt from the object
5. Add the orbital period property 
6. Return the array

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  
  for (let i = 0; i < arr.length; i++) {
    let avgAlt = arr[i].avgAlt;
    let op = 2 * Math.PI * (Math.sqrt((Math.pow((earthRadius + avgAlt), 3)) / GM));

    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = Math.round(op); 
  }

  return arr;
}
```

</details>