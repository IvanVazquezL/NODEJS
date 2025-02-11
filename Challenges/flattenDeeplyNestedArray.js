/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n, sol = []) {
    for (const value of arr) {
        if (Array.isArray(value) && n > 0) {
            flat(value, n - 1, sol);
        } else {
            sol.push(value);
        }
    }
    return sol;
};