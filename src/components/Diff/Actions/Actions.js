import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  actionsBox: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 80,
  },
});

export const Actions = ({loading, error, action}) => {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.actionsBox}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        {
          error && (
            <Grid item data-testid="error-message">
              <Typography variant="subtitle2" color="error">
                We had problems fetching your data. Please try again.
              </Typography>
            </Grid>
          )
        }
        {
          !loading && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={action}
                data-testid="action-button"
              >
                {error ? 'Retry' : 'Load More'}
              </Button>
            </Grid>
          )
        }
        {
          loading && (
            <Grid item data-testid="loader">
              <CircularProgress/>
            </Grid>
          )
        }
      </Grid>
    </Box>
  );
};

Actions.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default Actions;
