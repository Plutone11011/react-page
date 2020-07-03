import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      marginTop: 10,
      marginBottom: 10
    }
}));

export default function CardContacts(){

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textPrimary" variant='h4' gutterBottom>
                Contacts
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="lorenzo.borelli27@gmail.com"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LinkedInIcon/>
                        </ListItemIcon>
                        <Link href="https://www.linkedin.com/in/lorenzo-borelli-71355a19b/" variant="body2"><ListItemText primary="https://www.linkedin.com/in/lorenzo-borelli-71355a19b/"/></Link>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <GitHubIcon/>
                        </ListItemIcon>
                        <Link href="https://github.com/Plutone11011/GameReqsAPI" variant="body2"><ListItemText primary="https://github.com/Plutone11011"/></Link>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}