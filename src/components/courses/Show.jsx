import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Components
import Loader from '../common/Loader';
import Info from './common/Info';
import Attendance from './common/Attendance';

// Material UI - components
import { Tabs, Tab } from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// Material UI - styles
import Build from 'material-ui/svg-icons/action/build';
import { transparent, cyan50 } from 'material-ui/styles/colors';

// Styles
import { floatingButton } from '../../styles';

export default class Show extends Component {
  static PropTypes = {
    course: PropTypes.object,
    handleInit: PropTypes.func
  }

  componentWillMount() {
    this.props.handleInit(this.props.params.id);
  }

  listStyle(attendance) {
    let color;
    if (attendance.current) {
      color = cyan50;
    } else {
      color = transparent;
    }

    return {
      fontSize: 14,
      backgroundColor: color
    };
  }

  render() {
    const course = this.props.course[this.props.params.id];
    return (
      <div>
        {!course ?
          <Loader /> :
          <div>
            <div className='row'>
              <Tabs initialSelectedIndex={0}>
                <Tab label="Info" >
                  <Info course={course} />
                </Tab>
                <Tab label="Attendance" >
                  <Attendance course={course} />
                </Tab>
              </Tabs>
            </div>
            <Link to='new_course'>
              <FloatingActionButton style={floatingButton}>
                <Build />
              </FloatingActionButton>
            </Link>
          </div>
        }
      </div>
    );
  }
}
