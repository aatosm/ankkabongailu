import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import style from '../styles'

class AddNew extends Component {

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			newSighting: {}
		}
	}


  isValid(){
    let regex=/^[0-9]+$/;
    if (!this.inputCount.value.match(regex))
    {
        return false;
    }
    return true;
  }


	handleSubmit(event){
		event.preventDefault();

    if(this.isValid()){
      let countNum = Number(this.inputCount.value);

      if(countNum > 0){
        let timeStamp = new Date();
        timeStamp = timeStamp.toISOString();
        this.setState({newSighting: {
          id: null,
          species: this.inputSpec.value,
          description: this.inputDesc.value,
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

	}


  render() {

    let speciesOptions = this.props.species.map(specObj => {
      return <option key={specObj.name}>{specObj.name}</option>
    });


    return (
	    <div>
	    	<h3 className="text-center">Add Sighting</h3>
	    	<form onSubmit={this.handleSubmit} ref="form">
    			<FormGroup>
    				<ControlLabel>Select species</ControlLabel>
						<FormControl componentClass="select"
						inputRef={(input) => this.inputSpec = input}>
							{speciesOptions}
          	</FormControl>
  				</FormGroup>
  				<FormGroup >
    				<ControlLabel>Description</ControlLabel>
						<FormControl
							componentClass="textarea"
							style={style.textAreaStyle}
							placeholder="Give a short description (Max 180 characters)"
    					type="text"
							maxLength="180"
							inputRef={(input) => this.inputDesc = input}
							/>
  				</FormGroup>
  				<FormGroup>
    				<ControlLabel>Count</ControlLabel>
						<FormControl
							componentClass="input"
    					type="text"
							inputRef={(input) => this.inputCount = input}
							placeholder="How many did you see?"
						/>
					</FormGroup>
					<Button bsStyle="info" type="submit">
    				Submit
  				</Button>
    		</form>
    	</div>
    );
  }
}

export default AddNew;
