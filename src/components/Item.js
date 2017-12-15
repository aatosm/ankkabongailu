import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class Item extends Component {

  render() {
    return (
      <ListGroupItem header={this.props.item.species} >
        Description: {this.props.item.description}<br />
        Count: <b>{this.props.item.count}</b><br />
        Time: {this.props.item.dateTime}
      </ListGroupItem>
    );
  }
}

export default Item;
