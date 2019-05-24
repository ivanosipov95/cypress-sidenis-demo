import React from 'react'

export default () =>
    <div style={{ fontSize: '1.7em', marginBottom: 25 }} data-test='date'>
        {new Date().toDateString()}
    </div>