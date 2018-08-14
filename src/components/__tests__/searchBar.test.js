import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import SearchBar from '../searchBar';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <SearchBar />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it('has a search input and a button', () => {
  expect(wrapped.find('input').length).toBe(1);
  expect(wrapped.find('button').length).toBe(1);
});
