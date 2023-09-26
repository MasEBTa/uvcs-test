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
 * Membandingkan apakah dua kata merupakan sebuah anagram
 * @param {string} a kata pertama
 * @param {string} b kata kedua
 * @returns {Boolean}
 */
function areAnagram(a, b) {
  // Menghilangkan spasi dan mengubah huruf menjadi huruf kecil agar tidak bersifat case-sensitive.
  a = a.trim().toLowerCase();
  b = b.trim().toLowerCase();

  // periksa apakah panjang keduanya sama (jumlah katanya)
  if (a.length !== b.length) {
    return false;
  }

  // menghitung jumlah tiap-tiap katanya
  const charCountA = {}; // {char1:int, char2:int}
  for (const char of a) {
    charCountA[char] = /*true||false*/ (charCountA[char] || 0) + 1;
  }
  const charCountB = {}; // {char1:int, char2:int}
  for (const char of a) {
    charCountB[char] = /*true||false*/ (charCountB[char] || 0) + 1;
  }

  // Membandingkan jumlah karakter dalam kedua objek.
  for (const char in charCountA) {
    if (charCountA[char] !== charCountB[char]) {
      return false;
    }
  }
  return true;
}

console.log(areAnagram(" tikus", " sikuT "));
