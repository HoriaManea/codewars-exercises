function abbrevName(name) {
  const originalParametre = name;
  const splittedName = originalParametre.split(" ");
  const [firstName, lastName] = splittedName;
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

console.log(abbrevName("Horia Mugur"));
