"use client";

import { useState } from "react";
import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import siteLogo from "../images/site-logo.png";
import { navData } from "../utils/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const {
    announcement,
    menuItems,
    searchPlaceholder,
    getStartedText,
    getStartedLink,
  } = navData[0];

  const toggleSubMenu = (index: string) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="bg-purple-800 text-white text-xs py-1 text-center">
        {announcement.text}{" "}
        <Link href={announcement.ctaLink} className="underline">
          {announcement.ctaText}
        </Link>
      </div>

      <Wrapper>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <Image src={siteLogo} alt="Logo" width={100} height={100} />
              </div>
            </Link>

            <nav className="hidden md:ml-8 md:flex md:space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.link ?? ""}
                    className="text-gray-700 hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="bg-orange-100 rounded-md py-2 pl-10 pr-4 w-40 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Link
              href={getStartedLink}
              className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
            >
              {getStartedText}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 md:hidden"
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="bg-gray-100 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <div key={index} className="text-gray-700">
                  <Link
                    href={item.link ?? ""}
                    className="block text-gray-700 hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        )}
      </Wrapper>
      <div className="bg-orange-500 w-full mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-2">
          Home → <strong>Corporate</strong>
        </div>
      </div>
    </header>
  );
}
