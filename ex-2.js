let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter(function length(words) {
    return words.length >= 5;
  });
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
