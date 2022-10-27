const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    path: "home",
  });
});

router.get("/test", (req, res) => {
  res.json({
    path: "test",
  });
});

app.use("/.netlify/functions/andrew", router);

module.exports.handler = serverless(app);
