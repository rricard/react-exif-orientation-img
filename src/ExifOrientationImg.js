/* @flow */
import React, { Component } from 'react';
import EXIF from 'exif-js';
import exif2css from 'exif2css';

const snakeToCamelCaseKeys = (obj: Object): Object =>
  Object.keys(obj)
    .map(k => ({
      [k.replace(/(-\w)/g, m => m[1].toUpperCase())]: obj[k],
    }))
    .reduce((a, b) => ({...a, ...b}), {});

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
      style,
      ...imgProps,
    } = this.props;
    const {
      orientation,
    } = this.state;

    return (
      <img
        onLoad={e => this._onImageLoaded(e.target)}
        src={src}
        alt={alt}
        style={{
          ...(
            orientation ?
              snakeToCamelCaseKeys(exif2css(orientation)) :
              {}
          ),
          ...style,
        }}
        {...imgProps}
      />
    );
  }
}

export default ExifOrientationImg;
