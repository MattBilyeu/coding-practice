function rot13(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArray = alpha.split('');
  let stringArray = str.split('');
  let returnArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    let index = alphaArray.findIndex(l => l === stringArray[i].toLowerCase());
    console.log(index);
    if (index + 13 > 25) {
      index -= 13
    } else if (index !== -1) {
      index += 13
    }
    console.log(index);
    if (index !== -1) {
      if (stringArray[i] === stringArray[i].toUpperCase()) {
        returnArray.push(alphaArray[index].toUpperCase())
      } else {
        returnArray.push(alphaArray[index])
      }
    } else {
      returnArray.push(stringArray[i])
    }
  };
  return returnArray.join('')
};

console.log(rot13('rkn'));