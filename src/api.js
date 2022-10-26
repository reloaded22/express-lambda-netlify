const express = require("express");
const path = require("path");

const app = express();
app.use(express.static('public')); // If not added throws error 1 and 2

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

app.post("/button-2", (req, res)=>{
    res.send({
        message: "Message from API"
    })
})

app.listen("3000", ()=>{
    console.log("Server is running on port 3000\n")
})

/////////////////////////////////////////////////////
// NOTES: //

// Error 1:
// GET http://localhost:3000/front-functions.js net::ERR_ABORTED 404 (Not Found)

// Error 2:
// localhost/:1 Refused to execute script from 'http://localhost:3000/front-functions.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.