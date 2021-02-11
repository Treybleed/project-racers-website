import * as React from 'react'
import { shallow } from 'enzyme';
import { Title } from '../components/title';

describe('Title', () => {
  it('Renders Title component', () => {
    const title = shallow(<Title title="Test title"></Title>);
    expect(title).toMatchSnapshot();
  });
});