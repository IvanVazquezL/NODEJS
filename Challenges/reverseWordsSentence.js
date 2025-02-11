function reverseWordsInASentence(sentence) {
    let newString = "";

    for (const word of sentence.split(" ")) {
        newString += `${word.split('').reverse().join('')} `;
    }

    return newString.trim();
}

console.log(reverseWordsInASentence("Hello World!"));