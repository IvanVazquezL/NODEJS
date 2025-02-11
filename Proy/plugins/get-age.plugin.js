const getAgePlugin = require('get-age');

const getAge = (birthday) => {
    if (!birthday) throw new Error("");
    return getAgePlugin(birthday);
}

module.exports = {
    getAge
};