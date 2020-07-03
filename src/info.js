import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 10,
      marginBottom: 10
    }
});

export default function CardInfo(){

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textPrimary" variant='h4' gutterBottom>
                About me
                </Typography>
                <Typography variant="body1" component="p">
                Student developer with knowledge of Python (Flask), Javascript (React) and some C++. <br/>Currently interested in all things AI.
                </Typography>
            </CardContent>
        </Card>
    )
}