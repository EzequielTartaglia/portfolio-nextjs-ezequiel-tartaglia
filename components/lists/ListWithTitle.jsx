'use client'

import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import List from "./List";
import { useEffect, useState } from "react";

export default function ListWithTitle({
  title,
  items,
  columnName = "name",
  buttonShowRoute,
  buttonEditRoute,
  buttonDeleteRoute,
  buttonAddRoute,
  confirmModalText,
  hasShow = true,
  hasEdit = true,
  hasDelete = true,
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
    <div className="shadow-md rounded-lg p-6 bg-primary mt-4 relative max-w-[640px] sm:max-w-[820px] md:max-w-[1024px] w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {buttonAddRoute && (
          <Link href={buttonAddRoute}>
            <button
              className="p-2 rounded-full primary-button-success text-white shadow-md transition-transform duration-300 hover:-translate-y-1"
              title="Agregar"
            >
              <FiPlus size={20} />
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
            <List
              list={items}
              columnName={columnName}
              buttonShowRoute={buttonShowRoute}
              buttonEditRoute={buttonEditRoute}
              buttonDeleteRoute={buttonDeleteRoute}
              confirmModalText={confirmModalText}
              hasShow={hasShow}
              hasEdit={hasEdit}
              hasDelete={hasDelete}
            />
          ) : (
            <ul className="shadow-md rounded-lg p-1 bg-primary mt-4 relative w-full bg-secondary">
              <li className="text-center py-2 text-center text-gray-500">
                <p>No hay nada para mostrar.</p>
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}
