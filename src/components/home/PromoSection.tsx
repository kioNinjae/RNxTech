import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PromoSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Left side image */}
          <div className="flex-1 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Student with laptop"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Right side content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Back to School Sale
            </h2>
            <div className="mt-2 inline-block rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
              Limited Time Offer
            </div>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
              Get up to 20% off on laptops, tablets, and accessories. Perfect for students and educators.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-center">
                <span className="mr-2 text-blue-600 dark:text-blue-400">✓</span>
                Free shipping on all orders
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600 dark:text-blue-400">✓</span>
                Extended warranty for students
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600 dark:text-blue-400">✓</span>
                Special bundles with accessories
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600 dark:text-blue-400">✓</span>
                Technical support included
              </li>
            </ul>
            <div className="mt-8">
              <Button variant="secondary" size="lg">
                <Link to="/deals">Shop the Sale</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;