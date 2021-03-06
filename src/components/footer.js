import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height:'25px'
  },
}));

function Footer(props) {
  
  const style = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={style.appBar}>
      <Toolbar></Toolbar>
    </AppBar>
  )
}

export default Footer;