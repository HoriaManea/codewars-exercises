var CaesarCipher = function (shift) {
  this.shift = shift;
};

CaesarCipher.prototype.encode = function (letter) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let myLetter = letter.toLowerCase();
  let finalWord = [];

  for (let i = 0; i < myLetter.length; i++) {
    let char = myLetter[i].toUpperCase();
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      let newIndex = (index + this.shift) % alphabet.length;
      finalWord.push(alphabet[newIndex]);
    } else {
      finalWord.push(myLetter[i]);
    }
  }

  return finalWord.join("");

  console.log(finalrResult.replaceAll(",", ""));
};

