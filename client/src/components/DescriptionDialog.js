import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default ({ open, onClose }) => {
    const [description, updateDescription] = useState('');

    return (
        <Dialog open={open} onClose={onClose} data-test='dialog'>
            <DialogTitle>Add description</DialogTitle>
            <DialogContent>
                <Grid item>
                    <TextField
                        id="standard-name"
                        label="Description"
                        value={description}
                        onChange={ev => updateDescription(ev.target.value)}
                        margin="normal"
                    />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(description)} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};
