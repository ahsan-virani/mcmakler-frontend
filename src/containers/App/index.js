import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles.css';
import ListingItem from '../../components/ListingItem';
import ListingContainer from '../../components/ListingContainer';

import {loadAds} from '../../actions';

const data = [
  {
    img: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg'
  }, {
    img: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg'
  }, {
    img: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg'
  }
]

class App extends Component {
  componentDidMount() {
    this.props.onLoadAds();
  }

  render() {
    return (
      <div className="App">
        <ListingContainer>
          {data.map((dt) => {
            return <ListingItem detail={dt.img} title='lala'/>
          })}
        </ListingContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {advertisments: state.advertisments};
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadAds: () => {
      dispatch(loadAds());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
