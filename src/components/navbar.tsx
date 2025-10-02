import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

// Define interfaces for navigation items
interface NavItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
}

interface SubmenuItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState<boolean>(false);

  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about', hasSubmenu: true },
    { name: 'Blog', href: '/blog' },
    { name: 'News & Events', href: '/news' },
    { name: 'Our Story', href: '/story' },
    { name: 'Contact', href: '/contact' },
  ];

  const aboutSubmenu: SubmenuItem[] = [
    { name: 'NEF Panel', href: '/about/panel' },
    { name: 'Ethics and Codes', href: '/about/ethics' },
  ];

  return (
    <nav className="bg-[#3c3c3c] h-[100px] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full overflow-hidden">
              <img
                src="/logo.JPG"
                alt="NEF Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">NEF</h1>
              <p className="text-sm text-green-100">National Environmental Forum</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className="text-white hover:text-green-200 px-4 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-1"
                    onMouseEnter={() => item.hasSubmenu && setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => item.hasSubmenu && setIsAboutDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                  {item.hasSubmenu && isAboutDropdownOpen && (
                    <div
                      className="w-[200px] absolute top-full left-0 bg-white shadow-lg py-2"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      {aboutSubmenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-green-100 transition-colors"
                          onClick={() => setIsAboutDropdownOpen(false)} // Close dropdown on click
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200 p-3 rounded-md"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900/95 backdrop-blur-sm">
            <div className="px-4 pt-4 pb-3 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white hover:text-green-200 block px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:bg-green-600/30"
                    onClick={() => (item.hasSubmenu ? null : setIsMenuOpen(false))}
                  >
                    <span>{item.name}</span>
                  </Link>
                  {item.hasSubmenu && (
                    <div className="pl-6 space-y-1">
                      {aboutSubmenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-white hover:text-green-200 block px-4 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-green-600/30"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;