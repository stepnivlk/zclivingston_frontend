import React, { Component } from 'react';

// Components
import DrawerButton from './DrawerButton';
import DrawerBar from './DrawerBar';
import LoginButton from './LoginButton';
import LoggedButton from './LoggedButton';

// Material UI
import AppBar from 'material-ui/AppBar';

// Styles
import { containerStyle, appBar, iconStyle } from '../styles'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          style={appBar}
          title="Livingston"
          iconElementLeft={
            <DrawerButton
              toggle={this.props.drawer}
              onDrawerClick={this.props.onDrawerToggleClick}
            />
          }
          iconElementRight={
            this.props.login.loggedIn ?
              <div style={iconStyle}>
                {this.props.login.name}
                <LoggedButton />
              </div> :
              <LoginButton />
          }
        />
        <DrawerBar drawer={this.props.drawer} />

        <div className='container' style={containerStyle}>
          <div className='row'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
