import React from "react";
import { LogoLink } from '../components/logo/LogoLink';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { Works } from '../components/works/Works';
import { SideNavbar } from '../components/nav/SideNavbar';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { Hidden } from '@material-ui/core';
import { Footer } from '../components/footer/Footer';
import { NavDial } from '../components/speedDial/NavDial';
export const ProjectsPage = () => {
    return <div>
        <DisplacementSphere />
        <LogoLink />
        <Hidden smDown>
          <SideNavbar />
        </Hidden>
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Hidden mdUp>
          <NavDial />
        </Hidden>
        <Works/>
        <Footer/>
        {/* <Resume /> */}
    </div>;
};
