import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import App from '../App';
import SearchBar from '../searchBar';
import SearchResult from '../searchResult';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

it('shows a search bar', () => {
  // There is one SearchBar component in the app component
  expect(wrapped.find(SearchBar).length).toEqual(1);
});
it("shows doesn't initially show a search result", () => {
  // There is no SearchResult component in the app component in it's initial state
  expect(wrapped.find(SearchResult).length).toEqual(0);
});
