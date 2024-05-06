import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { GiCherish } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { TbBed } from "react-icons/tb";
import { FaAccessibleIcon, FaAmbulance, FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner, MdPersonPin } from "react-icons/md";

const style = {
  fontSize: '3rem',
  color: '#22577E',
  border: '2px solid #22577E',
  borderRadius: '20%',
  padding: '5px'
}
const InfoList = [
  {
    icon: <MdOutlineDocumentScanner style={style} />,
    count: 0,
    title: 'Documents',
    description: ''
  },
  {
    icon: <GiCherish style={style} />,
    count: 155,
    title: 'Available Doctors',
    description: ''
  },
  {
    icon: <FiUsers style={style} />,
    count: 0,
    title: 'Upcoming Appointments',
    description: ''
  },
];

const BannerItem = ({ icon, count, title, description }) => (
  <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <div>
        {icon}
      </div>
      <div>
        <Typography sx={{ fontWeight: '800' }}>{count}</Typography>
        <p>{title}</p>
      </div>
    </Box>
    <Typography>
      {description}
    </Typography>
  </Paper>
);

const Banner = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent : {xs:'center', sm:'center', md:'space-around', lg:'space-around', xl:'center'},
      alignItems: 'center',
      gap: '1rem 2.6rem',
      flexWrap: 'wrap',
      width: '100%',
      fontFamily:'monospace' 
    }}>
      {InfoList.map((item, index) => (
        <BannerItem
          key={index}
          icon={item.icon}
          count={item.count}
          title={item.title}
          description={item.description}
        />
      ))}
    </Box>
  );
}

export default Banner;
