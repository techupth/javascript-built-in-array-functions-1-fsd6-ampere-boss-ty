let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.length >= 5
}
const charwords = words.filter(get5CharWords);
// const result = get5CharWords(words);

console.log(charwords); // Output: ["apple", "elephant"]
