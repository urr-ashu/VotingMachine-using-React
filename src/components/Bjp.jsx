import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Bjp(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar  style={{ background: 'orange' }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BJP 
          </Typography>
          <IconButton
                 onClick = { () => {
                  props.updateCount((prevValue) => {
                    return(prevValue+1);
                  });
              } }
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}