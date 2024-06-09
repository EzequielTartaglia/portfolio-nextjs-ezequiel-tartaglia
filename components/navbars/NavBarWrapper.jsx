'use client';

import { usePathname } from 'next/navigation';
import BaseNavBar from './BaseNavBar';
import { useUserInfoContext } from "@/contexts/UserInfoContext";

export default function NavBarWrapper() {
  const { user } = useUserInfoContext();

  const pathname = usePathname();
  const isPlatformRoute = pathname && pathname.includes('/platform');

  return isPlatformRoute ? <NavBarPlataform isLoggedIn={!!user} /> : <NavBar />;
}

export function NavBar() {
  const mainMenu = [
    { id: 'home', route: '/', text: 'Inicio' },
  ];

  const toggleMenuItems = [
    { id: 'home', route: '/', text: 'Inicio' },
    { id: 'platform', route: '/platform', text: 'Plataforma' }
  ];

  // Replace it when have login route and feature
  //const loginInfo = { route: '/login', text: 'Acceder' };
  //return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems} loginInfo={loginInfo}/>;

  return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems}/>;
}

export function NavBarPlataform({ isLoggedIn }) {
  const mainMenu = [
    { id: 'home', route: '/', text: 'Inicio' },
    { id: 'platform', route: '/platform', text: 'Plataforma' }
  ];

  const toggleMenuItems = [
    { id: 'home', route: '/', text: 'Inicio' },
    { id: 'platform', route: '/platform', text: 'Plataforma' },
  ];

  if (isLoggedIn) {
    toggleMenuItems.push({
      id: 'courses',
      route: '#',
      text: 'Cursos',
      subMenu: [
        { id: 'courses_list', route: '/platform/courses', text: 'Listado de cursos' },
        { id: 'course_formats', route: '/platform/course_formats', text: 'Formatos' },
        { id: 'course_platform_tools', route: '/platform/course_platform_tools', text: 'Herramientas' }
      ]
    });
  }

  const loginInfo = { route: '/platform/login', text: 'Acceder a la plataforma' };

  return <BaseNavBar mainMenu={mainMenu} toggleMenuItems={toggleMenuItems} loginInfo={isLoggedIn ? null : loginInfo}/>;
}