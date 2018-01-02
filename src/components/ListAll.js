import React, { Component } from 'react';
import Item from './Item';
import { ListGroup } from 'react-bootstrap';
import style from '../styles'

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
        <div className="text-center"><h3>All sightings</h3></div>
        <div style={style.divStyle}>
          <ListGroup>
            {items}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default ListAll;
