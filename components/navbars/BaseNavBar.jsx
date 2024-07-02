'use client'

import { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import Button from "../Button";
import Logo from "../Logo";
import SubMenu from "./Submenu";
import { FiChevronDown } from "react-icons/fi";
import { useAside } from "@/contexts/AsideContext";

export default function BaseNavBar({ mainMenu, toggleMenuItems }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const { isAsideOpen, toggleAside, closeAside } = useAside();

  const toggleSubMenu = (id) => {
    setActiveSubMenu((prevSubMenu) => (prevSubMenu === id ? null : id));
  };

  return (
    <div className="header">
      <nav className="bg-gray-800 p-2 flex items-center justify-between">
        <div className="p-2 ml-3">
          {/* Space to logo */}
        </div>
        <div className="flex items-center space-x-4">
          {mainMenu.map((item) => (
            <Button
              key={item.id}
              route={item.route}
              text={item.text}
              customClasses="block text-primary shadow-none py-2 px-4 text-title hover:bg-gold hover:text-primary"
            />
          ))}
          <button
            id="hamburger-btn"
            className="text-primary focus:outline-none text-title px-3 py-2"
            onClick={toggleAside}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isAsideOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeAside}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-90 z-20 transition-transform transform ${
          isAsideOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/5 lg:w-2/6`}
      >
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-center items-center p-4">
               {/* Space to logo */}
              <button
                className="text-primary focus:outline-none text-title px-3 py-2 absolute right-0 top-0"
                onClick={closeAside}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {toggleMenuItems.map((item) => (
                <div key={item.id} className="relative">
                  <Button
                    route={item.route}
                    text={item.text}
                    icon={item.subMenu && <FiChevronDown />}
                    customClasses="block text-primary py-2 px-4 shadow-none text-title border-none hover:bg-gold hover:text-primary"
                    customFunction={() => toggleSubMenu(item.id)}
                  />
                  {item.subMenu && (
                    <SubMenu
                      subMenuItems={item.subMenu}
                      isVisible={activeSubMenu === item.id}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
