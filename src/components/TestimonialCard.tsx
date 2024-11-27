import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, text }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="italic mb-4">"{text}"</p>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{company}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;