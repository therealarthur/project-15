import React, { Component } from "react";
import './App.css';
import Map from './map/Map';

class App extends Component {
    // constructor to initialize the default state
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    // fetch data from the api
    callAPI() {
        fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    }

    // use React's lifecycle method to call `callAPI()` after the component
    // mounts
    componentDidMount() {
        this.callAPI();
    }

    // display a header and paragrap with the text retrieved from the API
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Zen Cycle</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                <Map />
            </div>
        );
    }
}

export default App;
