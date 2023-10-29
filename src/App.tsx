import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import ListOfEmployes from './pages/ListOfEmployes';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employes" element={<ListOfEmployes/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
