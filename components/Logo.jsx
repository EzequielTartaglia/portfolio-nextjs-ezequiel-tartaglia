import Link from 'next/link';
import Image from 'next/image';
import logoSvg from '@/public/logo.png';

export default function Logo({ isFooter = false }) {
  return (
    <Link href="/">
      {isFooter
        ? <Image alt="Bohemian" title="Bohemian" loading="lazy" width="200" height="" decoding="async" src={logoSvg} />
        : <Image alt="Bohemian" title="Bohemian" loading="lazy" width="70" height="" decoding="async" src={logoSvg} />
      }
    </Link>
  );
}