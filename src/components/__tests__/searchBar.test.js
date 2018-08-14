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

describe('the input', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: { value: 'city search' }
    });
    wrapped.update();
  });

  it('has a input that users can type in', () => {
    expect(wrapped.find('input').prop('value')).toEqual('city search');
  });

  it('submits and empties input', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('input').prop('value')).toEqual('');
  });
});
