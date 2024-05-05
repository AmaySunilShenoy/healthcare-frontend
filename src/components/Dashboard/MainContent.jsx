import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function MainContent({ open }) {
    return (
        <Box sx={{ display: 'flex', background: '#F6F6F6', marginTop: '100px', width: '100%' }} >
            <Container maxWidth='lg'>
                {/* Your Main Content */}
                <Outlet />
            </Container>
        </Box>
    );
}
