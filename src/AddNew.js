import React, { Component } from 'react';

class AddNew extends Component {

	constructor(){
		super();
		this.state = {
			newSighting: {}
		}
	}

	handleSubmit(event){
		let timeStamp = new Date();
		timeStamp = timeStamp.toISOString();
		this.setState({newSighting: {
			id: null,
			species: this.refs.species.value,
			description: this.refs.desc.value,
			dateTime: timeStamp,
			count: this.refs.count.value
		}}, function(){
			this.props.addSighting(this.state.newSighting);
		});
		event.preventDefault();
	}

  render() {
    return (
      <div>
      	<h3>Add Sighting</h3>
      	<form onSubmit={this.handleSubmit.bind(this)}>
      		<div>
      			<label>Species:</label><br />
      			<input type="text" ref="species" />
    			</div>
    			<div>
      			<label>Description:</label><br />
      			<input type="text" ref="desc" />
    			</div>
      		<div>
      			<label>Count:</label><br />
      			<input type="text" ref="count" />
    			</div>
    			<input type="submit" value="Submit" /> 
      	</form>
      </div>
    );
  }
}

export default AddNew;
