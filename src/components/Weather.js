import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <p>
                    Date: {this.props.date} Feels: {this.props.description}
                </p>
            </div>
        )
    }
}

export default Weather
