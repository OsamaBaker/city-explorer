import React, { Component } from 'react'

import WeatherDay from './WeatherDay'
import Card from 'react-bootstrap/Card'

export class Weather extends Component {
    render() {
        return (
            <div>
                {/* <p>
                    Date: {this.props.date} Feels: {this.props.description}
                </p> */}
                <Card>
                <WeatherDay date={this.props.date} desc={this.props.description} />
                </Card>
            </div>
        )
    }
}

export default Weather
