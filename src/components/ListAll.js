import React, { Component } from 'react';
import Item from './Item';
import { ListGroup } from 'react-bootstrap';

class ListAll extends Component {

  render() {

    let divStyle = {
      height: 400,
      border: '1px solid black',
      overflowY: 'scroll'
    };

  	let items;
  	if(this.props.sightings){
  		items = this.props.sightings.map(item => {
  			return (
  				<Item key={item.dateTime} item={item} />
			);
  		});
  	}

    return (
      <div>
        <div className="text-center"><h3>All sightings</h3></div>
        <div style={divStyle}>
          <ListGroup>
            {items}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default ListAll;
