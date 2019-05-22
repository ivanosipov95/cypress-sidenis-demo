import React from 'react'
import Grid from '@material-ui/core/Grid';
import Balance from './Balance';
import Today from './Today';

export default () =>
    <Grid container justify='space-between' alignItems='flex-end'>
        <Grid item>
            <Today/>
        </Grid>
        <Grid item>
            <Balance/>
        </Grid>
    </Grid>