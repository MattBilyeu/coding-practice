function getCount(str) {
  let vowelCount = 0;
  let stringArray = str.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < stringArray.length; i++) {
    const foundInVowels = vowels.findIndex(letter => letter === stringArray[i].toLowerCase())
    if (foundInVowels !== -1) {
      vowelCount++
    }
  }
  return vowelCount;
}

//Logging time spent coding in Codewars