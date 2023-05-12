function doubleValues(arr) {
    return arr.map(val => val * 2);
  }
  
  console.log(doubleValues([1, 2, 3])); // Output: [2, 4, 6]
  console.log(doubleValues([5, 1, 2, 3, 10])); // Output: [10, 2, 4, 6, 20]
  
  function onlyEvenValues(arr) {
    return arr.filter(val => val % 2 === 0);
  }
  
  console.log(onlyEvenValues([1, 2, 3])); // Output: [2]
  console.log(onlyEvenValues([5, 1, 2, 3, 10])); // Output: [2, 10]
  
  function showFirstAndLast(arr) {
    return arr.map(str => str[0] + str[str.length - 1]);
  }
  
  console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test'])); // Output: ["ct", "mt", "tm", "tt"]
  console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // Output: ['hi', 'ge', 'se']
  
  function addKeyAndValue(arr, key, value) {
    return arr.map(obj => ({ ...obj, [key]: value }));
  }
  
  const inputArr = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
  ];
  
  console.log(addKeyAndValue(inputArr, 'title', 'instructor'));
  
  function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = {};
  
    str = str.toLowerCase();
  
    for (let char of str) {
      if (vowels.includes(char)) {
        if (count[char]) {
          count[char]++;
        } else {
          count[char] = 1;
        }
      }
    }
  
    return count;
  }
  
  console.log(vowelCount('Elie')); // Output: {e: 2, i: 1}
  console.log(vowelCount('Tim')); // Output: {i: 1}
  console.log(vowelCount('Matt')); // Output: {a: 1}
  console.log(vowelCount('hmmm')); // Output: {}
  console.log(vowelCount('I Am awesome and so are you')); // Output: {i: 1, a: 4, e: 3, o: 3, u: 1}
  
  function doubleValuesWithMap(arr) {
    return arr.map(val => val * 2);
  }
  
  console.log(doubleValuesWithMap([1, 2, 3])); // Output: [2, 4, 6]
  console.log(doubleValuesWithMap([1, -2, -3])); // Output: [2, -4, -6]
  
  function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
  }
  
  console.log(valTimesIndex([1, 2, 3])); // Output: [0, 2, 6]
  console.log(valTimesIndex([1, -2, -3])); // Output: [0, -2, -6]
  
  function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  
  function extractFullName(arr) {
    return arr.map(obj => `${obj.first} ${obj.last}`);
  }
  
  function filterByValue(arr, key) {
    return arr.filter(obj => obj.hasOwnProperty(key));
  }

  function findInObj(arr, key, value) {
    return arr.find(obj => obj[key] === value);
  }
  
  const objects = [
    { first: 'Elie', last: 'Schoppik' },
    { first: 'Tim', last: 'Garcia', isCatOwner: true },
    { first: 'Matt', last: 'Lane' },
    { first: 'Colt', last: 'Steele', isCatOwner: true }
  ];
  
  const result = findInObj(objects, 'isCatOwner', true);
  console.log(result);  
  
  const inputObj = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },  
    { name: 'Colt' }
  ];

  function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowercaseStr = str.toLowerCase();
  
    const result = [];
  
    for (let char of lowercaseStr) {
      if (!vowels.includes(char)) {
        result.push(char);
      }
    }
  
    return result.join('');
  }
  
  console.log(removeVowels('Elie')); // Output: 'l'
  console.log(removeVowels('TIM')); // Output: 'tm'
  console.log(removeVowels('ZZZZZZ')); // Output: 'zzzzzz'
  
  function doubleOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0).map(num => num * 2);
}