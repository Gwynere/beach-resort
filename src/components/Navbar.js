import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Container>
                        <Box flexGrow={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="h4" align="right">
                                Beach Resort
                            </Typography>
                            <Box >
                                <Button color="inherit" component={Link} to="/">
                                    home
                                </Button>
                                <Button color="inherit" component={Link} to="/rooms">
                                    rooms
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        )
    }
}