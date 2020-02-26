import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "1edf68f6553028409e1b751ffb945690";
class App extends React.Component {
  gettingWeather = async () => {
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}`
    );
    const data = await api_url.json;
    console.log(data);
  };
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
