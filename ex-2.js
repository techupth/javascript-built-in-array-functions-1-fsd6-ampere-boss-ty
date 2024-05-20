let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.filter((get5CharWord) => get5CharWord.length >= 5);
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
