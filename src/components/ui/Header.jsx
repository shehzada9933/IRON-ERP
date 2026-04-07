import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Products', path: '/product-catalog', icon: 'Package' },
    { name: 'About', path: '/about-company', icon: 'Building2' },
    { name: 'Quote', path: '/quote-request', icon: 'Calculator' },
    { name: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const isActivePath = (path) => {
    if (path === '/homepage') {
      return location.pathname === '/' || location.pathname === '/homepage';
    }
    if (path === '/product-catalog') {
      return location.pathname === '/product-catalog' || location.pathname === '/product-detail';
    }
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-1000 elevation-2">
        <div className="max-w-9xl mx-auto">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo Section */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-3 transition-industrial hover:opacity-80"
              onClick={closeMobileMenu}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-steel-gradient rounded-lg">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-tight">
                  Ferrum Logic
                </span>
                <span className="text-xs font-medium text-muted-foreground leading-tight">
                  Steel Supply
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-industrial ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/5 border-b-2 border-primary' :'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Search"
                iconPosition="left"
                onClick={() => {}}
              >
                Search Products
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Calculator"
                iconPosition="left"
                onClick={() => window.location.href = '/quote-request'}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-industrial"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-1100 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl animate-slide-down">
            <div className="flex items-center justify-between h-16 px-6 border-b border-border">
              <span className="text-lg font-semibold text-primary">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-primary transition-industrial"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <nav className="flex flex-col p-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-industrial ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-6 mt-6 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Search"
                  iconPosition="left"
                  onClick={closeMobileMenu}
                >
                  Search Products
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calculator"
                  iconPosition="left"
                  onClick={() => {
                    closeMobileMenu();
                    window.location.href = '/quote-request';
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;