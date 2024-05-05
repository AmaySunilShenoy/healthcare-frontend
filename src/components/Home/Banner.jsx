import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { GiCherish } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { TbBed } from "react-icons/tb";
import { FaAccessibleIcon, FaAmbulance, FaUserTie } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";

const style = {
  fontSize: '3rem',
  color: '#22577E',
  border: '2px solid #22577E',
  borderRadius: '20%',
  padding: '5px'
}
const InfoList = [
  {
    icon: <GiCherish style={style} />,
    count: 128,
    title: 'Doctors',
    description: '3 doctors joined today'
  },
  {
    icon: <FaAccessibleIcon style={style} />,
    count: 155000,
    title: 'Patients',
    description: '122 new patients admitted'
  },
  {
    icon: <FiUsers style={style} />,
    count: 452,
    title: 'Staffs',
    description: '12 stuffs are on vacation'
  },
  {
    icon: <TbBed style={style} />,
    count: 142,
    title: 'Beds',
    description: '10 bed remaining usable'
  },
  {
    icon: <FaAmbulance style={style} />,
    count: 120,
    title: 'Ambulence',
    description: '19 Ambulence In service'
  },
  {
    icon: <MdPersonPin style={style} />,
    count: 12,
    title: 'Representative',
    description: '6 Representative is active'
  }
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
