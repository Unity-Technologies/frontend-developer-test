import React from 'react';
import jestMock from 'jest-mock';

import { shallow } from 'enzyme';

import Actions from './Actions';

describe('<Actions />', () => {
  let action;

  beforeEach(() => { action = jestMock.fn(); });

  it('renders the Load More button and calls the action', () => {
    const component = shallow(
      <Actions loading={false} error={false} action={action}/>
    );

    expect(component.find({ 'data-testid': 'error-message' })).toHaveLength(0);
    expect(component.find({ 'data-testid': 'loader' })).toHaveLength(0);

    const actionButton = component.find({ 'data-testid': 'action-button' });

    expect(actionButton).toHaveLength(1);
    expect(actionButton.text()).toEqual('Load More');

    actionButton.simulate('click');
    expect(action).toBeCalled();
  });

  it('renders the loader', () => {
    const component = shallow(
      <Actions loading={true} error={false} action={action}/>
    );

    expect(component.find({ 'data-testid': 'error-message' })).toHaveLength(0);
    expect(component.find({ 'data-testid': 'action-button' })).toHaveLength(0);
    expect(component.find({ 'data-testid': 'loader' })).toHaveLength(1);
  });

  it('renders the error message and Retry button and calls the action', () => {
    const component = shallow(
      <Actions loading={false} error={true} action={action}/>
    );

    expect(component.find({ 'data-testid': 'error-message' })).toHaveLength(1);
    expect(component.find({ 'data-testid': 'loader' })).toHaveLength(0);

    const actionButton = component.find({ 'data-testid': 'action-button' });

    expect(actionButton).toHaveLength(1);
    expect(actionButton.text()).toEqual('Retry');

    actionButton.simulate('click');
    expect(action).toBeCalled();
  });
});
