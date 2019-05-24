import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import CalendarEditor from './components/CalendarEditor';
import Timer from './components/Timer';
import DescriptionDialog from "./components/DescriptionDialog";
import { useHistory } from "./utils/hooks";

export default () => {
    const [dialogConf, setDialogConf] = useState({ isOpen: false, timeSpent: null });
    const [list, addRow] = useHistory();
    const openDialog = (timeSpent) => setDialogConf({ isOpen: true, timeSpent });
    const handleDialogClose = (row) => {
        setDialogConf({ ...dialogConf, isOpen: false });

        if (!row)
            return;

        addRow({ id: list.length + 1, ...row });
    };

    return (
        <Grid container style={{ padding: 10 }}>
            <Header/>
            <StatusPanel/>
            <Grid item xs={6}>
                <Timer onStop={openDialog}/>
            </Grid>
            <CalendarEditor rows={list}/>
            <DescriptionDialog open={dialogConf.isOpen}
                               secondsSpent={dialogConf.timeSpent}
                               onClose={handleDialogClose}/>
        </Grid>
    );
}
