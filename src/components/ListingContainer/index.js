import React from 'react';
import './styles.css';

export default function ListingContainer(props) {
  return <div >
    <div className="listingContainer">
      {props.children}
    </div>
  </div>
}
