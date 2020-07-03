import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

import BioHeader from './header';
import CardInfo from './cards/info';
import CardContacts from './cards/contacts';
import Footer from './footer';

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
          <Grid container sm={8} xs={12}>
            <Grid container item sm={6}><CardInfo /></Grid>
            <Grid container item sm={6}><CardContacts /></Grid>
          </Grid>
          <Grid item sm={2} xs={0}/>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
