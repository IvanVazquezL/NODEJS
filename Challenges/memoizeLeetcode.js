/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args); // Convert arguments to string as cache key

        if (cache.has(key)) {
            return cache.get(key); // Return cached result
        }

        const result = fn(...args); // Compute result
        cache.set(key, result); // Store result in cache
        return result;
    };
}
