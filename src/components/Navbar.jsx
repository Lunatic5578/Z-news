import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({setCategory}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#003366] bg-gradient-to-br from-[#003366] to-[#242124] text-white shadow-lg p-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={()=>{setCategory("general")}} className="w-full px-6 py-4 logo font-bold">
              ZNews
            </button>
          </div>

          {/* Desktop Menu - Corrected underline removal */}
          <div className="hidden md:flex space-x-4 ">
            <button
              onClick={()=>{setCategory("technology")}}
              className="cursor-pointer no-underline hover:no-underline text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Technology
            </button>
            <button
              onClick={()=>{setCategory("sports")}}
              className="cursor-pointer no-underline hover:no-underline text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Sports
            </button>
            <button
             onClick={()=>{setCategory("health")}}
              className="cursor-pointer no-underline hover:no-underline text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Health
            </button>
            <button
              onClick={()=>{setCategory("business")}}
              className="cursor-pointer no-underline hover:no-underline text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Business
            </button>
            <button
              onClick={()=>{setCategory("entertainment")}}
              className="cursor-pointer no-underline hover:no-underline text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Entertainment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Corrected underline removal */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={()=>{setCategory("technology")}}
              className="cursor-pointer no-underline hover:no-underline text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Technology
            </button>
            <button
              onClick={()=>{setCategory("sports")}}
              className="cursor-pointer no-underline hover:no-underline text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Sports
            </button>
            <button
              onClick={()=>{setCategory("health")}}
              className="cursor-pointer no-underline hover:no-underline text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Health
            </button>
            <button
              onClick={()=>{setCategory("business")}}
              className="cursor-pointer no-underline hover:no-underline text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Business
            </button>
            <button
              onClick={()=>{setCategory("entertainment")}}
              className="cursor-pointer no-underline hover:no-underline text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Entertainment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;