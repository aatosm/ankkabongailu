import React, { Component } from 'react';
import ListAll from './components/ListAll';
import AddNew from './components/AddNew';

class App extends Component {

  constructor(){
    super()
    this.state = {
      sightings: [],
      species: []
    }
  }

  componentWillMount(){
    fetch('http://localhost:8081/sightings')
      .then(data => data.json())
      .then(data => 
        this.setState({
          sightings: data
        }))

    fetch('http://localhost:8081/species')
      .then(data => data.json())
      .then(data => 
        this.setState({
          species: data
        }))
  }

  handleAddSighting(sighting){
    fetch('http://localhost:8081/sightings', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sighting)
    })

    let sightings = this.state.sightings;
    sightings.push(sighting);
    this.setState({sightings: sightings});
  }

  render() {
    return (
      <div className="App">
        <h1>AnkkaBongailu</h1>
        <ListAll sightings={this.state.sightings} />
        <AddNew addSighting={this.handleAddSighting.bind(this)} species={this.state.species} />
      </div>
    );
  }
}

export default App;
