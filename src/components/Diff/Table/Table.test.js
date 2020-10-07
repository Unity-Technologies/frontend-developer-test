import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TableSortLabel from '@material-ui/core/TableSortLabel';

import Table from './Table';
import {DIFF_TYPE} from '../../../lib/constants';
import {usersDiff} from '../../../lib/api/data';

describe('<Table />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Table type={DIFF_TYPE.USERS} rows={usersDiff.slice(0, 3)}/>
    );
  });

  it('renders the Table with desc sort', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('sorts the Table', () => {
    component.find(TableSortLabel).simulate('click');
    expect(toJson(component)).toMatchSnapshot();
  });
});
