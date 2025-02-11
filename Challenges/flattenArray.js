const input = [1, [2, [3, 4], 5], [6, 7], 8];

function flattenArray(input, sol) {
    for (const value of input) {
        if (Array.isArray(value)) {
            flattenArray(value, sol);
        } else {
            sol.push(value);
        }
    }
    return sol;
}

console.log(flattenArray(input, []));