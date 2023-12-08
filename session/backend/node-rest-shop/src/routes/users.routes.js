const express = require("express");

const {
  createUserController,
  getUserController,
} = require("../controllers/users.controllers");

const router = express.Router();

router.post("/sign-up", createUserController);

router.post("/log-in", getUserController);

module.exports = router;
