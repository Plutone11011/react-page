import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';

import BioHeader from './header';
import CardInfo from './cards/info';
import CardContacts from './cards/contacts';
import Footer from './footer';
import CardProjectAPI from './cards/gamereqsAPI';
import CardExperiences from './cards/experiences';
import CardAlphatube from './cards/alphatube';
import CardCourses from './cards/courses';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#dae3e7',
  },
  App: {
    fontSize: 16
  },
  projects: {
    margin:10,
    backgroundColor: '#dae3e7'
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
            <Grid container item md={6}><CardInfo /></Grid>
            <Grid container item md={6}><CardContacts /></Grid>
          </Grid>
          <Grid item sm={2} xs={0}/>
        </Grid>
        <Grid container>
        <Grid item sm={2} xs={0}/>
          <Grid container sm={8} xs={12}>
            <Grid container md={6}> <CardExperiences /> </Grid>
            <Grid container md={6}> <CardCourses /> </Grid>
          </Grid>
        <Grid item sm={2} xs={0}/>
        </Grid>
        <Grid container>
          <Grid item sm={2} xs={0}/>
          <Grid className={classes.projects} container direction='column' sm={8} xs={12}>
            <Grid container item >
              <Typography style={{'margin': 10}} color="textPrimary" variant='h3'>My Projects</Typography>
            </Grid>
            <Grid container item>
              <Grid container item md={6}><CardProjectAPI/></Grid>
              <Grid container item md={6}></Grid>
            </Grid>
            <Grid container item >
              <Typography style={{'margin': 10}} color="textPrimary" variant='h3'>Academic projects</Typography>
            </Grid>
            <Grid container item>
              <Grid container item sm={6}><CardAlphatube/></Grid>
              <Grid container item sm={6}></Grid>
            </Grid>
          </Grid>
          <Grid item sm={2} xs={0}/>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
