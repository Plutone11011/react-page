import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    },
    avatar: {
        width: 160,
        height: 160,
        marginRight: 20
    }
  }));

export default function BioHeader(){

    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Grid item xs={0} sm={2} />
                <Grid container item className={classes.header} xs={12} sm={8}>
                    <Avatar className={classes.avatar} alt="Lorenzo Borelli" src={require('./images/index.png')}/>
                    <Typography variant="h2" color="textPrimary">
                        Lorenzo Borelli
                        <Typography variant="h4" color="textSecondary">
                        23 <Link href="https://github.com/Plutone11011" variant="body2"><GitHubIcon fontSize='large' color="primary" /></Link>
                        </Typography>
                        
                    </Typography>
                    
                </Grid>
                <Grid item xs={0} sm={2} />
            </Toolbar>
        </AppBar>
    )
}