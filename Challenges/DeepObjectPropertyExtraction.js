const data = {
    user: {
      profile: {
        details: {
          name: "Diego",
          age: 30,
        },
      },
    },
};

function deepFind(obj, key) {
    if (typeof obj !== "object" || obj === null) return undefined;
  
    if (obj.hasOwnProperty(key)) {
      return obj[key];
    }
  
    for (const k in obj) {
      const result = deepFind(obj[k], key);
      if (result !== undefined) return result;
    }
  
    return undefined;
  }
  
console.log(deepFind(data, "name")); // "Diego"
console.log(deepFind(data, "age")); // 30
console.log(deepFind(data, "address")); // undefined
  