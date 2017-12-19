import React, { Component } from 'react';
import ListAll from './components/ListAll';
import AddNew from './components/AddNew';
import RadioButtons from './components/RadioButtons';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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
    axios.get(this.props.sightingsUrl)
      .then(res => this.initListDescending(res.data))
      .then(res => this.setState({
        sightings: res
      }));

    axios.get(this.props.speciesUrl)
      .then(res =>
        this.setState({
          species: res.data
        })
      );
  }


  handleAddSighting(sighting){
    axios.post(this.props.sightingsUrl, sighting);

    let sightings = this.state.sightings;
    sightings.push(sighting);
    let sortedSightings = this.sortListWhenAddedNew(sightings);
    this.setState({sightings: sortedSightings});

    console.log(this.state.sightings);
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
              <ListAll sightings={this.state.sightings} /><br/>
              <RadioButtons changeOrder={this.changeListOrder.bind(this)} />
            </Col>
            <Col md={4} mdOffset={1}>
              <AddNew addSighting={this.handleAddSighting.bind(this)} species={this.state.species} />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
