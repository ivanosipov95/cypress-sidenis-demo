import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import CalendarEditor from './components/CalendarEditor';
import Timer from './components/Timer';
import DescriptionDialog from "./components/DescriptionDialog";
import { useBalance, useHistory } from "./utils/hooks";
import Balance from "./components/Balance";

export default () => {
    const [dialogConf, setDialogConf] = useState({ isOpen: false, timeSpent: null });
    const [list, addRow] = useHistory();
    const balance = useBalance();
    const openDialog = (timeSpent) => setDialogConf({ isOpen: true, timeSpent });
    const handleDialogClose = (row) => {
        setDialogConf({ ...dialogConf, isOpen: false });

        if (!row)
            return;

        addRow({ id: list.length + 1, ...row });
    };

    return (
        <Grid container style={styles.root}>
            <Header style={styles.header}/>
            <StatusPanel/>
            <Grid container justify='space-between'>
                <Grid item xs={6}>
                    <Timer onStop={openDialog}/>
                </Grid>
                {/*<Grid item>*/}
                    {/*<Balance total={balance.total} lastWeek={balance.lastWeek}/>*/}
                {/*</Grid>*/}
            </Grid>
            <CalendarEditor rows={list} style={styles.calendar}/>
            <DescriptionDialog open={dialogConf.isOpen}
                               secondsSpent={dialogConf.timeSpent}
                               onClose={handleDialogClose}/>
        </Grid>
    );
}

const styles = {
    root: { padding: 10 },
    header: { margin: '10px 0' },
    calendar: { marginTop: 20 }
};
