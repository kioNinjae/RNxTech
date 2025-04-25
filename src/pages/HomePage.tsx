import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryGrid from '../components/home/CategoryGrid';
import NewArrivals from '../components/home/NewArrivals';
import PromoSection from '../components/home/PromoSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoSection />
      <NewArrivals />
    </div>
  );
};

export default HomePage;