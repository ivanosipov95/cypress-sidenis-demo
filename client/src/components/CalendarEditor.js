import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const rows = [
    { id: 1, name: 'test', description: 'hello world' },
    { id: 2, name: 'test', description: 'hello world' },
    { id: 3, name: 'test', description: 'hello world' },
    { id: 4, name: 'test', description: 'hello world' },
];

export default () =>
    <Grid container>
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
    </Grid>
