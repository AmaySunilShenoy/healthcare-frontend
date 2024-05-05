import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Collapse } from '@mui/material';
import { Toolbar, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

// import your icons
import { FcHome } from 'react-icons/fc';
import { FaUserNurse } from 'react-icons/fa';
import { BsCardChecklist, BsPersonLinesFill } from 'react-icons/bs';
import { MdOutlinePersonAddAlt, MdOutlinePersonRemoveAlt1, MdOutlinePersonSearch } from 'react-icons/md';
import { TbBed } from 'react-icons/tb';
import { FaRunning } from 'react-icons/fa';
import { FaMandalorian } from 'react-icons/fa';

// const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: 240,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//             width: 240,
//             boxSizing: 'border-box',
//         },
//     }),
// );

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const SidebarOption = ({ to, icon, text, nested }) => {
    const [open, setOpen] = useState(false); // Define 'open' state here

    const handleCollapseToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <NavLink to={to} style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                <ListItem disablePadding onClick={nested ? handleCollapseToggle : null}>
                    <ListItemButton style={{ borderRadius: '0 40px 40px 0' }}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            </NavLink>
            {nested && ( // Render nested items conditionally
                <Collapse in={open} timeout='auto' unmountOnExit>
                    {nested.map((item, index) => (
                        <NavLink key={index} to={item.to} style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ pl: 8 }}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    ))}
                </Collapse>
            )}
        </>
    );
};


const SidebarInfo = [
    {
        to: '/',
        icon: <FcHome style={{ color: '#000', fontSize: '1.5rem' }} />,
        text: 'Overview',
    },
    {
        to: '/doctors',
        icon: <FaUserNurse style={{ color: '#000', fontSize: '1.5rem', marginRight: '1rem' }} />,
        text: 'Doctors',
        nested: [
            {
                to: '/appointment',
                icon: <BsCardChecklist style={{ color: '#000', fontSize: '1.3rem' }} />,
                text: 'Appointment',
            },
            {
                to: '/approveDoctor',
                icon: <BsPersonLinesFill style={{ color: '#000', fontSize: '1.4rem' }} />,
                text: 'Approval',
            },
            {
                to: '/addDoctor',
                icon: <MdOutlinePersonAddAlt style={{ color: '#000', fontSize: '1.4rem' }} />,
                text: 'Add Doctor',
            },
            {
                to: '/deleteDoctor',
                icon: <MdOutlinePersonRemoveAlt1 style={{ color: '#000', fontSize: '1.4rem' }} />,
                text: 'Delete Doctor',
            },
            {
                to: '/updateDoctor',
                icon: <MdOutlinePersonSearch style={{ color: '#000', fontSize: '1.4rem' }} />,
                text: 'Find Doctor',
            },
        ]
    },
    {
        to: '#',
        icon: <TbBed style={{ color: '#000', fontSize: '1.5rem' }} />,
        text: 'Patients',
        nested: [
            {
                to: '/patients',
                icon: <BsCardChecklist style={{ color: '#000', fontSize: '1.3rem' }} />,
                text: 'Patient List',
            },
            {
                to: '/viewDoctors',
                icon: <MdOutlinePersonAddAlt style={{ color: '#000', fontSize: '1.4rem' }} />,
                text: 'Add Patient',
            },
        ]
    },
    {
        to: '/Staffs',
        icon: <FaRunning style={{ color: '#000', fontSize: '1.5rem' }} />,
        text: 'Staffs',
    },
    {
        to: '/login',
        icon: <FaRunning style={{ color: '#000', fontSize: '1.5rem' }} />,
        text: 'Login',
    },
]

export default function Sidebar({ openDrawer, handleDrawerClose }) {
    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    flexShrink: 0,
                },
            }}
            variant="persistent"
            anchor="left"
            open={openDrawer}
        >
            <DrawerHeader sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Toolbar style={{ color: '#000' }}>
                        <Typography variant="h6" noWrap> SmartCare </Typography>
                        <FaMandalorian style={{ fontSize: '1.5rem', marginLeft: '20px' }} />
                    </Toolbar>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {/* Links for routing */}
                <List>
                    {SidebarInfo.map((item, index) =>{ 
                        return (
                            <SidebarOption key={index} to={item.to} icon={item.icon} text={item.text} nested={item.nested}/>
                    )})}
                </List>
        </Drawer>
    );
}
