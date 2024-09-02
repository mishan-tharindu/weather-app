// components/NavBar.js

"use client";  // This marks the component as a Client Component
import '@/styles/globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo Image */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="assets/images/logo.svg" width={45} height={45} alt="Logo" className="h-10 w-10 rounded-full cursor-pointer" />
            </Link>
          </div>

          {/* Center: Menu Items */}
          <div className="flex-1 flex justify-center">
            <div className="space-x-8 text-lg font-semibold">
              <Link href="/menu-item-01" className="hover:text-red-500">Menu-item-01</Link>
              <Link href="/menu-item-02" className="hover:text-red-500">Menu-item-02</Link>
              <Link href="/menu-item-03" className="hover:text-red-500">Menu-item-03</Link>
              <Link href="/menu-item-04" className="hover:text-red-500">Menu-item-04</Link>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0">
            <Link href="/profile">
              <img src="assets/images/logo.svg" width={35} height={35} alt="Profile" className="h-10 w-10 rounded-full cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
