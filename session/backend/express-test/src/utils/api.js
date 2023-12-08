// const axiosInstance = require("./axios");
const axios = require("axios");

async function getLatLong(cityName) {
  try {
    const data = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${process.env.API_KEY}`
    );
    if (data.status === 200) {
      return {
        data: data.data,
        message: "Data fetched successfully",
        success: true,
      };
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    return {
      data: error,
      message: "Something went wrong",
      success: false,
    };
  }
}

async function weatherApiCall(cityName) {
  try {
    const result = await getLatLong(cityName);
    if (result.data.length > 0) {
      const { lat, lon } = result.data[0];
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`
      );
      if (weatherData.status === 200) {
        return {
          data: weatherData.data,
          message: "Data fetched successfully",
          success: true,
        };
      }
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    return {
      data: error,
      message: "Something went wrong",
      success: false,
    };
  }
}

module.exports = { weatherApiCall };
