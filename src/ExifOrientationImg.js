/* @flow */
import React, { Component } from 'react';

class ExifOrientationImg extends Component {
  props: Object;

  render() {
    const {
      src,
      alt,
      ...imgProps,
    } = this.props;

    return (
      <img src={src} alt={alt} {...imgProps} />
    );
  }
}

export default ExifOrientationImg;
