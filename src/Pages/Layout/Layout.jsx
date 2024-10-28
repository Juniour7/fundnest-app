import React from 'react';
import { Outlet } from 'react-router-dom';

//components
import NavMenu from '../../Components/NavBar/NavMenu/NavMenu';
import Footers from '../../Components/Footer/Footers';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import BackToTopButton from '../../Components/HomComponents/BackToTop';

const Layout = () => {
  return (
    <div>
        <NavMenu />
        <main className='mt-[4.063rem] lg:mt-[6.25rem]'>
          <Outlet />
        </main>
        <BackToTopButton />
        <ScrollToTop />
        <Footers />
    </div>
  );
};

export default Layout;