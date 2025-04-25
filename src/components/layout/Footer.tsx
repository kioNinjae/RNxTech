import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">RNxTech</span>
            </div>
            <p className="mt-4 text-sm">
              Your one-stop destination for premium electronics and tech accessories. Quality products with exceptional service.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-slate-400 transition-colors hover:text-blue-400" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-blue-400" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-blue-400" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-blue-400" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/laptops" className="text-sm hover:text-blue-400">Laptops</Link>
              </li>
              <li>
                <Link to="/category/smartphones" className="text-sm hover:text-blue-400">Smartphones</Link>
              </li>
              <li>
                <Link to="/category/headphones" className="text-sm hover:text-blue-400">Headphones</Link>
              </li>
              <li>
                <Link to="/category/smartwatches" className="text-sm hover:text-blue-400">Smartwatches</Link>
              </li>
              <li>
                <Link to="/category/cameras" className="text-sm hover:text-blue-400">Cameras</Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-sm hover:text-blue-400">Accessories</Link>
              </li>
              <li>
                <Link to="/deals" className="text-sm hover:text-blue-400">Deals</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-blue-400">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-blue-400">Shipping Information</Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:text-blue-400">Returns Policy</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm hover:text-blue-400">Warranty</Link>
              </li>
              <li>
                <Link to="/track-order" className="text-sm hover:text-blue-400">Track Order</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                <span className="text-sm">Ambivali, Kalyan West, Maharashtra</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-500" />
                <span className="text-sm">+91 7058116765</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                <span className="text-sm">rntxtechbusiness@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white">Subscribe to our newsletter</h4>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-slate-600 bg-slate-800 px-3 py-2 text-sm placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="rounded-r-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">&copy; {new Date().getFullYear()} RNxTech. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-blue-400">Terms of Service</Link>
              <Link to="/sitemap" className="text-sm hover:text-blue-400">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;