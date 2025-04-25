import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Truck, ShieldCheck, RotateCcw, Minus, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { isAuthenticated, addToWishlist, removeFromWishlist, isInWishlist } = useAuth();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Product not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          Return to homepage
        </Link>
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleWishlist = () => {
    if (!isAuthenticated) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
          Home
        </Link>{' '}
        /{' '}
        <Link to={`/category/${product.category}`} className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>{' '}
        /{' '}
        <span className="text-sm text-slate-900 dark:text-white">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
          <div className="overflow-hidden rounded-lg">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            {product.isNew && (
              <span className="mb-2 inline-block rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                New Arrival
              </span>
            )}
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{product.name}</h1>
            
            <div className="mt-2 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none stroke-current opacity-40'}`} 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-slate-500 line-through dark:text-slate-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Price includes taxes.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-slate-700 dark:text-slate-300">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-700 dark:text-slate-300">
                Availability: 
                <span className={product.stock > 0 ? 'ml-1 text-green-600 dark:text-green-400' : 'ml-1 text-red-600 dark:text-red-400'}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>

          {product.stock > 0 && (
            <>
              <div className="mb-6">
                <label htmlFor="quantity" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">
                  Quantity
                </label>
                <div className="flex max-w-[160px] items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="flex h-10 w-10 items-center justify-center rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value) && value >= 1 && value <= product.stock) {
                        setQuantity(value);
                      }
                    }}
                    min="1"
                    max={product.stock}
                    className="h-10 w-16 border-y border-slate-300 bg-white text-center text-slate-900 [-moz-appearance:_textfield] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="flex h-10 w-10 items-center justify-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWishlist}
                  disabled={!isAuthenticated}
                  className={`min-w-[130px] ${
                    isAuthenticated && isInWishlist(product.id)
                      ? 'border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20'
                      : ''
                  }`}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isAuthenticated && isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  {isAuthenticated && isInWishlist(product.id) ? 'Wishlisted' : 'Wishlist'}
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  className="min-w-[50px]"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </>
          )}

          <div className="space-y-4 rounded-lg border border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center">
              <Truck className="mr-3 h-5 w-5 text-slate-600 dark:text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Free Delivery</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Orders over $50 qualify for free shipping</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <ShieldCheck className="mr-3 h-5 w-5 text-slate-600 dark:text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">1 Year Warranty</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">All products include a minimum 1-year warranty</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <RotateCcw className="mr-3 h-5 w-5 text-slate-600 dark:text-slate-400" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">30-Day Returns</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Not satisfied? Return within 30 days for a full refund</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Specifications</h2>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td className="whitespace-nowrap bg-slate-50 px-6 py-4 text-sm font-medium text-slate-900 dark:bg-slate-900 dark:text-white">
                    {key}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;