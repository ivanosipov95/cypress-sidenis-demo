import React, { useState } from 'react'
import { Button, LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useInterval } from "../utils/hooks";

export default ({ onStop }) => {
    const [value, setValue] = useState(0);
    const [isOn, toggleInterval] = useInterval(() => setValue(value + 1), 10);
    const progress = value / ((8 * 60 * 60) / 100);

    const toggleTimer = () => {
        toggleInterval();
        isOn && onStop(value);
    };

    return (
        <Grid container alignItems='center'>
            <Grid item xs>
                <LinearProgress variant='determinate' value={progress}/>
            </Grid>
            <Grid item xs>
                <Button onClick={toggleTimer} data-test='timer-btn'>{isOn ? 'Stop' : 'Start'}</Button>
            </Grid>
        </Grid>
    )
}
