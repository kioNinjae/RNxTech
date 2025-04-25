import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { isAuthenticated, addToWishlist, removeFromWishlist, isInWishlist } = useAuth();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Badge for new or discounted products */}
      {product.isNew && (
        <div className="absolute top-2 left-2 z-10 rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
          New
        </div>
      )}
      {product.originalPrice && (
        <div className="absolute top-2 right-2 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          Sale
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="block h-full">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Wishlist button */}
          {isAuthenticated && (
            <button 
              onClick={handleWishlist} 
              className={`absolute top-3 right-3 rounded-full p-1.5 transition-colors ${
                isInWishlist(product.id) 
                  ? 'bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400' 
                  : 'bg-white/80 text-slate-700 hover:text-red-500 dark:bg-slate-800/80 dark:text-slate-200'
              }`}
            >
              <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-slate-900 dark:text-white">{product.name}</h3>
          
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {/* Star rating */}
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none stroke-current opacity-40'}`} 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                ({product.reviewCount})
              </span>
            </div>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through dark:text-slate-400">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.stock < 10 && (
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  Only {product.stock} left
                </p>
              )}
            </div>
          </div>
          
          {/* Add to cart button */}
          <div className="mt-4">
            <Button 
              onClick={handleAddToCart} 
              variant="primary" 
              size="sm" 
              fullWidth
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;