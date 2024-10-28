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
        <main>
          <Outlet />
        </main>
        <BackToTopButton />
        <ScrollToTop />
        <Footers />
    </div>
  );
};

export default Layout;