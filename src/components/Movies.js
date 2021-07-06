import React from 'react'

class Movies extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Movie Name:
                {this.props.title}
                </p>

                <img src={this.props.image_url} alt=''></img>
            </div>
        )
    }
}

export default Movies
