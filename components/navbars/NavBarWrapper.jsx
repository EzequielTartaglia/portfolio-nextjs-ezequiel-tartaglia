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
    { id: 'professional_experiences', route: '/professional_experiences', text: 'Experiencias profesionales' },
    { id: 'projects', route: '/projects', text: 'Proyectos' },
    { id: 'certifications', route: '/certifications', text: 'Certificaciones' },
  ];

  // Replace it when have login route and feature
  //const loginInfo = { route: '/login', text: 'Acceder' };
  //return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems} loginInfo={loginInfo}/>;

  return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems}/>;
}
