function sortArray(array) {
  const myArray = array;
  const oddNumbers = [];
  const imparNumbers = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      oddNumbers.push(myArray[i]);
    } else imparNumbers.push(myArray[i]);
  }
  console.log(oddNumbers);
  console.log(imparNumbers.sort((a, b) => a - b));
}

sortArray([8, 5, 6, 3, 4]);
