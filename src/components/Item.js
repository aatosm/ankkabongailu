import React, { Component } from 'react';

class Item extends Component {
  
  render() {
    return (
      <li>
        Species: {this.props.item.species}<br />
        Description: {this.props.item.description}<br />
        count: {this.props.item.count}
      </li>
    );
  }
}

export default Item;
