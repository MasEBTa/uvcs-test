const { areAnagram, sortingAnagram } = require("../anagram");

describe("areAnagram function unit test", () => {
  /**
   * Test Positif
   */
  test("if two word are anagram, its should return true", () => {
    const a = "tikus";
    const b = "sikut";
    expect(areAnagram(a, b)).toEqual(true);
  });

  test("test split word", () => {
    const a = " budi";
    const b = "ibud ";
    expect(areAnagram(a, b)).toEqual(true);
  });

  test("test case-sensitifity", () => {
    const a = " budI";
    const b = "iBUd ";
    expect(areAnagram(a, b)).toEqual(true);
  });

  /**
   * Test Negative
   */
  test("test if inside word has spaces", () => {
    const a = " bud i";
    const b = "ibud ";
    expect(areAnagram(a, b)).toEqual(false);
  });

  test("test if not an anagram", () => {
    const a = "buda";
    const b = "bidi";
    expect(areAnagram(a, b)).toEqual(false);
  });

  test("test if not an anagram with different count of word", () => {
    const a = "budha";
    const b = "buda ";
    expect(areAnagram(a, b)).toEqual(false);
  });
});

// Membuat kelompok pengujian dengan describe
describe("Sorting Anagrams", () => {
  // Test case 1: Test dengan array kosong
  test("Empty Array", () => {
    expect(sortingAnagram([])).toEqual([]);
  });

  // Test case 2: Test dengan array yang tidak mengandung anagram
  test("No Anagrams", () => {
    const inputArray = ["apple", "banana", "cherry", "dog"];
    const result = [["apple"], ["banana"], ["cherry"], ["dog"]];
    expect(sortingAnagram(inputArray)).toEqual(result);
  });

  // Test case 3: Test dengan array yang mengandung anagram
  test("With Anagrams", () => {
    const inputArray = [
      "cook",
      "save",
      "taste",
      "aves",
      "vase",
      "state",
      "map",
    ];
    const result = [
      ["cook"],
      ["save", "aves", "vase"],
      ["taste", "state"],
      ["map"],
    ];
    expect(sortingAnagram(inputArray)).toEqual(result);
  });
});
