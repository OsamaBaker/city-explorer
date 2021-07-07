import React, { Component } from 'react'

export class WeatherDay extends Component {
    render() {
        return (
            <div>
                <p>
                    Date: {this.props.date} Feels: {this.props.desc}
                </p>
            </div>
        )
    }
}

export default WeatherDay
