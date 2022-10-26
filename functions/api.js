const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    "path": "Home",
  });
});

router.get("/button", (req, res) => {
  res.json({
    "path": "Button",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);


/////////////////////////////////////////////////////
// NOTES: //

// BE VERY CAREFUL:
// RIGHT WAY: "/.netlify" 
// Wrong way: "./netlify"
