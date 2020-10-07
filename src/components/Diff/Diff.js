import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import Table from './Table/Table';
import Actions from './Actions/Actions';

import {DIFF_TYPE} from '../../lib/constants';

export const Diff = ({type, fetchData}) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  const wrappedFetchData = React.useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetchData();
      setRows(rows.concat(response.data));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [fetchData, rows]);

  React.useEffect(() => { wrappedFetchData(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Paper>
      <Table type={type} rows={rows} data-testid="table"/>
      <Actions loading={loading} error={error} action={wrappedFetchData} data-testid="actions"/>
    </Paper>
  );
};

Diff.propTypes = {
  type: PropTypes.oneOf(Object.values(DIFF_TYPE)).isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Diff;
