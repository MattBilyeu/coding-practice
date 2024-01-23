function longest(s1, s2) {
  const arrayOne = s1.split('');
  const arrayTwo = s2.split('');
  const newArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (!newArray.includes(arrayOne[i]) && !newArray.includes(arrayOne[i].toLowerCase())) {
      newArray.push(arrayOne[i])
    }
  };
  for (let i = 0; i < arrayTwo.length; i++) {
    if (!newArray.includes(arrayTwo[i]) && !newArray.includes(arrayTwo[i].toLowerCase())) {
      newArray.push(arrayTwo[i])
    }
  };
  return newArray.sort().join('')
}

//Logging time spent coding in Codewars

//Logging time spent studying angular documentation

//Logging time spent studying angular docs