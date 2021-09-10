const sortString = (str) => str.split("").sort().join("");

const validAnagram = (former, latter) =>
  sortString(former) == sortString(latter) ? true : false;

// const result =
// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false) // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true
// console.log(result);
