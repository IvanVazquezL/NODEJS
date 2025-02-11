function all() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 2000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 3000));

    Promise.all([promise1,promise2]).then(results => console.log(results));
}

all();