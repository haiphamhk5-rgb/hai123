// Fix: Added React import to define the React namespace for ReactNode types
import React from 'react';

export interface EventCardProps {
  date: string;
  title: string;
  location: string;
  imageUrl: string;
}

export interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}