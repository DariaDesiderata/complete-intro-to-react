import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme';

test('Search renderes correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
