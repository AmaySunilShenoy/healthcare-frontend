import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { BsPencil } from 'react-icons/bs';
import { CancelPresentation, CancelRounded } from '@mui/icons-material';
import { instance } from '../../constants/axios';

const AppointmentsTable = () => {
    const [appointments, setAppointments] = React.useState([]);

    useEffect(() => {
        instance.get('/appointment').then((response) => {
            setAppointments(response.data);
            }).catch((error) => {
            console.error(`Error fetching appointments: ${error}`);
        }
        );
    }, []);

    const dummyAppointments = [
        {
          date: '2024-05-10',
          time: '10:00 AM',
          appointmentType: 'General Checkup',
          doctor: 'Dr. Smith',
        },
        {
          date: '2024-05-15',
          time: '02:30 PM',
          appointmentType: 'Dental Cleaning',
          doctor: 'Dr. Johnson',
        },
        {
          date: '2024-05-20',
          time: '11:15 AM',
          appointmentType: 'Eye Exam',
          doctor: 'Dr. Brown',
        },
      ];

      const handleEdit = (appointment) => {
        // Add your edit logic here
        console.log(`Editing appointment: ${JSON.stringify(appointment)}`);
      };
      
      const handleCancel = (appointment) => {
        // Add your cancel logic here
        console.log(`Cancelling appointment: ${JSON.stringify(appointment)}`);
      };

      return (
        <>
          {appointments.length > 0 ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Appointment Type</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.appointmentType}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell sx={{ margin: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <BsPencil />
                        <CancelPresentation />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div>
              <h3>No appointments found</h3>
            </div>
          )}
        </>
      );
};

export default AppointmentsTable;
