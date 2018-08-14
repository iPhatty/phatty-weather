import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import SearchBar from '../searchBar';
import SearchResult from '../searchResult';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a search bar', () => {
  // There is one SearchBar component in the app component
  expect(wrapped.find(SearchBar).length).toEqual(1);
});

it('shows a search result', () => {
  // There is one SearchResult component in the app component
  expect(wrapped.find(SearchResult).length).toEqual(1);
});
