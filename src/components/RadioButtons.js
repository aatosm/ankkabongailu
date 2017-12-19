import React, { Component } from 'react';
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class RadioButtons extends Component {
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
  }

  update(e){
    //console.log(this.props.selectedOption);
    //this.props.selectedOption = e.target.value;
    this.props.changeOrder(e.target.value);
  }

  render() {

    //console.log(this.props.selectedOption);

    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}
        /*onChange={this.update}*/>
          <ToggleButton
          value={0}
          checked={this.props.selected === 0}
          onChange={this.update}>
            Newest first
          </ToggleButton>
          <ToggleButton
          value={1}
          checked={this.props.selected === 1}
          onChange={this.update}>
            Oldest first
          </ToggleButton>

        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default RadioButtons;
