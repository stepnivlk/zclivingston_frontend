import React, { Component } from 'react';

// Material UI - components
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';

export default class NewCourseThird extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-6 col-md-offset-1'>
            <DatePicker
              hintText="Start Date"
            />
          </div>
          <div className='col-md-4'>
            <TimePicker
              format="24hr"
              hintText="Start Time"
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-md-offset-1'>
            <DatePicker
              hintText="End Date"
            />

          </div>
          <div className='col-md-4'>
            <TimePicker
              format="24hr"
              hintText="End Time"
            />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-md-6 col-md-offset-3'>
            Period
            <Slider step={0.3} value={0} max={0.6} />
          </div>
        </div>
      </div>
    );
  }
}
