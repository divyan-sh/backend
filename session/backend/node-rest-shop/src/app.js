const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
require("dotenv").config();
const { checkAuth } = require("./middleware/checkAuth");

//@ DB Connection:
require("./config/database");

//@ Import Routes:
const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const ordersRouter = require("./routes/orders.routes");

const app = express();

const uploads_path = path.join(__dirname, "./uploads");
app.use("/uploads", express.static(uploads_path));

//@ Handler CORS:
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );

//   // if (req.method === "OPTIONS") {
//   //   // Browser will only send the OPTIONS request first if you send a POST request or a PUT request
//   //   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH DELETE");
//   //   return res.status(200).json({});
//   // }
//   // // Now currently we are just blocking the other routes so we have to call next() function so that flow go on the other middleware and handle the other routes as here we just send http headers in response and not any valid data..
//   // next();
// });
app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//@ Setup Router

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", checkAuth, ordersRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    data: null,
    message: `${req.url} not found`,
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
