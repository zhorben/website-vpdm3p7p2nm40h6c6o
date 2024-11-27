import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">John Doe, Esq.</h1>
        <nav>
          <Button variant="ghost" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</Button>
          <Button variant="ghost" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</Button>
          <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;