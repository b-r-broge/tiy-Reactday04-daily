import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }



  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange(event) {
    this.setState({value: event.target.value})
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(event) {
    event.preventDefault();
    this.setState({pilot: this.state.value})
  }


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(resp => resp.json())
    .then(resp => {
      let newVehicles = resp.results.map(v => {
        return (
          <div className="card">
            <h4>Vehicle: {v.name}</h4>
            <h5>Model: {v.model}</h5>
            <div className="vehicle-specs">
              <h6>Specs</h6>
              <ul>
                <li>Manufacturer: {v.manufacturer}</li>
                <li>Class: {v.vehicle_class}</li>
                <li>Passengers: {v.passengers}</li>
                <li>Crew: {v.crew}</li>
                <li>Length: {v.length}</li>
                <li>Speed: {v.max_atmosphering_speed}</li>
                <li>Cargo Capacity: {v.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        )
      })
      this.setState({vehicles: newVehicles})
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    return (
      <div className="App">
        {/*
          The App component needs the following:
          jumbotron section, form section, vehicle cards section.
          Your form will also need a header in which you will pass the state of the form upon submit.
        */}
        {/* Jumbotron */}
        <div className="jumbotron header">
          <h1> Star Wars!</h1>
          <hr />
          <p>The Vehicles of Star Wars</p>
        </div>
        <div className="form-section form">
          <h3> What is your name, Pilot?</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="pilot-input" value={this.state.name} onChange={this.handleNameChange} placeholder="Pilots Name" />
            <input type="submit" value="submit" />
          </form>
          <h2>
            {this.state.pilot}
          </h2>
        </div>
        <div className="vehicle-cards">
          {this.state.vehicles}
        </div>
      </div>
    );
  }
}

export default App;
