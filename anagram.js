/**
 * Sorting array of word to each their anagram
 * @param {string[]} inputArray - An array of strings to be processed.
 * @returns {Array<Array<string>>} array string in array of each anagram result.
 */
function sortingAnagram(inputArray) {
  let result = [];

  for (let index = 0; index < inputArray.length; index++) {
    // cek apakah yang dijadikan patokan null
    if (inputArray[index] == null) {
      continue;
    }
    // masukkan ke array temporary
    let temp = [inputArray[index]];

    // // cek dengan data setelahnya
    for (let i = index; i < inputArray.length; i++) {
      // jika data setelahnya null langsung lanjutkan
      if (inputArray[i + 1] == null) {
        continue;
      }
      // cek apakah anagram
      let isAnagram = areAnagram(inputArray[index], inputArray[i + 1]);

      // jika anagram
      if (isAnagram) {
        // masukkan ke temporary
        temp.push(inputArray[i + 1]);

        // lalu jadikan null
        inputArray[i + 1] = null;
      }
    }

    result.push(temp);
  }
  return result;
}

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

module.exports = {
  sortingAnagram,
  areAnagram,
};
