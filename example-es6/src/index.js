import React from 'react';
import ReactDOM from 'react-dom';
import Location from '../../src/Location.jsx';

function onLocationSet(value) {
  var pre = document.querySelector('pre');

  pre.innerHTML = JSON.stringify(value, null, 2);
}

window.onload = () => {
  var country = document.querySelector('#country-dropdown');
  var container = document.querySelector('#container');
  var location;

  location = ReactDOM.render(
    <Location
      country={ country.value }
      noMatching='Sorry, I can not find {{value}}.'
      onLocationSet={ onLocationSet }
      inputProps={{
        style: { color: '#0099FF' },
        className: 'location',
        placeholder: 'Where are you?'
      }}
      />,
    container
  );

  country.addEventListener('change', () => {
    location.updateCountry(country.value);
  });
};
