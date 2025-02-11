function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function BasicPromise() {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        // Sleep for either 1 or 2 seconds
        sleep(1000).then(() => {  // Change the time here for testing different delays
            const endTime = Date.now();
            const delay = endTime - startTime;

            if (delay === 1000) {
                resolve('Promise resolved after 1 second');
            } else if (delay === 2000) {
                reject('Promise was rejected due to delay');
            }
        }).catch(err => reject(err)); // Handle any unexpected errors during sleep
    });
}

// Test the function
BasicPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));
