import React from 'react';
import '../App.css'
import ReactDOM from 'react-dom';
import GridLayout from './gridPage';
import Content from './mainPage';
import { Grid } from '@mui/material';



function App() {
  return (
    <Grid container direction="column">
        <Grid item container>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
            <Content/>
            </Grid>
            <Grid item xs={0} sm={2} />
        </Grid>
    </Grid>
  );
};

export default App;
