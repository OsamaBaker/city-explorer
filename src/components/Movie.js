import React, { Component } from "react";

export class Movie extends Component {
  render() {
    return (
      <div>
        <p>
          Movie Name:
          {this.props.title}
        </p>
        <p>
          Average Votes:
          {this.props.average_votes}
        </p>

        <img src={this.props.image_url} alt=""></img>
      </div>
    );
  }
}

export default Movie;
