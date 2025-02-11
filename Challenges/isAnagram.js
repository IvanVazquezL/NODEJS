function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const str1Map = new Map();
    const str2Map = new Map();

    for (const str of str1) {
        str1Map.set(str, (str1Map.get(str) || 0) + 1);
    }

    for (const str of str2) {
        str2Map.set(str, (str2Map.get(str) || 0) + 1);
    }

    for (const key of str1Map.keys()) {
        if (str1Map.get(key) !== str2Map.get(key)) return false;
    }

    return true;
}
  
  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world")); // false
  