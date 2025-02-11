Array.prototype.customMap = function(callback) {
    const result = []; // Initialize an empty array to store the results
  
    // Loop through the current array (the context is the array that calls customMap)
    for (let i = 0; i < this.length; i++) {
      // Apply the callback function to each element, and push the result into the new array
      result.push(callback(this[i], i, this));
    }
  
    return result; // Return the new array with the results
  };
  
  const result = [1, 2, 3].customMap((x) => x * 2);
  console.log(result); // [2, 4, 6]
  