import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }: any) => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;
