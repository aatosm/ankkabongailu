import React, { Component } from 'react';
import Item from './Item';

class ListAll extends Component {
  
  render() {
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
        <h3>All sightings</h3>
        {items}
      </div>
    );
  }
}

export default ListAll;
