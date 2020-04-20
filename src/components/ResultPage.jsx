import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

export default function ResultPage(props){
  const classes = useStyles();
  var count = "";
    if(props.b > props.c && props.b > props.a) count = "bjp";
    else if(props.c> props.b && props.c > props.a) count = "cong";
    else count = "aap";
    console.log(props.b+" "+props.c+" "+props.a); 
  return (
    <div className={classes.root}>
      <AppBar  style={{ background: 'pink' }} position="static">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
          {count === "bjp" && <div>ABKI BAAR MODI SARKAAR </div>}
          {count === "aap" && <div>CHAL GAYI JHAARU UD GAYA DHOOL</div> }
          {count === "cong" && <div>AB AALOO SONA BANEGA</div>} 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
