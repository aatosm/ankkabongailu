import React, { Component } from 'react';

class Item extends Component {
  
  render() {
    return (
      <li>
        species: {this.props.item.species}, count: {this.props.item.count}
      </li>
    );
  }
}

export default Item;
