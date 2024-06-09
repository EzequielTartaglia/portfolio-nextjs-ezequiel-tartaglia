'use client'
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function LiWithTitle({
  title,
  buttonTitle,
  items,
  buttonRouteTitle,
  buttonRoute,
  iconRight = <FiEdit />,
  iconRightTitle,
  titleBackgroundColor = "bg-gray-600",
  textColor = "text-white",
  iconColor = "text-edit-link",
  iconBackgroundColor = "text-edit-link",
}) {
  const [isLoading, setIsLoading] = useState(items.length === 0);
  const hasData = items && items.length > 0;

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className={`shadow-md rounded-lg p-6 mt-4 relative max-w-[640px] sm:max-w-[820px] md:max-w-[1024px] w-full mx-auto bg-primary`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {(buttonRoute && iconRightTitle) && (
          <Link href={buttonRouteTitle}>
            <button
              className={`p-2 rounded-full text-white shadow-md duration-300 hover:-translate-y-1 ${titleBackgroundColor}`}
              title="Administrar"
            >
              {iconRightTitle}
            </button>
          </Link>
        )}
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-16">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 spinner-border border-opacity-50"></div>
        </div>
      ) : (
        <>
          {hasData ? (
            <ul className="list-disc list-inside">
              {items.map((item, index) => (
                <li key={index} className={`flex items-center justify-between rounded-full px-6 py-2 shadow-md transition duration-300 hover:-translate-y-1 hover:${iconBackgroundColor} w-full border-primary mt-4`}>
                  <div className={`flex-grow text-center ${textColor}`}>
                    {item}
                  </div>
                  <Button
                    customClasses={`flex items-center shadow-none ${iconBackgroundColor}`}
                    route={buttonRoute}
                    icon={iconRight}
                    isAnimated={false}
                    title={buttonTitle}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <ul className={`shadow-md rounded-lg p-1 mt-4 relative w-full ${iconBackgroundColor}`}>
              <li className={`text-center py-2 text-center text-gray-500 ${textColor} `}>
                <p>No hay nada para mostrar.</p>
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}
