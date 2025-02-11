const nestedArray = [[1, 2], [3, [4, 5]], 6];

function flattenArray(arr, newArray = []) {
    for (const element of arr) {
        if (Array.isArray(element)) {
            flattenArray(element, newArray);
        } else {
            newArray.push(element);
        }
    }

    return newArray;
}

console.log(flattenArray(nestedArray));