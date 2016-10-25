import React, { Component } from 'react';
import { Link } from 'react-router';

// Material UI - components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
// Material UI - styles
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green500, grey500 } from 'material-ui/styles/colors';
import Visiblity from 'material-ui/svg-icons/action/visibility';
import VisiblityOff from 'material-ui/svg-icons/action/visibility-off';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Face from 'material-ui/svg-icons/action/face';

// Styles
import { infoColumn, floatingButton } from '../styles';

class Courses extends Component {
  componentWillMount() {
    this.props.handleInit();
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Courses"
            avatar={<Avatar>C</Avatar>}
          />
          <CardText>
            <Table>
              <TableHeader
                adjustForCheckbox={false}
                displaySelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn style={infoColumn}>
                    Public
                  </TableHeaderColumn>
                  <TableHeaderColumn style={infoColumn}>
                    Status
                  </TableHeaderColumn>
                  <TableHeaderColumn>
                    Name
                  </TableHeaderColumn>
                  <TableHeaderColumn>
                    Current Lesson
                  </TableHeaderColumn>
                  <TableHeaderColumn>
                    Time
                  </TableHeaderColumn>
                  <TableHeaderColumn>
                    Price
                  </TableHeaderColumn>
                  <TableHeaderColumn>
                    Capacity
                  </TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.props.courses.map((course, i) =>
                  <TableRow key={i}>
                    <TableRowColumn style={infoColumn}>
                      {
                        course.public ?
                          <Visiblity color={green500} /> :
                          <VisiblityOff color={grey500} />
                      }
                    </TableRowColumn>
                    <TableRowColumn style={infoColumn}>
                      {
                        course.for_children ?
                          <Face color={course.active ? green500 : grey500} /> :
                          <AccountCircle color={course.active ? green500 : grey500} />
                      }
                    </TableRowColumn>
                    <TableRowColumn>
                      <Link to={`courses/${course.id}`}>
                        {course.name}
                      </Link>
                    </TableRowColumn>
                    <TableRowColumn>
                      {course.current_lesson}
                    </TableRowColumn>
                    <TableRowColumn>
                      {course.time}
                    </TableRowColumn>
                    <TableRowColumn>
                      {course.price}
                    </TableRowColumn>
                    <TableRowColumn>
                      {course.capacity}
                    </TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardText>
        </Card>

        <Link to='new_course'>
          <FloatingActionButton style={floatingButton}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}

export default Courses;
