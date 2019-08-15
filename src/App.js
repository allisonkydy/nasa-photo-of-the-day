import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import DatePicker from "./components/DatePicker";
import Description from "./components/Description";

function App() {
  const [date, setDate] = useState(formatDate(new Date().toLocaleDateString()));
  const [pickerDate, setPickerDate] = useState(new Date());
  const [apodData, setApodData] = useState([]);

  // MM/DD/YYYY --> YYYY-MM-DD
  function formatDate(dateStr) {
    let dateArray = dateStr.split('/');
    return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
  }

  function handleDates(date) {
    setPickerDate(date);
    setDate(formatDate(date.toLocaleDateString()));
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        setApodData(response.data)
      })
      .catch(err => console.log(err))
  }, [date])

  return (
    <div className="App">
      <Header />
      <Image url={apodData.url}/>
      <DatePicker pickerDate={pickerDate} handleDates={handleDates}/>
      <Description title={apodData.title} expl={apodData.explanation}/>
    </div>
  );
}

export default App;
