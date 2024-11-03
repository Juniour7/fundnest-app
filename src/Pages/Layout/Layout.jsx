import React from 'react';
import { Outlet, useLocation  } from 'react-router-dom';

//components
import NavMenu from '../../Components/NavBar/NavMenu/NavMenu';
import Footers from '../../Components/Footer/Footers';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import MailingList from '../../Components/HomComponents/MailingList';
import Holders from '../../Components/HomComponents/Holders';
import BackToTopButton from '../../Components/HomComponents/BackToTop';


const Layout = () => {
  const location = useLocation();
  const showHolders = ["/", "/about-us", "/contact-us"].includes(location.pathname);

  return (
    <div>
        <NavMenu />
        <main className='mt-[4.063rem] lg:mt-[6.25rem]'>
          <Outlet />
        </main>
        <BackToTopButton />
        <ScrollToTop />
        <MailingList />
        {showHolders && <Holders />}
        <Footers />
    </div>
  );
};

export default Layout;