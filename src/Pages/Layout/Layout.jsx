import React from 'react';
import { Outlet } from 'react-router-dom';

//components
import NavMenu from '../../Components/NavBar/NavMenu/NavMenu';
import Footers from '../../Components/Footer/Footers';
import BackToTopButton from '../../Components/HomComponents/BackToTop';

const Layout = () => {
  return (
    <div>
        <NavMenu />
        <main>
            <Outlet />
        </main>
        <BackToTopButton />
        <Footers />
    </div>
  );
};

export default Layout;