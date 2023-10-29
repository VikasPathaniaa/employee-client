import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import ListOfEmployes from './pages/ListOfEmployes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditEmployee from './pages/EditEmployee';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employes" element={<ListOfEmployes/>}/>
        <Route path="/editemployee/:employeeId" element={<EditEmployee />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
