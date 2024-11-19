import { useEffect, useRef, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import logo from "../assets/logo1.jpeg";

function NavBar({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<SVGSVGElement>(null); // Ref for the close button

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    scrollToSection(id);
    setMenuOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      closeButtonRef.current &&
      !closeButtonRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className='h-20 bg-white shadow w-full fixed top-0 left-0 z-50'>
      <div className='container mx-auto px-4 flex items-center justify-between h-full'>
        {/* Logo */}
        <div>
          <a href='/'>
            <img src={logo} alt='logo' className='h-16 object-contain' />
          </a>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <div className='hidden md:flex font-light justify-center gap-5 items-center'>
          <button
            onClick={() => handleLinkClick("home")}
            className={`${
              activeLink === "home" ? "text-blue-500" : "text-gray-500"
            }`}>
            Home
          </button>
          <button
            onClick={() => handleLinkClick("about")}
            className={`${
              activeLink === "about" ? "text-blue-500" : "text-gray-500"
            }`}>
            Shop
          </button>
          <button
            onClick={() => handleLinkClick("contact")}
            className={`${
              activeLink === "contact" ? "text-blue-500" : "text-gray-500"
            }`}>
            Contact
          </button>
        </div>

        {/* Nav Icons */}
        <div className='flex items-center md:justify-normal justify-end md:pr-0 pr-3 w-full md:w-auto md:space-x-6 space-x-2'>
          <button>
            <IoIosSearch className='text-2xl' />
          </button>
          <a
            href='/'
            className='md:flex items-center space-x-2 text-gray-600 hover:text-blue-600'>
            <HiOutlineUserCircle className='text-2xl' />
          </a>
          <a
            href='/'
            className='flex items-center space-x-2 text-gray-600 hover:text-blue-600'>
            <HiOutlineShoppingCart className='text-2xl' />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className='md:hidden'>
          <button
            className='text-2xl z-50 text-gray-600'
            onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
                ref={closeButtonRef} // Attach ref to the close button
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className='bg-white shadow-md md:hidden absolute top-20 h-screen right-0 w-1/2 z-40'>
          <div className='flex flex-col items-start py-4 space-y-4'>
            <button
              onClick={() => handleLinkClick("home")}
              className={`w-full ${
                activeLink === "home"
                  ? "text-white bg-blue-500 p-2 w-full text-left"
                  : "text-gray-500 p-2 text-left"
              }`}>
              Home
            </button>
            <button
              onClick={() => handleLinkClick("about")}
              className={`w-full ${
                activeLink === "about"
                  ? "text-white bg-blue-500 p-2 w-full text-left"
                  : "text-gray-500 p-2 text-left"
              }`}>
              Shop
            </button>
            <button
              onClick={() => handleLinkClick("contact")}
              className={`w-full ${
                activeLink === "contact"
                  ? "text-white bg-blue-500 p-2 w-full text-left"
                  : "text-gray-500 p-2 text-left"
              }`}>
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
