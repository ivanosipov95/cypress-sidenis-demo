import React from 'react'
import { Paper } from '@material-ui/core';

export default () =>
    <Paper>
        <div style={styles.container}>
            <span>Balance</span>
            <hr/>
            total: 1 hour<br/>
            last mouth: -10 hours
        </div>
    </Paper>

const styles = {
    container: {
        minWidth: 200,
        padding: 20,
        lineHeight: 2
    }
};