// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  const match = string.match(/(.*?)(\d*)$/);

  const textPart = match[1];
  const numberPart = match[2];

  if (!numberPart) {
    return textPart + "1";
  }

  const incrementedNumber = (parseInt(numberPart) + 1)
    .toString()
    .padStart(numberPart.length, "0");

  return textPart + incrementedNumber;
}

console.log(incrementString("Horia001"));
