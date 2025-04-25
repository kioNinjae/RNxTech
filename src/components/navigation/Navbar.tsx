import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ShoppingCart, User, Search, Heart, 
  Sun, Moon, ChevronDown, Home, Smartphone, Laptop, Headphones, Watch, Camera, Zap
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const categories = [
    { name: 'Laptops', path: '/category/laptops', icon: <Laptop className="mr-2 h-5 w-5" /> },
    { name: 'Smartphones', path: '/category/smartphones', icon: <Smartphone className="mr-2 h-5 w-5" /> },
    { name: 'Headphones', path: '/category/headphones', icon: <Headphones className="mr-2 h-5 w-5" /> },
    { name: 'Smartwatches', path: '/category/smartwatches', icon: <Watch className="mr-2 h-5 w-5" /> },
    { name: 'Cameras', path: '/category/cameras', icon: <Camera className="mr-2 h-5 w-5" /> },
    { name: 'Accessories', path: '/category/accessories', icon: <Zap className="mr-2 h-5 w-5" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus the search input when opened
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-blue-900 dark:text-blue-500" />
              <span className="ml-2 text-xl font-bold text-blue-900 dark:text-white">RNxTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-blue-900 dark:text-slate-200 dark:hover:text-blue-400">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-900 dark:text-slate-200 dark:hover:text-blue-400">
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full z-10 mt-2 hidden w-56 rounded-md bg-white p-2 shadow-lg group-hover:block dark:bg-slate-900">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="flex items-center rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {category.icon}
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/deals" className="text-sm font-medium text-slate-700 hover:text-blue-900 dark:text-slate-200 dark:hover:text-blue-400">
              Deals
            </Link>
            <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-blue-900 dark:text-slate-200 dark:hover:text-blue-400">
              About
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button
              onClick={toggleSearch}
              aria-label="Search"
              className="rounded-full p-1.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="rounded-full p-1.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Wishlist - only shown when logged in */}
            {isAuthenticated && (
              <Link 
                to="/wishlist" 
                className="rounded-full p-1.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </Link>
            )}

            {/* Cart */}
            <Link 
              to="/cart" 
              className="relative rounded-full p-1.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Profile / Auth */}
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="rounded-full p-1.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="User account"
              >
                <User className="h-5 w-5" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white p-2 shadow-lg dark:bg-slate-900">
                  {isAuthenticated ? (
                    <>
                      <div className="border-b border-slate-200 pb-2 dark:border-slate-700">
                        <p className="px-3 py-1 text-sm font-medium dark:text-white">Hi, {user?.name}</p>
                        <p className="px-3 py-1 text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
                      </div>
                      <Link
                        to="/account"
                        className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My Account
                      </Link>
                      <Link
                        to="/orders"
                        className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-slate-100 dark:text-red-400 dark:hover:bg-slate-800"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden rounded-full p-1.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-white pt-2 dark:bg-slate-950 md:hidden">
          <nav className="h-full overflow-y-auto px-4 pb-20">
            <Link
              to="/"
              className="flex items-center border-b border-slate-200 py-4 text-lg font-medium text-slate-900 dark:border-slate-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="mr-3 h-5 w-5" />
              Home
            </Link>
            
            <div className="border-b border-slate-200 py-4 dark:border-slate-800">
              <p className="mb-2 font-medium text-slate-900 dark:text-white">Categories</p>
              <div className="space-y-2 pl-2">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="flex items-center py-2 text-slate-700 dark:text-slate-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.icon}
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/deals"
              className="flex items-center border-b border-slate-200 py-4 text-lg font-medium text-slate-900 dark:border-slate-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
            
            <Link
              to="/about"
              className="flex items-center border-b border-slate-200 py-4 text-lg font-medium text-slate-900 dark:border-slate-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-20">
          <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-slate-900">
            <form onSubmit={handleSearch} className="relative">
              <input
                id="search-input"
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-slate-300 p-3 pr-10 focus:border-blue-500 focus:outline-none focus:ring dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
            <div className="mt-4 flex justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsSearchOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;