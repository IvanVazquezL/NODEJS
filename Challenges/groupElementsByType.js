function groupElementsByType(elements) {
    const obj = {
        numbers: [],
        strings: [],
        booleans: []
    }

    for (const value of elements) {
        if (typeof value === 'number') {
            obj.numbers.push(value);
        } else if (typeof value === 'string') {
            obj.strings.push(value);
        } else if (typeof value === 'boolean') {
            obj.booleans.push(value);
        }
    }

    return obj;
}

console.log(groupElementsByType([1, "hello", true, 5, "world", false]));