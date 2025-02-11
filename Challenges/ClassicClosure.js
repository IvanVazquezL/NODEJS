function outerFunction() {
    let count = 0; // 👈 This variable is inside outerFunction
  
    return function innerFunction() {
      count++; // 👈 innerFunction can still access count
      console.log(count);
    };
  }
  
  const counter = outerFunction(); // 🚀 outerFunction runs and returns innerFunction
  counter(); // 👉 1
  counter(); // 👉 2
  counter(); // 👉 3
  