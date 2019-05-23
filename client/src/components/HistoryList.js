import React from 'react';
import { Paper, Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export default ({ rows }) =>
    <Paper style={{ width: '100%' }}>
        <Table data-test='history-list'>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id} data-test="history-row">
                        <TableCell>
                            {row.id}
                        </TableCell>
                        <TableCell>
                            {row.name}
                        </TableCell>
                        <TableCell data-test="description">
                            {row.description}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>