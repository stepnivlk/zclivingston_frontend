import React, { Component, PropTypes } from 'react';

// Material UI
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

// Components
import NewCourseFirst from './common/First';
import NewCourseSecond from './common/Second';
import NewCourseThird from './common/Third';

export default class NewCourse extends Component {
  static propTypes = {
    sort:         PropTypes.string,
    stepIndex:    PropTypes.number,
    name:         PropTypes.string,
    desc:         PropTypes.object,
    user:         PropTypes.string,
    onTypeClick:  PropTypes.func,
    onNextClick:  PropTypes.func,
    onPrevClick:  PropTypes.func,
    onNameChange: PropTypes.func,
    onDescChange: PropTypes.func
  }

  handlePrev = () => {
    this.props.onPrevClick();
  }

  handleNext = () => {
    this.props.onNextClick();
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <NewCourseFirst
                 onTypeClick={this.props.onTypeClick}
               />;
      case 1:
        return <NewCourseSecond
                 onNameChange={this.props.onNameChange}
                 onDescChange={this.props.onDescChange}
                 onUserChange={this.props.onUserChange}
                 user={this.props.user}
                 desc={this.props.desc}
                 name={this.props.name}
               />;
      case 2:
        return <NewCourseThird />;
      default:
        return 'something went wrong';
      }
  }

  render() {
    const { stepIndex, sort } = this.props;

    return (
      <Card>
        <CardHeader
          title="New Course"
          avatar={<Avatar>N</Avatar>}
        />
        <CardText>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Types</StepLabel>
            </Step>
            <Step>
              <StepLabel>Basic info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Time and dates</StepLabel>
            </Step>
            <Step>
              <StepLabel>Prices and capacity</StepLabel>
            </Step>
            <Step>
              <StepLabel>Review changes</StepLabel>
            </Step>
          </Stepper>
          <div>
            {this.getStepContent(this.props.stepIndex)}
            <br />
            <div className='row'>
              <div className='col-sm-12'>
                <div className='pull-right' style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    style={{marginRight: 12}}
                    onTouchTap={this.handlePrev}
                    disabled={stepIndex === 0}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    disabled={sort === null}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardText>
      </Card>
    );
  }
}
