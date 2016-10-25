import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Alarm from 'material-ui/svg-icons/action/alarm';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Group from 'material-ui/svg-icons/social/group';

const createMarkup = (text) => (
  {__html: text}
);

const mapCategories = (categories) => (
  categories.map((c) => (
    `${c.name} `
  ))
);

export default ({course}) => (
  <Card>
    <CardHeader
      title={course.name}
      subtitle={mapCategories(course.categories)}
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
          <div dangerouslySetInnerHTML={createMarkup(course.description)} />
        </div>
      </div>
    </CardText>
  </Card>
);
