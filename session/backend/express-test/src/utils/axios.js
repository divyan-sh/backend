const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.openweathermap.org",
});

module.exports = instance;
