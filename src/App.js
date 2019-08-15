import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodHeader from "./components/Header";
import ApodImage from "./components/Image";
import ApodDatePicker from "./components/DatePicker";
import Description from "./components/Description";
import styled from 'styled-components';

import "./App.css";

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

  const App = styled.div`
    background-image: linear-gradient(#0c0f1e, #b3611d);
  `

  const Container = styled.div`
    padding: 10px 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <App>
      <ApodHeader />
      <ApodImage url={apodData.url}/>
      <Container>
        <ApodDatePicker pickerDate={pickerDate} handleDates={handleDates}/>
        <Description title={apodData.title} expl={apodData.explanation}/>
      </Container>
    </App>
  );
}

export default App;
