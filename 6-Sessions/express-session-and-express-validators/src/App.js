const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { body, check, validationResult } = require("express-validator");
const session = require("express-session");

//@ Express App Initialization:
const app = express();

//@ Constant Variables:
const port = 8000;
const public_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../views");

//@ Middlewares:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(public_path));

app.use(
  session({
    secret: "secret-key",
    saveUninitialized: false,
    resave: false,
    name: "session",
  })
);

//@ App Configuration:
app.set("views", view_path);
app.set("view engine", "ejs");

//@ Routes:
app.get("/", (req, res) => {
  res.render("index", {
    success: req.session.success,
    errors: req.session.errors,
  });
  req.session.errors = null;
  req.session.success = false;
});

// check-validity..Middleware
app.post(
  "/submit",
  [
    check("email")
      .exists()
      .withMessage("Please enter your email address")
      .isEmail()
      .withMessage("Invalid email address"),
    check("pass", "Invalid Password").exists().isLength({ min: 6 }),
    body("cnfPass").custom((value, { req }) => {
      if (value !== req.body.pass) {
        throw new Error("Password confirmation does not match password");
      }
      // Indicates the success of this synchronous custom validator
      return true;
    }),
  ],
  (req, res) => {
    const { errors } = validationResult(req);
    if (errors.length > 0) {
      req.session.errors = errors;
      req.session.success = false;
    } else {
      req.session.success = true;
    }
    res.redirect("/");
  }
);

//@ Listening to the server:
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
