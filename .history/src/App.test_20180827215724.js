import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/index';




describe("<component index page />", () => {
  let wrapper;
  beforeEach(() => {
    // const props = {
    //   match: { path: "/", url: "/", isExact: false, params: {} }
    // };
    wrapper = mount(<App/>);
    // wrapper.setState({
    //   profile: {
    //     ...mock
    //   }
    // });
  });

  it('crashing or not', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("search box check", () => {
    expect(wrapper.find("#search").length).toBe(2);
  });

  it("should render the page if the params are there", () => {
    expect(wrapper.find("#navId").length).toBe(3);
  });
  it("container class count check", () => {
    expect(wrapper.find(".container").length).toBe(1);
  });
  it("html navbar count check", () => {
    expect(wrapper.find("Navbar").length).toBe(1);
  });
  it("should render the page if the params are there", () => {
    expect(wrapper.find("Grid").length).toBe(1);
    // console.log(wrapper.debug());
  });
});
