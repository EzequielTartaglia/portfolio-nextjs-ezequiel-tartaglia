'use client';

import { usePathname } from 'next/navigation';

import BaseFooter from './BaseFooter';

export default function FooterWrapper() {
  const pathname = usePathname();


  return <Footer />;
}

export function Footer() {
  const items = [
    { route: '/', text: 'Inicio' },
    { route: '/professional_experiences', text: 'Experiencias profesionales' },
    { route: '/projects', text: 'Proyectos' },
    { route: '/certifications', text: 'Certificaciones' },

  ];

  return <BaseFooter items={items} />;
}
