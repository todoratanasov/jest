import React from 'react';
import Enzyme, {shallow}from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';
const setup =()=> shallow(<App/>);
const findByTestAttr = (wrapper,val)=> wrapper.find(`[data-test='${val}']`)
//setup ennzyme
Enzyme.configure({adapter: new EnzymeAdapter()});

test("Render whithout error",()=>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,"component-app");
  expect(appComponent.length).toBe(1)
});

test("renders a button", ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button");
  expect(button.length).toBe(1)
});

test("A display of a counter",()=>{
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,"counter-display");
  expect(counterDisplay.length).toBe(1)
});

test("Counter starts at 0", ()=>{
  const wrapper = setup();
  //using .text() we're going to receive the inner text of the element with data-test attr 'count
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe('0')
});

test("Clicking on a button increments", ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button");
  //using .simulate(event) we simulate an event
  button.simulate('click');
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe('1');
});

test("should result decrement by 1",()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'decrement-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper,'bellow-error')
  expect(count.length).toBe(1)
});
