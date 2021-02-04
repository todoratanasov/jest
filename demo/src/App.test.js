import { render, screen } from '@testing-library/react';
import Enzyme, {shallow }from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App'

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders whithout crashing', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toBeTruthy();//expects to be true

});
