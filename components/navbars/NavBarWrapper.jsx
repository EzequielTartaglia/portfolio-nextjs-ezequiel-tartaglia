'use client';

import { usePathname } from 'next/navigation';
import BaseNavBar from './BaseNavBar';

export default function NavBarWrapper() {

  const pathname = usePathname();

  return <NavBar />;
}

export function NavBar() {
  const mainMenu = [
    { id: 'home', route: '/', text: 'Inicio' },
  ];

  const toggleMenuItems = [
    { id: 'home', route: '/', text: 'Inicio' },
    { id: 'certifications', route: '/certifications', text: 'Certificaciones' },
    { id: 'corporate_and_b2b_engagements', route: '/corporate_and_b2b_engagements', text: 'Capacitaciones coorporativas y B2B' },
    { id: 'professional_experiences', route: '/professional_experiences', text: 'Experiencias' },
    { id: 'press', route: '/press', text: 'Prensa y medios' },
    { id: 'projects', route: '/projects', text: 'Proyectos' },
  ];

  // Replace it when have login route and feature
  //const loginInfo = { route: '/login', text: 'Acceder' };
  //return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems} loginInfo={loginInfo}/>;

  return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems}/>;
}
