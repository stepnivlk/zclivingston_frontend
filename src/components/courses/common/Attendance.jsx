import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default ({course}) => (
  <Card>
    <CardHeader
      title={course.name}
      subtitle={`Current Lesson: ${course.current_lesson}`}
      avatar='https://static.vecteezy.com/system/resources/previews/000/095/588/non_2x/vector-abstract-pattern-background.jpg'
    />
    <CardText>
    </CardText>
  </Card>
);
