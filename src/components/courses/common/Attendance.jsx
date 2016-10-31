import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default ({course}) => (
  <Card>
    <CardHeader
      title={course.name}
      subtitle={`Current Lesson: ${course.current_lesson}`}
      avatar='https://static.vecteezy.com/system/resources/previews/000/095/588/non_2x/vector-abstract-pattern-background.jpg'
    />
    <CardText>
      <Table>
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            {course.attendances.map((a) => (
              <TableHeaderColumn key={a.id}>{a.date.substring(0,5)}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {course.clients.map((c) => (
            <TableRow key={c.id}>
              <TableRowColumn>{c.name}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardText>
  </Card>
);
