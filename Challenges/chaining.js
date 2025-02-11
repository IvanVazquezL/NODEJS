function chaining() {
    return new Promise((resolve, reject) => {
        resolve(5);
    }).then(value => value * 2)
    .then(value => value + 10)
    .then(result => console.log(result));
}

chaining();