import React from 'react'
import { Grid } from '@material-ui/core';
import HistoryList from "./HistoryList";

export default ({ style, rows }) =>
    <Grid container style={style}>
        <HistoryList rows={rows}/>
    </Grid>
