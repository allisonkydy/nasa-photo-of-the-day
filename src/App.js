import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import Description from "./components/Description";

// https://api.nasa.gov/planetary/apod?api_key=D8oIlefuvBfmqihhqjyaU4JKZTqn5qWEXEf6jPmU
function App() {

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=D8oIlefuvBfmqihhqjyaU4JKZTqn5qWEXEf6jPmU')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div className="App">
      <Header />
      <Image />
      <Description />
    </div>
  );
}

export default App;
