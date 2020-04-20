import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "../App.css";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function ResultButton(props) {

  function dataSender(){
    props.fnSetter(props.bCount, props.cCount, props.aCount);
  }

  const classes = useStyles();
  return (
  <div className = "center" >
    <Link style={{textDecoration : "none"}} to = "/result">
      <Button onClick = {dataSender} className={classes.root}>SEE RESULTS</Button>
    </Link>
  </div>
  );
}