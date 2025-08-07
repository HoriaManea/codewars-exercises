Math.round = function (number) {
  let integerPart = number - (number % 1);
  let decimalPart = number % 1;

  if (decimalPart < 0.5) {
    return integerPart;
  }
  return integerPart + 1;
};

Math.ceil = function (number) {
  let integerPart = number - (number % 1);
  let decimalPart = number % 1;

  if (decimalPart) {
    return integerPart + 1;
  }
  return number;
};

Math.floor = function (number) {
  let integerPart = number - (number % 1);
  let decimalPart = number % 1;

  if (decimalPart) {
    return integerPart;
  }
  return number;
};
