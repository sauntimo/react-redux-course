import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // abreviation for constructor function
    state = { lat: null, errorMessage: null };

    // lifecycle method called once when component is instantiated
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }),
        );
    }

    // conditional rendering based on state
    render() {
        return (
            <div>
                {!this.state.lat && !this.state.errorMessage &&
                    <Spinner message="Please accept location request"></Spinner>
                }
                {this.state.lat && !this.state.errorMessage &&
                    <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
                }
                {this.state.errorMessage && !this.state.lat &&
                    <div>Error: {this.state.errorMessage}</div>
                }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
