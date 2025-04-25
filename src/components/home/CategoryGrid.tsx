import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Headphones, Watch, Camera, Zap } from 'lucide-react';

const categories = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Powerful laptops for work & play',
    icon: <Laptop className="h-8 w-8" />,
    color: 'bg-blue-100 dark:bg-blue-900',
    textColor: 'text-blue-800 dark:text-blue-200'
  },
  {
    id: 'smartphones',
    name: 'Smartphones',
    description: 'Latest smartphones & accessories',
    icon: <Smartphone className="h-8 w-8" />,
    color: 'bg-green-100 dark:bg-green-900',
    textColor: 'text-green-800 dark:text-green-200'
  },
  {
    id: 'headphones',
    name: 'Headphones',
    description: 'Immersive audio experience',
    icon: <Headphones className="h-8 w-8" />,
    color: 'bg-purple-100 dark:bg-purple-900',
    textColor: 'text-purple-800 dark:text-purple-200'
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    description: 'Stay connected on the go',
    icon: <Watch className="h-8 w-8" />,
    color: 'bg-pink-100 dark:bg-pink-900',
    textColor: 'text-pink-800 dark:text-pink-200'
  },
  {
    id: 'cameras',
    name: 'Cameras',
    description: 'Capture perfect moments',
    icon: <Camera className="h-8 w-8" />,
    color: 'bg-amber-100 dark:bg-amber-900',
    textColor: 'text-amber-800 dark:text-amber-200'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Enhance your tech experience',
    icon: <Zap className="h-8 w-8" />,
    color: 'bg-orange-100 dark:bg-orange-900',
    textColor: 'text-orange-800 dark:text-orange-200'
  }
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Shop By Category
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg bg-white transition-shadow hover:shadow-lg dark:bg-slate-800"
            >
              <div className="flex items-center p-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg ${category.color}`}>
                  <div className={category.textColor}>{category.icon}</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;