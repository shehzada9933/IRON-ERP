import React, { useState, useRef, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import Icon from '../AppIcon';

const SearchComponent = ({ onSearch, placeholder = "Search steel products, specifications...", className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Mock suggestions data - in real app, this would come from API
  const mockSuggestions = [
    { id: 1, title: 'Steel Beams I-Section', category: 'Structural Steel', specs: 'IS 2062' },
    { id: 2, title: 'Mild Steel Plates', category: 'Plates', specs: 'Thickness 6-50mm' },
    { id: 3, title: 'TMT Bars Fe500', category: 'Reinforcement', specs: '8mm to 32mm' },
    { id: 4, title: 'Steel Angles L-Section', category: 'Structural Steel', specs: 'Equal & Unequal' },
    { id: 5, title: 'Galvanized Steel Sheets', category: 'Sheets', specs: 'Zinc Coated' },
    { id: 6, title: 'Steel Pipes Seamless', category: 'Pipes', specs: 'ASTM A106' },
    { id: 7, title: 'Steel Channels C-Section', category: 'Structural Steel', specs: 'IS 808' },
    { id: 8, title: 'Stainless Steel 304', category: 'Stainless Steel', specs: 'Food Grade' }
  ];

  const filterSuggestions = (query) => {
    if (!query.trim()) return [];
    
    return mockSuggestions.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.specs.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim()) {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        setSuggestions(filterSuggestions(value));
        setIsOpen(true);
        setIsLoading(false);
      }, 200);
    } else {
      setSuggestions([]);
      setIsOpen(false);
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.title);
    setIsOpen(false);
    if (onSearch) {
      onSearch(suggestion.title, suggestion);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsOpen(false);
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="pr-10"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isLoading ? (
              <div className="animate-spin">
                <Icon name="Loader2" size={16} className="text-muted-foreground" />
              </div>
            ) : (
              <Icon name="Search" size={16} className="text-muted-foreground" />
            )}
          </div>
        </div>
        
        <Button
          variant="default"
          size="default"
          onClick={handleSearch}
          disabled={!searchQuery.trim()}
          iconName="Search"
        >
          Search
        </Button>
      </div>

      {/* Search Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-industrial-lg z-50 max-h-80 overflow-y-auto"
        >
          <div className="p-2">
            <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
              Product Suggestions
            </div>
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left p-3 rounded-md hover:bg-muted transition-industrial-fast group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm text-foreground group-hover:text-primary">
                      {suggestion.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {suggestion.category} • {suggestion.specs}
                    </div>
                  </div>
                  <Icon 
                    name="ArrowUpRight" 
                    size={14} 
                    className="text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-industrial-fast" 
                  />
                </div>
              </button>
            ))}
          </div>
          
          {searchQuery.trim() && (
            <div className="border-t border-border p-2">
              <button
                onClick={handleSearch}
                className="w-full text-left p-3 rounded-md hover:bg-muted transition-industrial-fast flex items-center space-x-2"
              >
                <Icon name="Search" size={14} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Search for "<span className="font-medium text-foreground">{searchQuery}</span>"
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;