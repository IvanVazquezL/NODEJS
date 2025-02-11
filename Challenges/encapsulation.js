function createCounter() {
    let count = 0;
  
    return {
      increment: () => count++,
      getCount: () => count,
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // 👉 1
  