const { v4: uuid4 } = require('uuid');

const getId = () => uuid4();

module.exports = {
    getId
};