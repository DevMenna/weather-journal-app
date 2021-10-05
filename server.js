import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import fetch from "node-fetch";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=392991b9a329ba78de92bc7ffe42e778";

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server

const port = 3030;

const server = app.listen(port, calling);

function calling() {
  console.log("I'm running on port", port);
}

app.get("/get", (req, res) => {
  console.log("A get request has been successfully made");
  res.send(projectData);
});

app.post("/add", (req, res) => {
  projectData = { ...projectData, ...req.body };
  res.send(projectData);
});

app.post("/weather", async (req, res) => {
  const { zCode } = req.body;

  try {
    const weather = await fetch(baseURL + zCode + apiKey);
    const data = await weather.json();
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
