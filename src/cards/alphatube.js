import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
    root: {
      margin: 10,
      width: '100%',
    },
    media: {
      height: 160,
    },
});

export default function CardAlphatube(){

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={require("../images/yt.png")}
                title="The project"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2" color="textPrimary">
                    AlphaTube
                </Typography>
                <Typography variant="body1" color="textPrimary">
                Alphatube is a web application that uses YouTube API to build a recommendation system for music videos,
                embedding the videos in the application and allowing the user to watch them. Shows also comments and some info
                gathered through dbpedia datasets.
                </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Link href="https://github.com/Plutone11011/Alphatube" variant="body2"><Button size="small" color="primary">
                        Learn more
                        </Button>
                    </Link>
                </CardActions>
        </Card>
    )
}