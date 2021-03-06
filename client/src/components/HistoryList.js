import React from 'react';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { formatTime } from "../utils/time";

export default ({ rows }) =>
    <Paper style={{ width: '100%' }}>
        <Table data-test='history-list'>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id} data-test="history-row">
                        <TableCell>
                            {row.id}
                        </TableCell>
                        <TableCell>
                            {formatTime(row.time)}
                        </TableCell>
                        <TableCell data-test="description">
                            {row.description}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>