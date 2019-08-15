import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import DatePicker from "./components/DatePicker";
import Description from "./components/Description";

function App() {
  const [imgURL, setImgURL] = useState();
  const [date, setDate] = useState(formatDate(new Date().toLocaleDateString()));
  const [pickerDate, setPickerDate] = useState(new Date());
  const [title, setTitle] = useState();
  const [expl, setExpl] = useState();

  function formatDate(dateStr) {
    let dateArray = dateStr.split('/');
    dateArray.unshift(dateArray.pop())
    return dateArray.join('-');
  }

  const handleDates = (date) => {
    setPickerDate(date);
    setDate(formatDate(date.toLocaleDateString()));
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        const apod = response.data
        setImgURL(apod.url);
        setTitle(apod.title);
        setExpl(apod.explanation);
      })
      .catch(err => console.log(err))
  }, [date])

  return (
    <div className="App">
      <Header />
      <Image url={imgURL}/>
      <DatePicker pickerDate={pickerDate} handleDates={handleDates}/>
      <Description title={title} expl={expl}/>
    </div>
  );
}

export default App;
