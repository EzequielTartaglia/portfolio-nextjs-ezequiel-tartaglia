'use client'

import { useEffect, useState } from "react";

const Alert = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Ocultar la alerta después de 5 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-0 left-0 right-0 bg-${type}-200 p-4 text-${type}-800`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
