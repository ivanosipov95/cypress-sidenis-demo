import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import CalendarEditor from './components/CalendarEditor';
import Timer from './components/Timer';
import DescriptionDialog from "./components/DescriptionDialog";

export default () => {
    const [rows, updateRows] = useState([]);
    useEffect(() => {
        fetch('/api/history')
            .then(result => result.json())
            .then(rows => updateRows(rows))
    }, []);
    const [dialogOpened, toggleDialog] = useState(false);
    const openDialog = () => toggleDialog(true);
    const handleDialogClose = (description) => {
        toggleDialog(false);

        if (!description)
            return;

        updateRows([...rows, { id: rows.length + 1, name: 'test', description }])
    };

    return (
        <Grid container style={{ padding: 10 }}>
            <Header/>
            <StatusPanel/>
            <Grid item xs={6}>
                <Timer onStop={openDialog}/>
            </Grid>
            <CalendarEditor rows={rows}/>
            <DescriptionDialog open={dialogOpened} onClose={handleDialogClose}/>
        </Grid>
    );
}
