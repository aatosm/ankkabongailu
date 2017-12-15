import React, { Component } from 'react';
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class RadioButtons extends Component {

  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
          <ToggleButton value={0}>
            Newest first
          </ToggleButton>
          <ToggleButton value={1}>
            Oldest first
          </ToggleButton>

        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default RadioButtons;
