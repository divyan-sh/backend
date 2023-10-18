const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("./index.html", "utf-8");

const replaceVal = (file, newVal) => {
  let newFile = file.replace(
    "{%tempVal%}",
    `${(newVal.main.temp - 273.15).toFixed(2)}`
  );
  newFile = newFile.replace(
    "{%tempMin%}",
    (newVal.main.temp_min - 273.15).toFixed(2)
  );
  newFile = newFile.replace(
    "{%tempMax%}",
    (newVal.main.temp_max - 273.15).toFixed(2)
  );
  newFile = newFile.replace("{%location%}", newVal.name);
  newFile = newFile.replace("{%country%}", newVal.sys.country);
  newFile = newFile.replace("{%tempStatus%}", newVal.weather[0].main);

  return newFile;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      `http://api.openweathermap.org/data/2.5/weather?q=indore&appid=71a8c7a2be7cf985a299657f9b550aca`
    )
      .on("data", (chunk) => {
        const JSONData = JSON.parse(chunk);
        const arrayData = [JSONData];
        // I convert the data into array so that i can easily map through that data..
        const realTimeData = arrayData
          .map((val) => {
            return replaceVal(homeFile, val);
          })
          .join("");
        res.writeHead(200, "text/html");
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) {
          console.error(
            `Something wrong happened could not fetch data from API`
          );
        }
        console.log("END");
        res.end();
      });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>File does not exit..-_-</h1>`);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server is listening on port 8000`);
});
