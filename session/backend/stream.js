const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readStream = fs.createReadStream("./input.txt");
});

const arr = [1, 2, 3, 4, 5, 6];

const temp = arr
  .map((item) => item * 2)
  .filter((item) => item !== 4 && item !== 6);
