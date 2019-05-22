import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import CalendarEditor from './components/CalendarEditor';
import Timer from './components/Timer';

export default () =>
    <Grid container style={{ padding: 10 }}>
        <Header/>
        <StatusPanel/>
        <Grid item xs={6}>
            <Timer/>
        </Grid>
        <CalendarEditor/>
    </Grid>;