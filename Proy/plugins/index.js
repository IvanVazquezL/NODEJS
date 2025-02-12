const { getAge } = require('../plugins/get-age.plugin');
const { getId } = require('../plugins/get-id.plugin');
const { http } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    buildLogger,
    getAge,
    getId,
    http
};