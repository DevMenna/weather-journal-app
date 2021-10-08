/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=392991b9a329ba78de92bc7ffe42e778";

// Create a new date instance dynamically with JS

const getData = async (url = "") => {
  const response = await fetch(url);

  try {
    const receivedData = await response.json();
    console.log(receivedData);
    return receivedData;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (url = "", data = {}) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};

const run = async () => {
  const zCode = document.getElementById("zip").value;

  try {
    const weather = await fetch(baseURL + zCode + apiKey);
    const weatherData = await weather.json();
    console.log(weatherData);

    console.log("I've been clicked");

    console.log(zCode);
    console.log(weatherData);
    let d = new Date(weatherData.dt * 1000);
    let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
    const date = document.getElementById("date");
    date.innerHTML = "Today's date is  : " + newDate;
    const temp = document.getElementById("temp");
    temp.innerHTML = "Temp today is : " + weatherData.main.temp + " K";
    const text = document.getElementById("content");
    text.innerHTML =
      "Your feelings today are  : " + document.getElementById("feelings").value;
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", run);
