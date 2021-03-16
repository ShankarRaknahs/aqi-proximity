import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../Title';
import { APP } from '../../../config/app.config';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('<Title />', () => {
  it('render correctly using Enzyme (snapshot)', () => {
    const tree = mount(<Title data={APP.TITLE} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
