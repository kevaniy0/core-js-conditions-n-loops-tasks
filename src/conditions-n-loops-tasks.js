/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const ab = a + b;
  const bc = b + c;
  if (ab > bc) {
    return a > b ? a : b;
  }
  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (queen.x - queen.y === king.x - king.y) return true;
  if (queen.x + queen.y === king.x + king.y) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) return false;
  if (a === b || b === c || a === c) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const obj = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  let res = '';

  if (num > 10 && num < 100) {
    const a = num % 10;
    let b = num - a;
    while (b) {
      res += `${obj[10]}`;
      b -= 10;
    }
    return res + obj[a];
  }
  return obj[num];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        if (!result) result = 'one';
        else result = `${result} one`;
        break;
      case '2':
        if (!result) result = 'two';
        else result = `${result} two`;
        break;
      case '3':
        if (!result) result = 'three';
        else result = `${result} three`;
        break;
      case '4':
        if (!result) result = 'four';
        else result = `${result} four`;
        break;
      case '5':
        if (!result) result = 'five';
        else result = `${result} five`;
        break;
      case '6':
        if (!result) result = 'six';
        else result = `${result} six`;
        break;
      case '7':
        if (!result) result = 'seven';
        else result = `${result} seven`;
        break;
      case '8':
        if (!result) result = 'eight';
        else result = `${result} eight`;
        break;
      case '9':
        if (!result) result = 'nine';
        else result = `${result} nine`;
        break;
      case '0':
        if (!result) result = 'zero';
        else result = `${result} zero`;
        break;
      case '.':
        if (!result) result = 'point';
        else result = `${result} point`;
        break;
      case ',':
        if (!result) result = 'point';
        else result = `${result} point`;
        break;
      case '-':
        if (!result) result = 'minus';
        else result = `${result} minus`;
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < str.length; i += 1, j -= 1) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === String(digit)) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total1 += arr[i];
    for (let j = arr.length - 1; j > i + 1; j -= 1) {
      total2 += arr[j];
    }
    if (total1 === total2) return i + 1;
    total2 = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = new Array(size);
    for (let j = 0; j < matrix[i].length; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let digit = 1;
  let i = 0;
  let j = 0;
  let rowTop = 0;
  let rowDown = size - 1;
  let colLeft = 0;
  let colRight = size - 1;

  let count = 0;
  let path = 'right';
  while (count < size * size) {
    matrix[i][j] = digit;
    digit += 1;

    switch (path) {
      case 'right':
        if (j < colRight) {
          j += 1;
        } else {
          i += 1;
          rowTop += 1;
          path = 'down';
        }
        break;
      case 'down':
        if (i < rowDown) {
          i += 1;
        } else {
          j -= 1;
          colRight -= 1;
          path = 'left';
        }
        break;
      case 'left':
        if (j > colLeft) {
          j -= 1;
        } else {
          i -= 1;
          rowDown -= 1;
          path = 'top';
        }
        break;
      case 'top':
        if (i > rowTop) {
          i -= 1;
        } else {
          j += 1;
          colLeft += 1;
          path = 'right';
        }
        break;
      default:
        break;
    }

    count += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resultMatrix = new Array(matrix.length);
  for (let i = 0; i < resultMatrix.length; i += 1) {
    resultMatrix[i] = new Array(matrix[i].length);
    for (
      let j = 0, y = resultMatrix.length - 1;
      j < resultMatrix[i].length;
      j += 1, y -= 1
    ) {
      resultMatrix[i][j] = matrix[y][i];
    }
  }
  const m = matrix;
  for (let i = 0; i < m.length; i += 1) {
    for (let j = 0; j < m[i].length; j += 1) {
      m[i][j] = resultMatrix[i][j];
    }
  }

  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr, left = 0, right = arr.length - 1) {
  if (left > right) return;
  const array = arr;
  let a = left;
  let b = right;
  const median = array[Math.floor((left + right) / 2)];

  while (a <= b) {
    while (array[a] < median) a += 1;
    while (array[b] > median) b -= 1;
    if (a <= b) {
      const tmp = array[a];
      array[a] = array[b];
      array[b] = tmp;
      a += 1;
      b -= 1;
    }
  }
  sortByAsc(array, left, b);
  sortByAsc(array, a, right);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let count = 0;
  let result = str;
  const array = [];
  while (count < iterations) {
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 !== 0) str1 += result[i];
      else str2 += result[i];
    }

    if (array[0] === str2 + str1) {
      return array[iterations % (count + 1)];
    }
    array[count] = result;
    result = str2 + str1;
    count += 1;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = String(number);
  let char = str[str.length - 2];
  let firstStr = '';
  let charIndex;
  for (let i = str.length - 1, j = str.length - 2; i > 0; i -= 1, j -= 1) {
    if (char < str[i]) {
      firstStr = str[i] + firstStr;
      charIndex = j;
      break;
    }
    char = str[j - 1];
    charIndex = j;
    firstStr = str[i] + firstStr;
  }

  let lastChar = char;
  let lastCharIndex = str[str.length - 1];

  for (let i = 0; i < firstStr.length; i += 1) {
    if (firstStr[i] > char) {
      lastChar = firstStr[i];
      lastCharIndex = i + charIndex + 1;
    }
    if (lastChar < firstStr[i] && char > firstStr[i]) {
      lastChar = firstStr[i];
      lastCharIndex = i + charIndex + 1;
    }
  }

  const swapStr = Array.from(str);

  const tmp = swapStr[charIndex];
  swapStr[charIndex] = swapStr[lastCharIndex];
  swapStr[lastCharIndex] = tmp;

  const firstArray = [];
  const secondArray = [];
  for (let i = 0; i < swapStr.length; i += 1) {
    if (i <= charIndex) firstArray.push(swapStr[i]);
    else secondArray.push(swapStr[i]);
  }

  secondArray.sort((a, b) => Number(a) - Number(b));

  return Number([...firstArray, ...secondArray].join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
