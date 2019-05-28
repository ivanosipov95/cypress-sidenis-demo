import React from 'react';
import { Grid } from '@material-ui/core';
import { useUser } from "../utils/hooks";

export default ({ style }) => {
    const user = useUser();

    return (
        <Grid container justify='space-between' alignItems='center' style={style}>
            <Grid item>
                <img src='/logo.png' alt=''/>
            </Grid>
            <Grid item style={styles.username}>
                {user && <div data-test='user-name'>{user.name}</div>}
            </Grid>
        </Grid>
    );
}

const styles = {
    username: {
        fontSize: '1.5em'
    }
};