const express = require("express");
const fs = require('fs');

const ENVIRONMENT = process.env.ENVIRONMENT || "NO IDEA WHAT ENVIRONMENT";
const DB_PASSWORD = process.env.DB_PASSWORD || "PASSWORD MISSING";
var configJson = "";

fs.readFile('./config.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  configJson = data;
});

var app = express();
app.get("/", function (req, res) {
  res.send(`
  <h1>Simple Web Application is ONLINE.  </br>
  Your environment is: ${ENVIRONMENT}  </br>
  Some config json: ${configJson} </br>
  Database password from secret: ${DB_PASSWORD}</h1>`);
});

app.listen(8080, function () {
  console.log("Simple Web Application running on port 8080");
});