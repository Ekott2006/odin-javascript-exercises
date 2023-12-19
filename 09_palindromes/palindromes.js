const palindromes = function (text) {
  let result = "";
  let alphabetWord = "";

  for (const t of text) {
    if (/[0-9a-zA-Z]/.test(t)) {
      alphabetWord += t.toUpperCase();
    }
  }

  for (let index = text.length - 1; index >= 0; index--) {
    if (/[0-9a-zA-Z]/.test(text[index])) {
      result += text[index].toUpperCase();
    }
  }

  return result == alphabetWord;
};

// Do not edit below this line
module.exports = palindromes;
