function timeoutPromise(delay, threshold) {
    return new Promise((resolve, reject) => {
        // Set a timeout to reject if the threshold is exceeded
        const timeoutId = setTimeout(() => {
            reject("Timeout exceeded");
        }, threshold);

        // Set another timeout to resolve the promise after the given delay
        setTimeout(() => {
            clearTimeout(timeoutId);  // Clear the rejection timeout if the promise resolves
            resolve(`Promise resolved after ${delay / 1000} seconds`);
        }, delay);
    });
}

// Test with a delay of 2 seconds (within threshold of 3 seconds)
timeoutPromise(2000, 3000)
    .then(console.log)
    .catch(console.error);

// Test with a delay of 4 seconds (exceeds threshold of 3 seconds)
timeoutPromise(4000, 3000)
    .then(console.log)
    .catch(console.error);
