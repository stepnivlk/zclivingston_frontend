import React, { Component, PropTypes } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class NewCourseFirst extends Component {
  static propTypes = {
    onTypeClick: PropTypes.func
  }

  handleCheckboxChange = (event, value) => {
    this.props.onTypeClick(value);
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-4 col-md-offset-1'>
            <RadioButtonGroup
              style={{ display: 'flex' }}
              name="shipSpeed"
              onChange={this.handleCheckboxChange}
            >
              <RadioButton
                value="internal"
                label="Internal"
              />
              <RadioButton
                value="external"
                label="External"
                style={{marginLeft: 120}}
              />
            </RadioButtonGroup>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-md-offset-1'>
            <p>
              Internal course belongs to your organisation and you have full control over it. It's possible to manage all the attendances, payments and statistics.
            </p>
          </div>
          <div className='col-md-4 col-md-offset-1'>
            <p>External course belongs to other organisations and you act as a middleman. You've got limited options to control it.</p>
          </div>
        </div>
      </div>
    );
  }
}
