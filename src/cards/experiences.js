import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      margin: 10
    },
    title: {
        paddingLeft: 16,
        paddingRight: 16
    }
}));

export default function CardExperiences(){

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" variant='h4' gutterBottom>
                    My Experiences
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Internship at CINECA as web application tester, developing unit tests in Mocha for an enterprise level we application"/>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
} 