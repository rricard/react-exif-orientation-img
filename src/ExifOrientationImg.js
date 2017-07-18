/* @flow */
import React, { Component } from 'react';
import EXIF from 'exif-js';

class ExifOrientationImg extends Component {
  props: Object;
  state: {
    orientation: ?number,
  } = {
    orientation: null,
  };

  _onImageLoaded(imageElement: HTMLImageElement) {
    // Fix for an issue affecting exif-js: see https://github.com/exif-js/exif-js/issues/95
    const windowImage = window.Image
    window.Image = null;
    
    // Do the actual EXIF operations
    EXIF.getData(imageElement, () => {
      this.setState({ orientation: EXIF.getTag(imageElement, 'Orientation') })
    });

    // Re-establish the reference
    window.Image = windowImage;
  }

  render() {
    const {
      src,
      alt,
      ...imgProps,
    } = this.props;

    return (
      <img
        onLoad={e => this._onImageLoaded(e.target)}
        src={src}
        alt={alt}
        {...imgProps}
      />
    );
  }
}

export default ExifOrientationImg;
