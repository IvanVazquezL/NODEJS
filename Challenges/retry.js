function retryPromise(fn, attempts = 3) {
    return new Promise((resolve, reject) => {
        function attempt(remainingAttempts) {
            fn()
                .then(resolve)  // If the promise resolves, resolve the main promise.
                .catch((error) => {
                    if (remainingAttempts > 1) {
                        console.log(`Attempt failed, retrying... (${remainingAttempts - 1} attempts left)`);
                        attempt(remainingAttempts - 1);  // Retry the promise.
                    } else {
                        reject('Promise failed after 3 attempts');  // Reject after 3 failed attempts.
                    }
                });
        }

        attempt(attempts);
    });
}

// Simulate a promise that randomly fails or succeeds
function randomFailingPromise() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.5;  // 50% chance to fail
        setTimeout(() => {
            if (shouldFail) {
                reject('Random failure');
            } else {
                resolve('Success!');
            }
        }, 1000);
    });
}

// Use the retry function to call randomFailingPromise with 3 retries
retryPromise(randomFailingPromise)
    .then(result => console.log(result))  // Logs success if the promise succeeds.
    .catch(error => console.log(error));  // Logs failure if all attempts fail.
