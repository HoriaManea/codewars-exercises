function findShort(s) {
  const myArray = s.split(" ");
  let numArray = [];

  for (let i = 0; i < myArray.length; i++) {
    numArray.push(myArray[i]);
  }

  const finalResult = numArray.sort((a, b) => a.length - b.length);

  return finalResult[0].length;
}
