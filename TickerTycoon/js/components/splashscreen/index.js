
import React, { Component } from 'react';
// import { Image } from 'react-native';

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'login',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <div style={{ flex: 1, height: null, width: null }} />
    );
  }
}
