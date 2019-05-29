import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { formatTime } from "../utils/time";

export default ({ secondsSpent, open, onClose }) => {
    const [description, updateDescription] = useState('');

    return (
        <Dialog open={open} onClose={() => onClose()} data-test='dialog'>
            <DialogTitle>Add a description</DialogTitle>
            <DialogContent>
                <Grid item>
                    Time spent: {formatTime(secondsSpent)}
                </Grid>
                <Grid item>
                    <TextField
                        id="standard-name"
                        label="Description"
                        value={description}
                        onChange={ev => updateDescription(ev.target.value)}
                        margin="normal"
                        data-test='input'
                    />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose({ time: secondsSpent, description })}
                        color="primary"
                        autoFocus
                        data-test='accept'>
                    Accept
                </Button>

                <Button onClick={() => onClose()}
                        color="primary"
                        autoFocus
                        data-test='reject'>
                    Reject
                </Button>
            </DialogActions>
        </Dialog>
    );
};
