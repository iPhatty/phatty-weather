import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import App from '../App';
import SearchBar from '../searchBar';

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
