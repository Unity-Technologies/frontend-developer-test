import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render()', () => {
    it('renders the Box', () => {
      expect(wrapper.find({ 'data-testid': 'app-box' })).toHaveLength(2);
    });

    it('renders the users Diff', () => {
      expect(wrapper.find({ 'data-testid': 'diff-users' })).toHaveLength(1);
    });

    it('renders the projects Diff', () => {
      expect(wrapper.find({ 'data-testid': 'diff-projects' })).toHaveLength(1);
    });
  });
});
