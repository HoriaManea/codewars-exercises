function disemvowel(str) {
  const comment = str;
  const splittedComment = comment.split("");
  let finalComm = [];
  for (let i = 0; i < splittedComment.length; i++) {
    if (
      splittedComment[i] !== "i" &&
      splittedComment[i] !== "e" &&
      splittedComment[i] !== "a" &&
      splittedComment[i] !== "u" &&
      splittedComment[i] !== "o" &&
      splittedComment[i] !== "I" &&
      splittedComment[i] !== "E" &&
      splittedComment[i] !== "A" &&
      splittedComment[i] !== "U" &&
      splittedComment[i] !== "O"
    ) {
      finalComm.push(splittedComment[i]);
      continue;
    } else continue;
  }

  const finafinalComm = finalComm.join("");

  return finafinalComm;
}

console.log(disemvowel("Horia Horia"));
