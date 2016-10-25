import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RichTextEditor from 'react-rte'

import ConnectedUsersList from '../../../containers/ConnectedUsersList';

export default class NewCourseSecond extends Component {
  static propTypes = {
    onNameChange: PropTypes.func,
    onDescChange: PropTypes.func,
    user: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.object
  }

  onDescChange = (value) => {
    this.props.onDescChange(value);
    console.log(this.props.desc);
  }

  onNameChange = (e) => {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-6'>
            <TextField
              fullWidth={true}
              floatingLabelText="Name"
              value={this.props.name}
              onChange={this.onNameChange}
            />
          </div>
          <div className='col-sm-6'>
            <ConnectedUsersList />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-sm-12'>
            <div className='text-left'>
              Description
            </div>
            <div style={{minHeight: 200}}>
            <RichTextEditor
              value={this.props.desc}
              onChange={this.onDescChange}
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
