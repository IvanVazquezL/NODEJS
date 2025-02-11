function deepSum(obj) {
    let sum = 0;
  
    if (typeof obj === 'number') {
      return obj;
    }
  
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        sum += deepSum(obj[key]); // Recursive call
      }
    }
  
    return sum;
  }
  
  const data = {
    a: 2,
    b: { c: 3, d: { e: 5 } },
    f: [1, 2, { g: 4 }],
  };
  
  console.log(deepSum(data)); // 17
  