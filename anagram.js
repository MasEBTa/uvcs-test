// const inputArray = ["cook", "save", "taste", "aves", "vase", "state", "map"];

// inputArray.forEach((element, index) => {
//   console.log(`${element}. ${index}`);
// });

// var s = "cook";
// for (let index = 0; index < s.length; index++) {
//   const element = s[index];
//   console.log(`${element}. ${index}`);
// }

/**
 * Comparing two word are an anagram
 * @param {string} a first word
 * @param {string} b second word
 * @returns {Boolean}
 */
function areAnagram(a, b) {
  // remove space before and after, and make it lower case
  a = a.trim().toLowerCase();
  b = b.trim().toLowerCase();

  // check are length of two word same
  if (a.length !== b.length) {
    return false;
  }

  // counting every char in each word
  const charCountA = {}; // {char1:int, char2:int}
  for (const char of a) {
    charCountA[char] = /*true||false*/ (charCountA[char] || 0) + 1;
  }
  const charCountB = {}; // {char1:int, char2:int}
  for (const char of b) {
    charCountB[char] = /*true||false*/ (charCountB[char] || 0) + 1;
  }

  // compare whether the number of characters for each word is the same
  for (const char in charCountA) {
    if (charCountA[char] !== charCountB[char]) {
      return false;
    }
  }
  return true;
}
