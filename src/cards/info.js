import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      margin: 10
    }
}));

export default function CardInfo(){

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textPrimary" variant='h4' gutterBottom>
                About me
                </Typography>
                <Typography variant="body1" component="p">
                Developer with knowledge of Python (Flask, Pandas, Scikit-learn), and some Javascript (React) and C++. Graduated in Bologna in Computer Science. 
                Currently interested in all things AI and following an AI master in Bologna, but I also like web development, mostly backend. 
                </Typography>
            </CardContent>
        </Card>
    )
}