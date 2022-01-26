import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
const axios = require("axios");
const api = "d77adb84e0450ecc90a00b1a99ca7222";

function Card(props) {
  return (
    <div>
      Name: {props.name} <br />
      {props.des} <br />
      {props.email} - {props.phone} <br />
      {props.website}
      <br />
      <br />
    </div>
  );
}

function App() {
  const [weatherData, setWeatherData] = useState({});

  let obj = {
    lat: 24.870862,
    long: 67.114544
  }

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.long}&appid=${api}`
      )
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((e) => {
        console.log("error: ", e);
      });
  }, []);

  return (
    <div>
      <h1>Temp : {item.temp.day} Feels Like : {item.feels_like.day} Description : {item.weather[0].description} </h1>
    </div>
  );
}

export default App;
