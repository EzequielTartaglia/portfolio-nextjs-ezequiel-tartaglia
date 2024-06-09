import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia({ route, image, alt, className }) {
  return (
    <div className={`${className} transition duration-300 transform hover:scale-105`}>
      <Link href={route} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={alt} title={alt} width={30} decoding="async" loading="lazy" />
      </Link>
    </div>
  );
}