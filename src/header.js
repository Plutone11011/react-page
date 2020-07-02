import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core'

import MyAvatar from './avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'inherit'
    },
    toolbar: {
      minHeight: 256,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
    typography: {
        flexGrow: 1,
        textAlign: 'center'
    }
  }));

export default function MyHeader(){

    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4">
                Lorenzo Borelli
                </Typography>
            </Toolbar>
        </AppBar>
    )
}