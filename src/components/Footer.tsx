import React from 'react'
import { LinkedIn, Twitter } from 'lucide-react'

import React from 'react';
import { LinkedIn, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2023 John Doe, Esq. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <LinkedIn size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;