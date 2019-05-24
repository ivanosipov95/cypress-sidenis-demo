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
    const [dialogConf, setDialogConf] = useState({ isOpen: false, timeSpent: null });
    const openDialog = (timeSpent) => setDialogConf({ isOpen: true, timeSpent });
    const handleDialogClose = (row) => {
        setDialogConf({ ...dialogConf, isOpen: false });

        if (!row)
            return;

        updateRows([...rows, { id: rows.length + 1, ...row }])
    };

    return (
        <Grid container style={{ padding: 10 }}>
            <Header/>
            <StatusPanel/>
            <Grid item xs={6}>
                <Timer onStop={openDialog}/>
            </Grid>
            <CalendarEditor rows={rows}/>
            <DescriptionDialog open={dialogConf.isOpen}
                               secondsSpent={dialogConf.timeSpent}
                               onClose={handleDialogClose}/>
        </Grid>
    );
}
