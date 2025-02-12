const axios = require('axios');

const httpClientPlugin = {
    get: async(url) => {
        /*const response = await fetch(url);
        const data = await response.json();*/

        const data = await axios.get(url);
        return data.data;
    },
};

module.exports = {
    http: httpClientPlugin
}