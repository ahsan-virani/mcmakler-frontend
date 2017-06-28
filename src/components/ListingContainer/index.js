import React from 'react';
import './styles.css';

import {Grid, Row} from 'react-bootstrap';

export default function ListingContainer (props) {
  return <Grid>
  <Row>
  {props.children}
  </Row>
  </Grid>
}
