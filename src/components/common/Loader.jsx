import React from 'react';

import { Card, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

export default () => (
  <Card>
    <CardText>
      <div className='text-center'>
        <CircularProgress size={60} thickness={7} />
      </div>
    </CardText>
  </Card>
);
