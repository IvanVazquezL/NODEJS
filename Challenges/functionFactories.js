function multiplyBy(x) {
    return function (num) {
      return num * x;
    };
  }
  
  const double = multiplyBy(2);
  console.log(double(5)); // 👉 10
  console.log(double(10)); // 👉 20
  console.log(double(30)); // 👉 60


  