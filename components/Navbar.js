'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4 h-[70px]">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-[30px] font-bold">Shahnawaz</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖️' : '☰'}
        </button>
        <ul className="hidden md:flex space-x-10">
          <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className=" md:hidden mt-4 space-y-6 w-[130px] block m-auto text-center">
          <li className='border-[1px] active:text-yellow-300'><Link href="/">Home</Link></li>
          <li className='border-[1px] active:text-yellow-300' ><Link href="/about">About</Link></li>
          <li className='border-[1px] active:text-yellow-300'><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
