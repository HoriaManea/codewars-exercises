// Definition
// Define a function that takes two non-negative integers, a and b, and returns the last decimal digit of a raised to the power of b. Note that the values of a and b can be very large!

// For example, the last decimal digit of 9 raised to the power of 7 is 9, because 9 to the power of 7 equals 4,782,969. The last decimal digit of 2 raised to the power of 200, which is then raised to the power of 2300, is 6. This number has over 1,092 decimal digits.

// Also, consider that zero raised to the power of zero should be treated as 1.

// You may assume the input will always be valid.

function lastDigit(n, m) {
  if (m === 0n) return 1n;

  let lastDigitN = n % 10n;

  switch (lastDigitN) {
    case 0n:
      return 0n;
    case 1n:
      return 1n;
    case 5n:
      return 5n;
    case 6n:
      return 6n;

    case 2n: {
      let cycle = [2n, 4n, 8n, 6n];
      let mod = m % 4n;
      let index = mod === 0n ? 3 : Number(mod) - 1;
      return cycle[index];
    }

    case 3n: {
      let cycle = [3n, 9n, 7n, 1n];
      let mod = m % 4n;
      let index = mod === 0n ? 3 : Number(mod) - 1;
      return cycle[index];
    }

    case 4n: {
      let cycle = [4n, 6n];
      let mod = m % 2n;
      let index = mod === 0n ? 1 : Number(mod) - 1;
      return cycle[index];
    }

    case 7n: {
      let cycle = [7n, 9n, 3n, 1n];
      let mod = m % 4n;
      let index = mod === 0n ? 3 : Number(mod) - 1;
      return cycle[index];
    }

    case 8n: {
      let cycle = [8n, 4n, 2n, 6n];
      let mod = m % 4n;
      let index = mod === 0n ? 3 : Number(mod) - 1;
      return cycle[index];
    }

    case 9n: {
      let cycle = [9n, 1n];
      let mod = m % 2n;
      let index = mod === 0n ? 1 : Number(mod) - 1;
      return cycle[index];
    }
  }
}
