import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
import Movies from './components/Movies';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      cityData: {},
      searchQuery: '',
      showMap: false,
      movieObj: [],
    }
  }


  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value
    })

    let url = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}`;

    let resData = await axios.get(url)

    
    
    this.setState({
      cityData: resData.data[0],
      showMap: true
    })
    console.log(this.state.cityData)
  }

  getMovies = async () => {
    
    let moviesUrl = `http://localhost:3001/movie?query=${this.state.searchQuery}`

    let moviesResData = await axios.get(moviesUrl)

    this.setState({
      movieObj: moviesResData.data[0]
    })
  }


  render(){
    return(
      <>
      <h1 className='heading'>
        City Explorer
      </h1>
      <br />
      <h3 className='h3'>
        Enter a city name:
      </h3>
      <form onSubmit={this.getLocation} className='form'>
        <input type='text' placeholder="Enter a city name" name='city'/>
        <br />
        <input type='submit' value='Explore!' className='submit'/>
      </form>
      <p>City Name: {this.state.cityData.display_name}, {this.state.cityData.lat}, {this.state.cityData.lon}</p>
      {this.state.showMap && 
      <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_City_Explorer}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />}
      <Movies movie={this.state.movieObj}/>
      </>
    )
  }
}

export default App;
