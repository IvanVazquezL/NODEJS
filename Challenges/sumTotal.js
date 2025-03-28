const arrayToSum = [
    1,
    2,
    "3",
    [45, "76", 32, [4, 78, 0, "-45"]],
    3,
    [
      [
        true,
        false,
        23,
        45,
        [
          [[[25, 67, 1, -687, 34, [[[[45, 52, 100, [[[33, 25]]]], 0.5]], 3.45]]],
          78,
          2,
        ],
      ],
    ],
    [[0.05, "23.3", [45, 32, "B", "2", "45"]], {}],
]];
  
  // Function to sum all numbers (including string numbers) inside nested arrays
  function sumTotal(arrayName) {
    let total = 0;
    
    arrayName.forEach((element) => {
      if (typeof element === "number" || (!isNaN(element) && typeof element !== "boolean")) {
        total += Number(element);
      } else if (Array.isArray(element)) {
        total += sumTotal(element);
      }
    });
  
    return total;
  }
  
  const total = sumTotal(arrayToSum);
  console.log(total); // Output: Sum of all numbers in the array
  