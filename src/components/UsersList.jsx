import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class UsersList extends Component {

  componentWillMount() {
    this.props.onInit();
  }

  onUserChange = (e, index, value) => {
    console.log(value);
    this.props.onUserChange(value);
  }

  render() {
    const { users } = this.props;

    return (
      <DropDownMenu
        value={this.props.userId}
        onChange={this.onUserChange}
        style={{width: '100%', marginTop: 16}}
        autoWidth={false}
      >
        {users.map((user) =>
          <MenuItem
            key={user.id}
            value={user.id}
            primaryText={user.name}
          />
        )}
      </DropDownMenu>
    )
  }
}
