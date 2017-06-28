import React from 'react';
import './styles.css';

import {Col, Image, Button} from 'react-bootstrap';

export default function ListingItem (props) {
  return <Col xs={12} sm={12} md={4} lg={4} className="ListingItem">
    <div>
      <Image src={props.detail} alt={props.title} responsive/>
      <Button className="actionButton">Mieten</Button>
    </div>
    <div>
      <span>Title</span>
    </div>
  </Col>
}
