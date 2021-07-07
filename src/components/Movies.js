import React from "react";
import Movie from "./Movie";
import Card from 'react-bootstrap/Card'

class Movies extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Movie
            title={this.props.title}
            image_url={this.props.image_url}
            average_votes={this.props.average_votes}
          />
        </Card>
      </div>
    );
  }
}

export default Movies;
