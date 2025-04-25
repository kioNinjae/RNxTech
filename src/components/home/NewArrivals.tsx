import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { getNewProducts } from '../../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewArrivals: React.FC = () => {
  const newProducts = getNewProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = {
    sm: 1,
    md: 2,
    lg: 3
  };

  const maxIndex = Math.max(0, newProducts.length - productsPerPage.lg);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  return (
    <section className="py-12 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            New Arrivals
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / productsPerPage.lg)}%)` }}
          >
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="w-full flex-none px-2 sm:w-1/2 lg:w-1/3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;