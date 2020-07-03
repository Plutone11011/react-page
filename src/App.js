import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

import BioHeader from './header'
import CardInfo from './info'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#dae3e7',
  },
  App: {
    fontSize: 16
  }
}));

function App() {

  const classes = useStyles()

  return (
    <div className={classes.App}>
      <Grid container direction='column'>
        <Grid container item className={classes.header}>
            <BioHeader />
        </Grid>
        <Grid container>
          <Grid item sm={2} xs={0}/>
          <Grid container item sm={8} xs={12}>
            <CardInfo />
          </Grid>
          <Grid item sm={2} xs={0}/>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
