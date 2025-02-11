async function all() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 2000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 3000));

    // Await both promises and store their results
    const result1 = await promise1;
    const result2 = await promise2;

    // Log the results as an array
    console.log([result1, result2]);
}

all();