import React, { Component } from 'react';
import ListAll from './ListAll';
import AddNew from './AddNew';

class App extends Component {

  constructor(){
    super()
    this.state = {
      sightings: []
    }
  }

  componentWillMount(){
    fetch('http://localhost:8081/sightings')
      .then(data => data.json())
      .then(data => 
        this.setState({
          sightings: data
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
        <AddNew addSighting={this.handleAddSighting.bind(this)} />
      </div>
    );
  }
}

export default App;
