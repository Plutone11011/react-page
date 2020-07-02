import React from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';
import MyHeader from './header'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#dce3e5',
  }
}));

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <Grid container direction='column'>
        <Grid container item className={classes.header}>
            <MyHeader />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
