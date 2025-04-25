import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-blue-950 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Next-Gen Tech at Your Fingertips
            </h1>
            <p className="mt-6 text-lg text-blue-100 md:max-w-lg">
              Experience the future with our premium selection of cutting-edge electronics. From powerful laptops to smart accessories, shop the latest in technology.
            </p>
            <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold"
              >
                <Link to="/category/laptops">Shop Laptops</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 hover:text-white dark:border-blue-100 dark:text-blue-100"
              >
                <Link to="/deals">View Deals</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 md:flex md:justify-end">
            <div className="relative overflow-hidden rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Latest laptop model" 
                className="h-auto w-full max-w-lg rounded-lg object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -right-4 -top-4 rounded-full bg-orange-500 p-4 text-sm font-bold text-white shadow-lg">
                New Arrival
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;