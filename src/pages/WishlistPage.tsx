import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getProductById } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const WishlistPage: React.FC = () => {
  const { user } = useAuth();
  
  const wishlistProducts = user?.wishlist.map(id => getProductById(id)).filter(Boolean) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">My Wishlist</h1>

      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistProducts.map(product => (
            <ProductCard key={product?.id} product={product!} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
          <Heart className="mb-4 h-12 w-12 text-slate-400" />
          <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
            Your wishlist is empty
          </h2>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Save items you love to your wishlist and find them here later
          </p>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Start shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;