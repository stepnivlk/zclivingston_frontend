import React from 'react';

// Material UI
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

const LoggedButton = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <Avatar
          size={30}
        >
          M
      </Avatar>
    </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Profile" />
    <MenuItem primaryText="Organisation" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

LoggedButton.muiName = 'IconMenu';

export default LoggedButton;
