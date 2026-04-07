import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const QuoteRequestCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();

  const getContextualMessage = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/product-catalog':
        return 'Get bulk pricing for selected products';
      case '/product-detail':
        return 'Request quote for this product';
      case '/about-company':
        return 'Ready to work with us?';
      case '/contact':
        return 'Need a formal quote?';
      default:
        return 'Get instant steel pricing';
    }
  };

  const handleQuoteClick = () => {
    // Store current context for quote form pre-population
    const currentProduct = location.pathname === '/product-detail' ? 
      { productId: 'current-product', source: 'product-detail' } : null;
    
    if (currentProduct) {
      localStorage.setItem('quoteContext', JSON.stringify(currentProduct));
    }
    
    window.location.href = '/quote-request';
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Hide on quote request page
  if (location.pathname === '/quote-request') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Desktop Version - Fixed Bottom Right */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-1000">
        <div className={`bg-white border border-border rounded-lg shadow-industrial-lg transition-industrial ${
          isMinimized ? 'w-14' : 'w-80'
        }`}>
          {isMinimized ? (
            <button
              onClick={toggleMinimize}
              className="flex items-center justify-center w-14 h-14 text-primary hover:bg-primary/5 rounded-lg transition-industrial"
              aria-label="Expand quote request"
            >
              <Icon name="Calculator" size={20} />
            </button>
          ) : (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                    <Icon name="Calculator" size={16} className="text-primary" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">Quick Quote</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={toggleMinimize}
                    className="flex items-center justify-center w-6 h-6 text-muted-foreground hover:text-foreground rounded transition-industrial"
                    aria-label="Minimize"
                  >
                    <Icon name="Minus" size={14} />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="flex items-center justify-center w-6 h-6 text-muted-foreground hover:text-foreground rounded transition-industrial"
                    aria-label="Close"
                  >
                    <Icon name="X" size={14} />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {getContextualMessage()}
              </p>
              
              <div className="space-y-2">
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="Calculator"
                  iconPosition="left"
                  onClick={handleQuoteClick}
                >
                  Request Quote
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = '/contact'}
                >
                  Call Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Version - Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-1000 bg-white border-t border-border shadow-industrial-lg">
        <div className="flex items-center justify-between p-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              {getContextualMessage()}
            </p>
            <p className="text-xs text-muted-foreground">
              Get competitive pricing in minutes
            </p>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              onClick={() => window.location.href = '/contact'}
            >
              Call
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calculator"
              iconPosition="left"
              onClick={handleQuoteClick}
            >
              Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteRequestCTA;