const isPangram = function(text) {
  let alphabet = {}
  for (letter of text){
    if (!alphabet.hasOwnProperty(letter.toLowerCase()) && letter.match(/[a-z]/i)) {
      alphabet[letter.toLowerCase()] = 1
    }
  }
  console.log(alphabet)
  return Object.keys(alphabet).length === 26
};

module.exports = isPangram;
