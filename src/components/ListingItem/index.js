import React from 'react';
import './styles.css';

export default function ListingItem(props) {
  const {title, purpose, advertisementPrice} = props.data;
  const price = ((purpose === 1) && advertisementPrice.sellPrice)
    ? advertisementPrice.sellPrice
    : advertisementPrice.baseRent;
  const showAddress = props.data.userWishes.visibleAddress === true;
  const {address, numberOfRooms, space} = props.data.realestateSummary;
  let titleImgUrl = props.data.advertisementAssets.advertisementThumbnails.inventory_m.url;
  let titleImageMeta;
  if (!titleImgUrl) {
    for (var key in props.data.advertisementAssets) {
      if (props.data.advertisementAssets.hasOwnProperty(key) && key !== 'advertisementThumbnails') {
        const item = props.data.advertisementAssets[key];
        if (!titleImgUrl) {
          titleImgUrl = item.advertisementThumbnails.inventory_m.url;
          titleImageMeta = props.data.advertisementAssets.advertisementThumbnails.inventory_m.metadata;
        } else if (item.titlePicture === true) {
          titleImgUrl = item.advertisementThumbnails.inventory_m.url;
          titleImageMeta = props.data.advertisementAssets.advertisementThumbnails.inventory_m.metadata;
          break;
        }
      }
    }
  } else {
    titleImageMeta = props.data.advertisementAssets.advertisementThumbnails.inventory_m.metadata;
  }
  //
  return <div className="ListingItem">
    <div className="title_image">
      <img src={titleImgUrl} alt={title}/>
      <button className="actionButton">{purpose === 1
          ? 'Kaufen'
          : 'Mieten'}</button>
    </div>
    <div className="listing_details">
      <div className="listing_title">{title}</div>
      <div className="listing_address">{showAddress
          ? address.fullAddress
          : address.city}</div>
      <div className="listing_bottom">
        <div className="listing_price">{`${price
            ? price.toLocaleString('de-DE')
            : ''} €`}</div>
        <div className="listing_bottom_right">
          <div className="listing_rooms">{`${numberOfRooms} Zimmer`}</div>
          <div className="listing_seperator"></div>
          <div className="listing_space">{`ab ${space.toString().split(".")[0]} m`}
            <sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  </div>
}
