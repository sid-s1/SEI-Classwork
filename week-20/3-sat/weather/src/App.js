import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
  // method 1
  // const [location, setLocation] = useState('Brisbane');
  // function getTemperature() {
  //   const url = `http://localhost:3000/${location}.json`;
  //   axios.get(url).then(response => {
  //     setTemperature(response.data.temperature_celsius)
  //   })
  // }
  // const [temperature, setTemperature] = useState(getTemperature);

  // method 2
  const [temperature, setTemperature] = useState('?');
  const [location, setLocation] = useState('Sydney');
  useEffect(() => {
    getTemperature()
  }, []) // can have location within square brackets too; that will make getTemperature run every time input changes - basically same as using useEffect without any square brackets at all

  function getTemperature() {
    if (location !== "?") {
      const url = `http://localhost:3000/${location}.json`;
      axios.get(url).then(response => {
        setTemperature(response.data.temperature_celsius)
      })
    }
  }

  // method 3
  // getTemperature();

  function updateLocation(event) {
    setLocation(event.target.value)
    // getTemperature();
  }

  return (
    <div className="App">
      Enter location name: <input onChange={updateLocation} onBlur={getTemperature} value={location} type="text" />
      {/* <button onClick={getTemperature}>Get current temperature</button> */}
      <p>Current temperature for {location} is {temperature} deg C</p>
    </div>
  );
}

export default App;