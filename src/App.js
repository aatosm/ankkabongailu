import React, { Component } from 'react';
import ListAll from './components/ListAll';
import AddNew from './components/AddNew';
import RadioButtons from './components/RadioButtons';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

  constructor(){
    super()
    this.state = {
      sightings: [],
      species: [],
      listDescending: true
    }
  }

  ascendingOrder(sighting1, sighting2){
    let dateObj1 = new Date(sighting1.dateTime)
    let dateObj2 = new Date(sighting2.dateTime)
    if(dateObj1 > dateObj2) return 1;
    if(dateObj1 < dateObj2) return -1;
    return 0;
  }

  descendingOrder(sighting1, sighting2){
    let dateObj1 = new Date(sighting1.dateTime)
    let dateObj2 = new Date(sighting2.dateTime)
    if(dateObj1 > dateObj2) return -1;
    if(dateObj1 < dateObj2) return 1;
    return 0;
  }

  //sortDates(data){
  initListDescending(data){
    return data.sort(this.descendingOrder);
  }

  sortListWhenAddedNew(data){
    if(this.state.listDescending === true){
      return data.sort(this.descendingOrder);
    } else {
      return data.sort(this.ascendingOrder);
    }

  }

  changeListOrder(){
    if(this.state.listDescending === true){
      let list = this.state.sightings;
      list = list.sort(this.ascendingOrder);
      let newOrder = this.state.listDescending;
      newOrder = false;
      this.setState({sightings: list,
                    listDescending: newOrder
                    });
    }
    else {
      let list = this.state.sightings;
      list = list.sort(this.descendingOrder);
      let newOrder = this.state.listDescending;
      newOrder = true;
      this.setState({sightings: list,
                    listDescending: newOrder
                    });
    }
  }

  componentDidMount(){
    fetch('http://localhost:8081/sightings')
      .then(data => data.json())
      .then(data => this.initListDescending(data))
      .then(data =>
        this.setState({
          sightings: data
        }));

    fetch('http://localhost:8081/species')
      .then(data => data.json())
      .then(data =>
        this.setState({
          species: data
        }));
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
    let sortedSightings = this.sortListWhenAddedNew(sightings);
    this.setState({sightings: sortedSightings});
  }

  render() {

    return (
      <div className="App">
        <Grid>
          <Row className="titleRow text-center">
            <Col md={12}><h1>AnkkaBongailu</h1></Col>
          </Row>
          <Row>
            <Col md={6}>
              <ListAll sightings={this.state.sightings} />
              <RadioButtons changeOrder={this.changeListOrder.bind(this)} />
            </Col>
            <Col md={6}>
              <AddNew addSighting={this.handleAddSighting.bind(this)} species={this.state.species} />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
