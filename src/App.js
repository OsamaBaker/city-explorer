import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      cityData: {},
      searchQuery: ''
    }
  }


  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value
    })

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_City_Explorer}&q=${this.state.searchQuery}&format=json`;

    let resData = await axios.get(url)

    this.setState({
      cityData: resData.data[0]
    })
    console.log(this.state.cityData)
  }


  render(){
    return(
      <>
      <h1>
        City Explorer
      </h1>
      <h3>
        Enter a city name:
      </h3>
      <form onSubmit={this.getLocation}>
        <input type='text' placeholder="Enter a city name" name='city'/>
        <input type='submit' value='Explore!' />
      </form>
      <p>City Name: {this.state.cityData.display_name}</p>
      </>
    )
  }
}

export default App;
