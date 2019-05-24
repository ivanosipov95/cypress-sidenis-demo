import React from 'react';
import { Grid } from '@material-ui/core';

const username = 'Vasiliy Pupkin';

export default ({ style }) =>
    <Grid container justify='space-between' alignItems='center' style={style}>
        <Grid item>
            <img src='/logo.png' alt=''/>
        </Grid>
        <Grid item style={styles.username}>
            <div data-test='user-name'>{username}</div>
        </Grid>
    </Grid>

const styles = {
    username: {
        fontSize: '1.5em'
    }
};