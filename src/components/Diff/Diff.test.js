import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Button from '@material-ui/core/Button';

import Diff from './Diff';
import Table from './Table/Table';
import Actions from './Actions/Actions';

import api from '../../lib/api';
import {projectsDiff} from '../../lib/api/data';
import {DIFF_TYPE} from '../../lib/constants';

describe('<Diff />', () => {
  // jest.setTimeout(10000);
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000; // eslint-disable-line no-undef

  let fetchDataPromise;

  const fetchData = () => {
    const apiPromise = api.getProjectsDiff();
    fetchDataPromise = apiPromise.catch(() => {});
    return apiPromise;
  };

  it('renders, loads more, retry', async (done) => {
    const component = mount(<Diff type={DIFF_TYPE.PROJECTS} fetchData={fetchData}/>);

    expect(component.find(Actions).props().loading).toBe(true);
    expect(component.find(Actions).props().error).toBe(false);
    expect(component.find(Table).props().rows).toEqual([]);

    await act(() => fetchDataPromise);

    component.update();

    expect(component.find(Actions).props().loading).toBe(false);
    expect(component.find(Actions).props().error).toBe(false);
    expect(component.find(Table).props().rows).toEqual(projectsDiff.slice(0, 3));

    // load more

    component.find(Actions).find(Button).simulate('click');

    expect(component.find(Actions).props().loading).toBe(true);
    expect(component.find(Actions).props().error).toBe(false);

    await act(() => fetchDataPromise);

    component.update();

    expect(component.find(Actions).props().loading).toBe(false);
    expect(component.find(Actions).props().error).toBe(true);
    expect(component.find(Table).props().rows).toEqual(projectsDiff.slice(0, 3));

    // retry

    component.find(Actions).find(Button).simulate('click');

    expect(component.find(Actions).props().loading).toBe(true);
    expect(component.find(Actions).props().error).toBe(false);

    await act(() => fetchDataPromise);

    component.update();

    expect(component.find(Actions).props().loading).toBe(false);
    expect(component.find(Actions).props().error).toBe(false);
    expect(component.find(Table).props().rows).toEqual(projectsDiff.slice(0, 6));

    done();
  });
});
