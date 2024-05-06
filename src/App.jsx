import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Staffs from "./Pages/Staffs/Staffs";
import Appointment from "./Pages/Appointments/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddDoctor from "./Pages/Doctors/AddDoctor/AddDoctor";
import Registration from "./Pages/Login/Registration/Registration";
import PatientViewDoctor from "./Pages/Doctors/Doctors/PatientViewDoctor";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ViewDoctors from "./Pages/Patients/ViewDoctors/ViewDoctors";
import DeleteDoctor from "./Pages/Doctors/DeleteDoctor/DeleteDoctor";
import FindDoctor from "./Pages/Doctors/UpdateDoctor/FindDoctor";
import AddPatient from "./Pages/Patients/AddPatients/AddPatient";
import Patients from "./Pages/Patients/Patients/Patients";
import PatientDetails from "./Pages/Patients/PatientsDetails/PatientDetails";
import ApproveDoctor from "./Pages/Doctors/ApproveDoctor/ApproveDoctor";
import PublicRoute from "./Pages/PublicRoute/PublicRoute";
import AppointmentsTable from "./Pages/Appointments/AppointmentTable";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator} from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
    <div className="App">
      {/* <AuthProvider>

      </AuthProvider> */}

      <Router>
        <Routes>
          
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          
          {/* NESTED ROUTING APPLIED */}
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<Dashboard signOut={signOut}/>} >
            <Route index element={<Home></Home>} />
            <Route path="doctors" element={<PatientViewDoctor />} />
            <Route path="addDoctor" element={<AddDoctor />} />
            <Route path="approveDoctor" element={<ApproveDoctor />} />
            <Route path="appointments" element={<AppointmentsTable />} />
              <Route path="/appointments/create" element={<AddPatient />} />
              <Route path="/appointments/upcoming" element={<AppointmentsTable />} />
              <Route path="/appointments/history" element={<AddPatient />} />
            <Route path="deleteDoctor" element={<DeleteDoctor />} />
            <Route path="updateDoctor" element={<FindDoctor />} />
            <Route path="patients" element={<Patients />} />
            <Route path="addPatient" element={<AddPatient />}>
              <Route path=":email" element={<AddPatient />} />
            </Route>
            <Route path="viewDoctors" element={<ViewDoctors />} />
            <Route path="patientDetails/:id" element={<PatientDetails />} />
            <Route path="staffs" element={<Staffs />} />
            <Route path="appointment" element={<Appointment />}>
              <Route path=":email" element={<Appointment />} />
            </Route>
            {/* <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
    )}
    </Authenticator>
  );
}

export default App;
