const axios = require('axios');
const http = require('http');

module.exports = (baseURL) => {
    return axios.create({
        baseURL: baseURL
    });
};