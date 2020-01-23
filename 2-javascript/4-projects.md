# JavaScript Algorithms and Data Structures Projects (freeCodeCamp)
My solutions for the last section of freeCodeCamp's JavaScript Algorithms and Data Structures. There are 5 'projects' that are essentially more JavaScript challenges to conquer.  

***

## [Palindrome Checker](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker) Solution

1. Clean up the string so it's easier to split and compare
2. Find the center
3. Depending on if the cleaned string is odd or even,  we'll need to modify our compared strings a bit.
4. Use slice() to compare our left string to the right string. Our center comes into play here
5. Now reverse one of the strings 
6. Compare both strings and if the condition is met, return true. Otherwise, return false

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function palindrome(str) {
  let re = /[A-Za-z0-9]+/g;
  let cleanStr = str.match(re).join("").toLowerCase();
  
  let center = Math.round(cleanStr.length / 2) - 1;
  let left = "";
  let right = "";

  if (cleanStr.length % 2 === 0) {
    left = cleanStr.slice(0, center + 1);
    right = cleanStr.slice(center + 1);
  } else {
    left = cleanStr.slice(0, center);
    right = cleanStr.slice(center + 1);
  }

  left = left.split("").reverse().join("");

  return left === right ? true : false;
}
```

</details>

***

## [Roman Numeral Converter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter) Solution

1. Depending on size of the number, we'll divide it by the largest 1000th, 100th, or 10th place. 
2. From that result, we test each case to add the proper roman number to the *roman* container.
3. Then we continue to the next 100th or 10th place until there are no more numbers to convert.
4. The romain container should now have the conversion 

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function convertToRoman(num) {
  let roman = '';
  let number = num;
  
  if (number >= 1000) {
    let thousand = Math.floor(number / 1000);
    switch (thousand) {
      case 1:
        roman += 'M';
        break;
      case 2:
        roman += 'MM';
        break;
      case 3:
        roman += 'MMM';
        break;
    }
    number -= (thousand * 1000);
  }

  if (number >= 100) {
    let hundred = Math.floor(number / 100);
    switch (hundred) {
      case 1: 
        roman += 'C';
        break;
      case 2:
        roman += 'CC';
        break;
      case 3: 
        roman += 'CCC';
        break;
      case 4:
        roman += 'CD';
        break;
      case 5:
        roman += 'D';
        break;
      case 6:
        roman += 'DC';
        break;
      case 7: 
        roman += 'DCC';
        break;
      case 8:
        roman += 'DCCC';
        break;
      case 9:
        roman += 'CM';
        break;
    }
    number -= (hundred * 100);
  }

  if (number >= 10) {
    let ten = Math.floor(number / 10);
    switch (ten) {
      case 1:
        roman += 'X';
        break;
      case 2:
        roman += 'XX';
        break;
      case 3:
        roman += 'XXX';
        break;
      case 4:
        roman += 'XL';
        break;
      case 5:
        roman += 'L';
        break;
      case 6:
        roman += 'LX';
        break;  
      case 7:
        roman += 'LXX';
        break;
      case 8:
        roman += 'LXXX';
        break;
      case 9:
        roman += 'XC';
        break;
    }
    number -= (ten * 10);
  }

  if (number < 10) {
    let one = number;
    switch (one) {
      case 1:
        roman += 'I';
        break;
      case 2:
        roman += 'II';
        break;
      case 3:
        roman += 'III';
        break;
      case 4:
        roman += 'IV';
        break;
      case 5:
        roman += 'V';
        break;
      case 6:
        roman += 'VI';
        break;  
      case 7:
        roman += 'VII';
        break;
      case 8:
        roman += 'VIII';
        break;
      case 9:
        roman += 'IX';
        break; 
    }
  }
  
  return roman;
 }
```

</details>

***

## [Caesars Cipher](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher) Solution

1. Split th estring into an array 
2. Map through the array to find its true character
    - We need to use charCodeAt() to find the code
    - If the code is between 78 and 90, then we need to take away 13 from the code since it's a ROT13 cipher.
    - If the code is between 65 and 78, we need to modify it so that we get the code backwards from 90 (Z). 
    - Use String.fromCharCode to convert into their proper characters
3. Return the joined array to get the code.

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function rot13(str) { 
  let codedArray = str.split("").map(char => {
    let code = char.charCodeAt(0);
    if (code <= 90 && code >= 78) {
      return String.fromCharCode(code - 13);
    } else if (code < 78 && code >= 65) {
      return String.fromCharCode(91 - (13 - (code - 65))); 
    } else {
      return char;
    }
  }) 
  return codedArray.join("");
}
```

</details>

***

## [Telephone Number Validator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator) Solution

1. Use regex to test if the phone number is valid

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function telephoneCheck(str) {
  let validPhone = /(?<!.)(1\s|1|)(\s|)(\(\d{3}\)|\d{3})(\s|-|)(\d{3})(\s|-|)(\d{4})(?!.)/;
  return validPhone.test(str);
}
```

</details>

***

## [Cash Register](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register) Solution

1. Empty array container called change
2. Create the object for change which stores the status and the array
3. Find the change amount
4. Create a new array for the currency (everything has been multiplied by 100 to get rid of difficulties with floats)
5. Find the total of the current drawer
6. Use for loop to go through each currency
    - Find out if we can give any change in that currency.
        - If so, we subtract from the respective currency in drawer as well as the change amount. We will add this to a copied array of the respective currency. We do this for as long as neither the change amount, possible amount to give, and what is currently in the drawer is more than 0.
    - We push the amount of currency we must give to the change array.
    - We must take into consideration that if there is exact change, then we will list out what we can give as well as how there is none left in the drawer. 
7. If it turns out that we don't have enough currency to return, then we will return "INSUFFICIENT_FUNDS" and an empty array in the object.  

<details>
  <summary>:exclamation: Click here to view the code </summary>

```js
function checkCashRegister(price, cash, cid) {
  let change = [];
  let objChange = {status: "OPEN", change: change};
  
  let changeAmt = (cash * 100 - price * 100);
  let currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let cidTotal = cid.reduce((sum, curr) => sum + curr[1], 0) * 100;

  for (let i = 8; i >= 0; i--) {
    let canGive = changeAmt / currency[i];
    let toGive = cid[i].slice(0);
    toGive[1] = 0;
    if (canGive > 1) {
      cid[i][1] *= 100;        
      while ((canGive >= 1 && changeAmt > 0) && cid[i][1] > 0) {
        cid[i][1] -= currency[i];
        toGive[1] += currency[i];
        changeAmt -= currency[i];        
        canGive--;
      }
      toGive[1] /= 100; 
      if (cidTotal > changeAmt) {
        if (objChange.status == "CLOSED") {
          change.unshift(toGive);
        } else {
        change.push(toGive);
        }
      } 
    }
    if (cidTotal == changeAmt) {
      objChange.status = "CLOSED";
      change.unshift(toGive);
    }
  }

  if (change.reduce((sum, curr) => sum + curr[1], 0) * 100 < changeAmt) {
    objChange.status = "INSUFFICIENT_FUNDS";
    objChange.change = [];
  }

  return objChange;
}
```

</details>

***