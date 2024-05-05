import * as React from 'react';

import { Box } from '@mui/material';

import Header from '../../components/Dashboard/Header';
import Sidebar from '../../components/Dashboard/Sidebar';
import MainContent from '../../components/Dashboard/MainContent';

export default function NewHeader() {
    const [open, setOpen] = React.useState(true);
    const [openInbox, setOpenInbox] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpenInbox(!openInbox);
    };
    // User login check
    // const {user} = useAuth();
    // const getTv = () => {
    //     fetch("https://iptv-org.github.io/iptv/countries/br.m3u")
    //         .then(response => response.text())
    //         .then(data => {
    //             let channels = [];
    //             let lines = data.split("\n");
    //             let currentChannel = {};
    //             for (let i = 0; i < lines.length; i++) {
    //                 let line = lines[i].trim();

    //                 if (line.startsWith("#EXTINF:")) {
    //                     let info = line.split(/,(.+)/);
    //                     currentChannel["name"] = info[1];
    //                     currentChannel["logo"] = info[0].match(/tvg-logo="(.*?)"/)[1];
    //                 } else if (line.startsWith("http")) {
    //                     currentChannel["url"] = line;
    //                     channels.push(currentChannel);
    //                     currentChannel = {};
    //                 }
    //             }

    //             console.log(channels);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }
    // getTv();

    return (
        <Box sx={
            {
                display: 'flex',
                background: '#F6F6F6',
            }
        }>
            <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            <Sidebar openDrawer={open} handleDrawerClose={handleDrawerClose} />
            <MainContent open={open} />
        </Box>
    );
}
