import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryId) {
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    }
  }, [categoryId]);

  useEffect(() => {
    let result = [...products];
    
    // Apply price filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      default: // 'featured'
        result.sort((a, b) => (a.isFeatured === b.isFeatured) ? 0 : a.isFeatured ? -1 : 1);
        break;
    }
    
    setFilteredProducts(result);
  }, [products, sortOption, priceRange]);

  const categoryName = categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : '';

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm">
          <Link to="/" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
            Home
          </Link>
          <ChevronRight className="mx-2 h-4 w-4 text-slate-400" />
          <span className="font-medium text-slate-900 dark:text-white">{categoryName}</span>
        </div>
      </div>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{categoryName}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Explore our selection of {categoryName.toLowerCase()} and find the perfect device for your needs.
        </p>
      </div>

      {/* Filter and Sort Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={toggleFilter}
          className="md:hidden"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>

        <div className="flex items-center">
          <span className="mr-2 text-sm text-slate-700 dark:text-slate-300">Sort by:</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-md border border-slate-300 bg-white py-1 pl-2 pr-8 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Filters - Desktop */}
        <div className="hidden md:col-span-3 md:block">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-lg font-medium text-slate-900 dark:text-white">Filters</h2>
            
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium text-slate-900 dark:text-white">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400">${priceRange[0]}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-slate-700"
                />
              </div>
            </div>
            
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPriceRange([0, 2000])}
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-white p-4 dark:bg-slate-900 md:hidden">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
              <h2 className="text-lg font-medium text-slate-900 dark:text-white">Filters</h2>
              <button onClick={toggleFilter} className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                ✕
              </button>
            </div>
            
            <div className="py-4">
              <h3 className="mb-2 text-sm font-medium text-slate-900 dark:text-white">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400">${priceRange[0]}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-slate-700"
                />
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => setPriceRange([0, 2000])}>
                Reset
              </Button>
              <Button variant="primary" size="sm" onClick={toggleFilter} className="flex-1">
                Apply Filters
              </Button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="md:col-span-9">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">No products found</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;