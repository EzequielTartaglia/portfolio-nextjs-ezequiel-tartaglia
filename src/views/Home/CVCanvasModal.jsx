import { useEffect } from 'react';

export default function CVCanvasModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 max-h-screen">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &#x2715;
        </button>
        <div className="relative w-full h-0 mt-4 pt-[141.4286%] overflow-hidden rounded-lg will-change-transform">
          <iframe
            loading="lazy"
            className="absolute w-full h-full top-0 left-0 border-none"
            src="https://www.canva.com/design/DAF6F9lfx-0/GHvCNjtJuwlD3zLQXVQk8g/view?embed"
            allowFullScreen
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAF6F9lfx-0/GHvCNjtJuwlD3zLQXVQk8g/view?utm_content=DAF6F9lfx-0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-teal-500 hover:text-teal-700"
        >
        </a>
      </div>
    </div>
  );
}
