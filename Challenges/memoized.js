function memoize(fn) {
    const cache = new Map(); // Stores previous results
  
    return function (x) {
      if (cache.has(x)) {
        console.log("Cached...");
        return cache.get(x); // Return cached result
      }
      const result = fn(x); // Compute result
      cache.set(x, result); // Store result in cache
      return result;
    };
  }

function expensiveOperation(x) {
    console.log("Computing...");
    return x * 2;
  }
  
  const memoized = memoize(expensiveOperation);
  
  console.log(memoized(10)); // "Computing..." → 20
  console.log(memoized(10)); // 20 (cached, no "Computing..." message)
  console.log(memoized(5));  // "Computing..." → 10
  console.log(memoized(10)); // 20 (cached)
  