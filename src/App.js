import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Movies from "./components/Movies";
import CardDeck from "react-bootstrap/CardDeck";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchQuery: "",
      showMap: false,
      movieObj: [],
      weatherData: []
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value,
    });

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_City_Explorer}&q=${this.state.searchQuery}&format=json`;

    let resData = await axios.get(url);

    this.setState({
      cityData: resData.data[0],
      showMap: true,
    });

    let weatherUrl = `${process.env.REACT_APP_WEATHER_URL}/weather?searchQuery=${this.state.searchQuery}`;

    let weatherInfo = await axios.get(weatherUrl);

    this.setState({
      weatherData: weatherInfo.data,
    });

    let moviesUrl = `${process.env.REACT_APP_WEATHER_URL}/movies?searchQuery=${this.state.searchQuery}`;

    let moviesResData = await axios.get(moviesUrl);

    this.setState({
      movieObj: moviesResData.data,
    });
    console.log(this.state.movieObj);
  };

  render() {
    return (
      <>
        <h1 className="heading">City Explorer</h1>
        <br />
        <h3 className="h3">Enter a city name:</h3>
        <form onSubmit={this.getLocation} className="form">
          <input type="text" placeholder="Enter a city name" name="city" />
          <br />
          <input type="submit" value="Explore!" className="submit" />
        </form>
        <p>
          City Name: {this.state.cityData.display_name},{" "}
          {this.state.cityData.lat}, {this.state.cityData.lon}
        </p>
        {this.state.showMap && (
          <img
            alt=""
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_City_Explorer}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`}
          />
        )}
        <CardDeck>
          {this.state.weatherData.map((item, idx) => {
            return (
              <Weather
                description={item.description}
                date={item.date}
                key={idx}
              />
            );
          })}
        </CardDeck>
        <CardDeck>
          {this.state.movieObj.map((item, idx) => {
            return (
              <Movies
                title={item.title}
                image_url={item.image_url}
                average_votes={item.average_votes}
                key={idx}
              />
            );
          })}
        </CardDeck>
      </>
    );
  }
}

export default App;
