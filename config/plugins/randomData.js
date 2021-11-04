'use strict';
const axios = require('axios');

/**
 * randomeData plugin.
 */


/**
 * Generates test data by given attributes.
 *
 * @param {Object} config
 * @param {Object/String} res
 * @return {Object}
 */
const response = async (config, res) => {
    let response;

    /** Data fetching. */
    try {
        let range;
        if (config.mode === 'history' || config.mode === 'prediction') {
            range = [config.parameters.start, config.parameters.end];
        }
        // Generate data.
        // response = _generateData(res, range);
        // console.log(response);
        response = await getRandomUsers(range ? range.length : res);
    } catch (err) {
        console.log(err.message);
    }
    return response;
};


/**
 * Generates test data from online API
 *
 * @param {Number} size
 * @return {Object}
 */
const getRandomUsers = async (size) => {
    let response;

    /** Data fetching. */
    try {
        response = await axios.get(`https://random-data-api.com/api/users/random_user?size=${size}`);
    } catch (err) {
        console.log('errors: ', err);
    }
    return response.data;
};

/**
 * Expose plugin methods.
 */
module.exports = {
    name: 'test',
    response,
};
