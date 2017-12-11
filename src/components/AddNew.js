import React, { Component } from 'react';

class AddNew extends Component {

	constructor(){
		super();
		this.state = {
			newSighting: {}
		}
	}

  isValid(){
    let regex=/^[0-9]+$/;
    if (!this.refs.count.value.match(regex))
    {
        return false;
    }
    return true;
  }

	handleSubmit(event){

    if(this.isValid()){

      let countNum = Number(this.refs.count.value);

      if(countNum > 0){
        let timeStamp = new Date();
        timeStamp = timeStamp.toISOString();
        this.setState({newSighting: {
          id: null,
          species: this.refs.species.value,
          description: this.refs.desc.value,
          dateTime: timeStamp,
          count: countNum
        }}, function(){
          this.props.addSighting(this.state.newSighting);
        });
        this.refs.form.reset();
      }
      else {
        alert("Count cannot be zero!");
      }

    }
    else {
      alert("Count must be a number bigger than zero!");
    }
    
		event.preventDefault();
	}

  render() {

    let speciesOptions = this.props.species.map(specObj => {
      return <option key={specObj.name}>{specObj.name}</option>
    });

    return (
      <div>
      	<h3>Add Sighting</h3>
      	<form onSubmit={this.handleSubmit.bind(this)} ref="form">
      		<div>
      			<label>Species:</label><br />
      			<select ref="species">
              {speciesOptions}
            </select>
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
