function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
      const key = JSON.stringify(args); // Create a unique key for arguments
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  // Example Usage:
  function add(a, b) {
    console.log("Computing...");
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3)); // "Computing..." → 5
  console.log(memoizedAdd(2, 3)); // 5 (cached)
  console.log(memoizedAdd(4, 1)); // "Computing..." → 5
  