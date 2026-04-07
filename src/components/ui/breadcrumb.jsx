import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();
  
  const getDefaultBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    const breadcrumbMap = {
      'homepage': { label: 'Home', path: '/homepage' },
      'product-catalog': { label: 'Products', path: '/product-catalog' },
      'product-detail': { label: 'Product Details', path: '/product-detail' },
      'about-company': { label: 'About Company', path: '/about-company' },
      'quote-request': { label: 'Request Quote', path: '/quote-request' },
      'contact': { label: 'Contact Us', path: '/contact' }
    };

    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];
    
    if (pathSegments.length > 0 && pathSegments[0] !== 'homepage') {
      const currentSegment = pathSegments[0];
      if (breadcrumbMap[currentSegment]) {
        breadcrumbs.push(breadcrumbMap[currentSegment]);
      }
      
      // Special handling for product detail page
      if (currentSegment === 'product-detail') {
        breadcrumbs.splice(1, 0, { label: 'Products', path: '/product-catalog' });
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = customItems || getDefaultBreadcrumbs();
  
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={14} 
                className="mx-2 text-border" 
              />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-primary transition-industrial-fast font-medium"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;