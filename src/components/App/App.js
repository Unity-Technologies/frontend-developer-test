import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';

import Diff from '../Diff/Diff';
import api from '../../lib/api';
import {DIFF_TYPE} from '../../lib/constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const useStyles = makeStyles({
  '@global': {
    body: {
      backgroundColor: '#f5f5f5',
    }
  },
});

const fetchUsersData = async () => api.getUsersDiff();
const fetchProjectsData = async () => api.getProjectsDiff();

export const App = () => {
  useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="app" fixed>
        <Box data-testid="app-box" m={2} mb={8}>
          <Diff type={DIFF_TYPE.USERS} fetchData={fetchUsersData} data-testid="diff-users"/>
        </Box>
        <Box data-testid="app-box" m={2}>
          <Diff type={DIFF_TYPE.PROJECTS} fetchData={fetchProjectsData} data-testid="diff-projects"/>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
