function random() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        resolve(randomNumber);
    }).then(number => number * 2)
    .then(number => number + 5)
    .then(result => console.log(result));
}

random();