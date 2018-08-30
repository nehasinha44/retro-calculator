import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/index';
import { mount } from "enzyme";


describe("<component index page />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('crashing or not', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("container class count check", () => {
    expect(wrapper.find(".FullApp").length).toBe(1);
  });
  it("html navbar count check", () => {
    expect(wrapper.find(".header").length).toBe(1);
  });
  it("should render the page if the params are there", () => {
    expect(wrapper.find(".footer").length).toBe(1);
    // console.log(wrapper.debug());
  });
  it("calculator component  class count", () => {
    expect(wrapper.find(".screen").length).toBe(1);
  });
  it("keypad class count", () => {
    expect(wrapper.find(".KeyPad").length).toBe(6);
  });
  it("body head component  class count", () => {
    expect(wrapper.find(".Solar").length).toBe(1);
  });
  it("calculator head component  class count", () => {
    expect(wrapper.find(".screenInside").length).toBe(1);
  });
  it("calculator head component  class count", () => {
    expect(wrapper.find(".modelNumber").length).toBe(1);
  });
  
});


