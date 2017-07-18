/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import ExifOrientationImg from './index';

const orientations = [1, 2, 3, 4, 5, 6, 7, 8];

const Example = () => (
  <div>
    {orientations.map(orientation => 
      <ExifOrientationImg
        key={'l' + orientation}
        src={`https://raw.githubusercontent.com/recurser/exif-orientation-examples/master/Landscape_${orientation}.jpg`}
        alt={`Landscape ${orientation}`}
      />
    )}
    {orientations.map(orientation => 
      <ExifOrientationImg
        key={'p' + orientation}
        src={`https://raw.githubusercontent.com/recurser/exif-orientation-examples/master/Portrait_${orientation}.jpg`}
        alt={`Portrait ${orientation}`}
      />
    )}
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
