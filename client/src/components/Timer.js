import React, { useState } from 'react'
import { Button, LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default () => {
    const [running, setRunning] = useState(false);
    const toggleTimer = () => setRunning(!running);

    return (
        <Grid container alignItems='center'>
            <Grid item xs>
                <LinearProgress variant='determinate' value={30}/>
            </Grid>
            <Grid item>
                <Button onClick={toggleTimer}>{running ? 'Stop' : 'Start'}</Button>
            </Grid>
        </Grid>
    )
}
