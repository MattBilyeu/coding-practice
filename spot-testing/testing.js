// function squareDigits(num){
//     let result = '';
//     numberArray = Array.from(String(num), Number)
//     numberArray.forEach(number => {
//         result = result.concat(number * number)
//     })
//     return +result;
// }


function isIsogram(str){
    const stringArray = str.toLowerCase().split('');
    const newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
      if (newArray.findIndex(char => char === stringArray[i]) !== -1) {
        return false
      } else {
        newArray.push(stringArray[i])
      }
    }
    return true
  }

console.log(isIsogram('moose'))