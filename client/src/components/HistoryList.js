import React from 'react';
import { Paper, Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export default ({ rows }) =>
    <Paper style={{ width: '100%' }}>
        <Table>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>
                            {row.id}
                        </TableCell>
                        <TableCell>
                            {row.name}
                        </TableCell>
                        <TableCell>
                            {row.description}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>