import React, { useState } from 'react';
import { Search, Menu, Bell, User } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
  searchQuery: string;
  handleSearch: (query: string) => void;
}
const imageStyle: React.CSSProperties = {
  width: '30px',
  height: '2  0px',
};
const StyledSpan = styled.span`
  &::before {
    content: "\00a0"; /* This adds a non-breaking space */
  }
  color: #1e40af; /* Adjust your color here */
  font-weight: bold;
  font-size: 1.25rem; /* Adjust your font size here */
`;
const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, searchQuery, handleSearch }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            
            <div className="ml-4 flex items-center">
            <img src="download.png" style={imageStyle}></img>
              <span className="text-blue-600 font-bold text-xl">    CHRAZE</span>
            </div>
          </div>
          
          <div className={`transition-all duration-300 ${isSearchExpanded ? 'flex-grow mx-4' : 'w-auto'}`}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for topics, news, breakthroughs..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
              <Bell size={20} />
            </button>
            
            <div className="relative">
              <button className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 focus:outline-none">
                <User size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;