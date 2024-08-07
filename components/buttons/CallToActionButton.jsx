import React from 'react';
import Link from 'next/link';

export default function CallToActionButton({ route, text, openInNewTab }) {
  const linkProps = {
    href: route,
    rel: "noopener",
    className: "flex items-center transition md:justify-center md:hover:scale-105"
  };

  if (openInNewTab) {
    linkProps.target = "_blank";
  }

  return (
    <Link {...linkProps}>
      <div className="flex items-center mt-9">
        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
          <div className="inline-flex items-center justify-center px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
            {text}
          </div>
        </span>
      </div>
    </Link>
  );
}
