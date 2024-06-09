import { useState } from "react";
import { FiEye, FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import ConfirmModal from "../ConfirmModal";
import Link from "next/link";

export default function List({
  list,
  buttonShowRoute = null,
  buttonEditRoute = null,
  buttonDeleteRoute = null,
  buttonAddRoute = null,
  columnName = "name",
  confirmModalText,
  hasShow = true,
  hasEdit = true,
  hasDelete = true,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleDelete = (id) => {
    setCurrentId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (buttonDeleteRoute) {
      buttonDeleteRoute(currentId);
    }
    setIsModalOpen(false);
    setCurrentId(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentId(null);
  };

  const sortedList = list.sort((a, b) => {
    const aValue = a[columnName] || "";
    const bValue = b[columnName] || "";
    return aValue.localeCompare(bValue);
  });

  return (
    <>
      <div className="relative">
        {buttonAddRoute && (
          <Link href={buttonAddRoute}>
            <button
              className="p-2 rounded-full bg-secondary text-white shadow-md transition-transform duration-300 hover:-translate-y-1 absolute top-0 right-0 mt-2 mr-2"
              title="Agregar"
            >
              <FiPlus size={20} />
            </button>
          </Link>
        )}
        <ul className="flex flex-col gap-5 text-white list-none p-0 w-full">
          {sortedList.map((item) => (
            <li
              key={item.id}
              className="bg-primary rounded-full px-6 py-3 shadow-md transition duration-300 hover:-translate-y-1 bg-secondary w-full border-primary relative"
            >
              <div className="truncate pr-16">
                {item[columnName]}
              </div>
              <div className="flex items-center space-x-2 absolute top-1/2 transform -translate-y-1/2 right-4">
                {hasShow && (
                  <Link href={buttonShowRoute(item.id)} className="ml-2">
                    <FiEye className="text-show-link" />
                  </Link>
                )}
                {hasEdit && (
                  <Link href={buttonEditRoute(item.id)} className="ml-2">
                    <FiEdit className="text-edit-link" />
                  </Link>
                )}
                {hasDelete && (
                  <button onClick={() => handleDelete(item.id)} className="ml-2">
                    <FiTrash2 className="text-delete-link" />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message={confirmModalText}
      />
    </>
  );
}
