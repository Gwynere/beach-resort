import React from 'react';
import {
    Container
} from '@material-ui/core';

export default function Hero({ children, hero}) {
    return (
        <Container component="header">
            {children}
        </Container>
    )
}
