import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <ShoppingBag className="h-12 w-12 text-slate-400 dark:text-slate-500" />
        </div>
        <h1 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Your cart is empty</h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Button variant="primary" size="lg">
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  const freeShippingThreshold = 50;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 9.99;
  const grandTotal = total + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">Shopping Cart ({totalItems} items)</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {items.map((item) => (
                <div key={item.product.id} className="flex p-4 sm:p-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-slate-900 dark:text-white">
                        <h3>
                          <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                        </h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center">
                        <label htmlFor={`quantity-${item.product.id}`} className="mr-2 text-slate-500 dark:text-slate-400">
                          Qty
                        </label>
                        <div className="flex items-center rounded-md border border-slate-300 dark:border-slate-700">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="flex h-8 w-8 items-center justify-center rounded-l-md text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <input
                            id={`quantity-${item.product.id}`}
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value) && value >= 1) {
                                updateQuantity(item.product.id, value);
                              }
                            }}
                            max={item.product.stock}
                            className="w-12 border-none bg-transparent text-center text-sm text-slate-900 focus:outline-none focus:ring-0 dark:text-white [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="flex h-8 w-8 items-center justify-center rounded-r-md text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="flex items-center text-sm font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <Trash2 className="mr-1 h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-slate-200 p-4 dark:border-slate-800">
              <button
                onClick={clearCart}
                className="text-sm font-medium text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-medium text-slate-900 dark:text-white">Order Summary</h2>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-400">Subtotal</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">${subtotal.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-400">Tax (10%)</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">${tax.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-400">Shipping</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </p>
              </div>
              
              <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-slate-900 dark:text-white">Total</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white">${grandTotal.toFixed(2)}</p>
                </div>
                {subtotal < freeShippingThreshold && (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Add ${(freeShippingThreshold - subtotal).toFixed(2)} more to qualify for free shipping
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="primary" size="lg" fullWidth>
                <Link to="/checkout" className="flex items-center justify-center">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-4">
              <Button variant="outline" size="lg" fullWidth>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
            
            <div className="mt-6">
              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                We accept all major credit cards, PayPal, and Apple Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;