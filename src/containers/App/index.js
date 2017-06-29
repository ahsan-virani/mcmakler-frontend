import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles.css';
import ListingItem from '../../components/ListingItem';
import ListingContainer from '../../components/ListingContainer';

import {loadAds} from '../../actions';

class App extends Component {
  componentDidMount() {
    this.props.onLoadAds();
  }

  render() {
    return (
      <div className="App">
        <ListingContainer>
          {this.props.advertisments.map((dt) => {
            return <ListingItem data={dt}/>
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
