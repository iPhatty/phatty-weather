import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import SearchBar from '../searchBar';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a search bar', () => {
  // There is one SearchBar component in the app component
  expect(wrapped.find(SearchBar).length).toEqual(1);
});
