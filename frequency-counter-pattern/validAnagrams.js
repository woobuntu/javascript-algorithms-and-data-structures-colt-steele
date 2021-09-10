const validAnagram = (former, latter) => {
  if (former.length !== latter.length) return false;

  const hash = {};

  for (const char of former)
    hash[char] = hash.hasOwnProperty(char) ? hash[char] + 1 : 1;

  for (const char of latter) {
    if (hash[char]) hash[char]--;
    // hash[char]이 0이면 false값임을 이용
    else return false;
  }

  return true;
};

// const result =
// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false) // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true
// console.log(result);
