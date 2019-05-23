import React from 'react'
import { Grid } from '@material-ui/core';
import HistoryList from "./HistoryList";

export default ({ rows }) =>
    <Grid container>
        <HistoryList rows={rows}/>
    </Grid>
