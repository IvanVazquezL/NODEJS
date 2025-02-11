function promiseRace() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('The first promise resolved after 1 second'), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('The second promise resolved after 2 seconds'), 2000));

    // Use Promise.race() to get the result of the first promise to settle (resolve or reject)
    Promise.race([promise1, promise2])
        .then(result => console.log(result));  // Logs the result of the first resolved promise
}

promiseRace();
