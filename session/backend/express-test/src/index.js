require("dotenv").config();
const express = require("express");
const path = require("path");
const moment = require("moment");
const { weatherApiCall } = require("./utils/api");

//@ Creating instance of express:
const app = express();

//@ How to setup template engines with express:
const view_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../public");

app.set("views", view_path);
app.set("view engine", "ejs");
app.use(express.static(static_path));

//@ Basic Routing
//# app.METHOD_NAME(PATH,Handler)
//> app: express instance
//> METHOD_NAME: GET, POST, PUT, PATH, DELETE
//> Path: routes of my api
//> Handler: Request handlers

app.get("/", async (req, res) => {
  //> API call to weather api
  // > By default location will be indore
  const result = await weatherApiCall("indore");
  let weatherData = {
    cityName: "N/A",
    dateTime: "N/A",
    weatherStatus: "N/A",
    icon: "N/A",
    temp: "N/A",
    minTemp: "N/A",
    maxTemp: "N/A",
    feelsLike: "N/A",
    humidity: "N/A",
    windSpeed: "N/A",
    pressure: "N/A",
  };

  if (result.success) {
    const { data } = result;
    weatherData = {
      cityName: data?.name,
      dateTime: moment(data?.dt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
      weatherStatus: data?.weather[0]?.main,
      icon: `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`,
      temp: data?.main?.temp,
      minTemp: data?.main?.temp_min,
      maxTemp: data?.main?.temp_max,
      feelsLike: data?.main?.feels_like,
      humidity: data?.main?.humidity,
      windSpeed: data?.wind?.speed,
      pressure: data?.main?.pressure,
    };
  }
  res.render("index", weatherData);
});

//@ Server start

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port:8000`);
});
