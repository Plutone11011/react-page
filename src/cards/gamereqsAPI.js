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

export default function CardProjectAPI() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../images/steam.jpg")}
          title="The project"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" color="textPrimary">
            GameReqsAPI
          </Typography>
          <Typography variant="body1" color="textPrimary">
          GameReqs API is a RESTful api that provides endpoints to gain informations about games' system requirements.
          Data is scraped from Steam store and stored in an SQLite database.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="https://github.com/Plutone11011/GameReqsAPI" variant="body2"><Button size="small" color="primary">
            Learn more
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}