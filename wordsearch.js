//Pair Programming
//CueEpicMusic
//dungminhnguyen257

//Turns the rows into columns and columns into rows
const transpose = function (matrix) {
  let arr = [];
  const matrixList = [];

  for (let i = 0; i < matrix[0].length; i++) {
    for (let list of matrix) {
      arr.push(list[i]);
    }
    matrixList.push(arr);
    arr = [];
  }
  return matrixList;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let verticalJoin = transpose(letters);
  verticalJoin = verticalJoin.map((ls) => ls.join(""));
  let rightWord = "";

  // This for loop checks from top left letter diagonally
  for (
    let i = 0, j = 0;
    i < letters.length && j < letters[i].length;
    i++, j++
  ) {
    if (word.startsWith(rightWord + letters[i][j])) {
      rightWord += letters[i][j];
    } else if (word.startsWith(letters[i][j])) {
      rightWord = letters[i][j];
    } else {
      rightWord = "";
    }
    if (rightWord === word) {
      return true;
    }
  }

  // This for loop checks from bottom right letter diagonally
  for (
    let i = letters.length - 1, j = letters[i].length - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    if (word.startsWith(rightWord + letters[i][j])) {
      rightWord += letters[i][j];
    } else if (word.startsWith(letters[i][j])) {
      rightWord = letters[i][j];
    } else {
      rightWord = "";
    }
    if (rightWord === word) {
      return true;
    }
  }

  // This for loop checks from top right letter diagonally
  for (
    let i = 0, j = letters[i].length - 1;
    i < letters.length && j >= 0;
    i++, j--
  ) {
    if (word.startsWith(rightWord + letters[i][j])) {
      rightWord += letters[i][j];
    } else if (word.startsWith(letters[i][j])) {
      rightWord = letters[i][j];
    } else {
      rightWord = "";
    }
    if (rightWord === word) {
      return true;
    }
  }

  //This for loop checks from bottom left letter diagonally
  for (
    let i = letters.length - 1, j = 0;
    i >= 0 && j < letters[i].length;
    i--, j++
  ) {
    console.log(letters[i][j]);
    console.log(rightWord);
    if (word.startsWith(rightWord + letters[i][j])) {
      rightWord += letters[i][j];
    } else if (word.startsWith(letters[i][j])) {
      rightWord = letters[i][j];
    } else {
      rightWord = "";
    }
    if (rightWord === word) {
      return true;
    }
  }

  // This for loop checks to see if each string has the word in it horizontally
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // This for loop checks to see if each string has the word in it vertically
  for (v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  // This for loop checks to see if each string has the word in it horizontally backwards
  for (rl of horizontalJoin) {
    if (rl.split("").reverse().join("").includes(word)) return true;
  }
  // This for loop checks to see if each string has the word in it vertically backwards
  for (rv of verticalJoin) {
    if (rv.split("").reverse().join("").includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;
