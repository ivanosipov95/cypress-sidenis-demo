import React from 'react'
import { Paper } from '@material-ui/core';

export default ({ total, lastWeek }) =>
    <Paper data-test='balance'>
        <div style={styles.container}>
            <span data-test='title'>Balance</span>
            <hr/>
            <div data-test='total'>total: {total || 'unknown'}</div>
            <div data-test='last-week'>last week: {lastWeek}</div>
        </div>
    </Paper>

const styles = {
    container: {
        minWidth: 200,
        padding: 20,
        lineHeight: 2
    }
};