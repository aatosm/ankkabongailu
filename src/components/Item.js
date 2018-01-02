import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class Item extends Component {

  render() {

    let a = this.props.item.dateTime.split("T");
    let date = a[0].split("-")[2];
    let month = a[0].split("-")[1];
    let year = a[0].split("-")[0];
    let hours = a[1].split(":")[0];
    let minutes = a[1].split(":")[1];
    let timeStamp = date+"."+month+"."+year+" ("+hours+":"+minutes+")";

    return (
      <ListGroupItem header={this.props.item.species} >
        Description: {this.props.item.description}<br />
        Count: <b>{this.props.item.count}</b><br />
        <i>Added on {timeStamp}</i>
      </ListGroupItem>
    );

  }
}

export default Item;
