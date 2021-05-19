var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
app.post("/analsysarticl", async function (req, res) {
  const articlurl = req.body.url;

  const URL = `${baseURL}key=${apiKey}&url=${articlurl}&lang=en`;
  const data = await fetch(URL);
  const readydata = await data.json();

  res.send(readydata);
});

app.listen(8081, function () {
  console.log("Example app listening on port 80811!");
});
