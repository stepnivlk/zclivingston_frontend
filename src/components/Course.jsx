import React, { Component } from 'react';
import { Link } from 'react-router';

// Material UI - components
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// Material UI - styles
import Alarm from 'material-ui/svg-icons/action/alarm';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Group from 'material-ui/svg-icons/social/group';
import Build from 'material-ui/svg-icons/action/build';
import { transparent, cyan50 } from 'material-ui/styles/colors';

// Styles
import { floatingButton } from '../styles';

export default class Course extends Component {
  componentWillMount() {
    this.props.handleInit(this.props.params.id);
  }

  createMarkup(text) {
    return {__html: text};
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
        {course ?
          <div>
            <div className='row'>
              <Tabs initialSelectedIndex={0}>
                <Tab label="Info" >
                  <Card>
                    <CardHeader
                      title={course.name}
                      subtitle={`Current lesson: ${course.current_lesson}`}
                      avatar='https://static.vecteezy.com/system/resources/previews/000/095/588/non_2x/vector-abstract-pattern-background.jpg'
                    />
                    <CardText>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <List>
                            <ListItem
                              disabled={true}
                              leftAvatar={<Avatar>M</Avatar>}
                              primaryText="Lector"
                              secondaryText={course.user_name}
                            />
                            <ListItem
                              disabled={true}
                              leftAvatar={<Avatar icon={<ShoppingCart />} />}
                              primaryText="Price / OneOff"
                              secondaryText={course.price + ' / ' + course.oneoff_price}
                            />
                            <ListItem
                              disabled={true}
                              leftAvatar={<Avatar icon={<Alarm />} />}
                              primaryText="Time"
                              secondaryText={course.time}
                            />
                            <ListItem
                              disabled={true}
                              leftAvatar={<Avatar icon={<Group />} />}
                              primaryText="Capacity"
                              secondaryText={course.capacity}
                            />
                          </List>
                        </div>
                        <div className='col-sm-8'>
                          <div dangerouslySetInnerHTML={this.createMarkup(course.description)} />
                        </div>
                      </div>
                    </CardText>
                  </Card>

                </Tab>
                <Tab label="Attendance" >
                  <Card>
                    <CardHeader
                      title="Current Lesson"
                      subtitle={course.current_lesson}
                      avatar={<Avatar>A</Avatar>}
                    />
                    <CardText>
                    </CardText>
                  </Card>
                </Tab>
              </Tabs>
            </div>
            <Link to='new_course'>
              <FloatingActionButton style={floatingButton}>
                <Build />
              </FloatingActionButton>
            </Link>
          </div>
          :
          <Card>
            <CardText>
              <div className='text-center'>
                <CircularProgress size={60} thickness={7} />
              </div>
            </CardText>
          </Card>
        }
      </div>
    );
  }
}
