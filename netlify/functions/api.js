const express = require("express");
const serverless = require("serverless-http");

const app = express();
//app.use(express.static("public")); // If not added throws error 1 and 2

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    "message": "Home",
  });
});

router.get("/button", (req, res) => {
  res.json({
    "message": "Button #2",
  });
});

app.use("./netlify/functions/api", router);

module.exports.handler = serverless(app);


/////////////////////////////////////////////////////
// NOTES: //

// Error 1:
// GET http://localhost:3000/front-functions.js net::ERR_ABORTED 404 (Not Found)

// Error 2:
// localhost/:1 Refused to execute script from 'http://localhost:3000/front-functions.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
