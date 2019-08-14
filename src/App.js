import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import Description from "./components/Description";

function App() {
  const [imgURL, setImgURL] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [expl, setExpl] = useState();


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        const apod = response.data
        setImgURL(apod.url);
        setDate(apod.date);
        setTitle(apod.title);
        setExpl(apod.explanation);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Image url={imgURL}/>
      <Description date={date} title={title} expl={expl}/>
    </div>
  );
}

export default App;
