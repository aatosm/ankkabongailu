import React, { Component } from 'react';
import ListAll from './components/ListAll';
import AddNew from './components/AddNew';
import RadioButtons from './components/RadioButtons';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import style from './styles';

class App extends Component {

  constructor(){
    super()
    this.state = {
      sightings: [],
      species: [],
      selected: 0  // state of the newest/oldest filtering (0=newest, 1=oldest)
    }
    this.handleAddSighting  = this.handleAddSighting.bind(this);
    this.changeListOrder = this.changeListOrder.bind(this);
  }


  // Change the sightings list order after click event on filter buttons
  changeListOrder(option){
    let list = this.state.sightings;
    if(option == 0){
      list = list.sort(this.descendingOrder);
    }
    else {
      list = list.sort(this.ascendingOrder);
    }

    this.setState({
      sightings: list,
      selected: option
    });
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


  loadSightingsFromServer(){
    axios.get(this.props.sightingsUrl)
      .then(res => this.sortList(res.data))
      .then(res => this.setState({
        sightings: res
      }))
  }


  // Change the sightings list order to descending when the page loads
  sortList(data){
    return data.sort(this.descendingOrder);
  }


  componentDidMount(){
    this.loadSightingsFromServer();
    // load also species-array and save into state
    axios.get(this.props.speciesUrl)
      .then(res =>
        this.setState({
          species: res.data
        })
      )
  }


  handleAddSighting(sighting){
    axios.post(this.props.sightingsUrl, sighting)
      .then(res => this.loadSightingsFromServer())
  }


  render() {

    return (

      <Grid>
        <Row className="titleRow text-center">
          <Col md={12}><h1 style={style.header}>AnkkaBongailu</h1></Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListAll sightings={this.state.sightings} /><br/>
            <RadioButtons changeOrder={this.changeListOrder} selectedOption={this.state.selected} />
          </Col>
          <Col md={4} mdOffset={1}>
            <AddNew addSighting={this.handleAddSighting} species={this.state.species} />
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
