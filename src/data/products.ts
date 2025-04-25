import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ProBook X5 Laptop',
    category: 'laptops',
    price: 107999,
    originalPrice: 124999,
    description: 'The latest ProBook X5 features a stunning 15-inch display, powerful processor, and all-day battery life.',
    features: [
      '15-inch Retina Display',
      'Intel Core i7 Processor',
      '16GB RAM, 512GB SSD',
      'Up to 12 hours battery life',
      'Backlit keyboard'
    ],
    specifications: {
      'Processor': 'Intel Core i7 (12th Gen)',
      'RAM': '16GB DDR4',
      'Storage': '512GB NVMe SSD',
      'Display': '15.6" 4K IPS (3840 x 2160)',
      'Graphics': 'NVIDIA RTX 3060 6GB',
      'Battery': '75Wh (Up to 12 hours)',
      'Weight': '1.8 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 128,
    stock: 15,
    isFeatured: true
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max',
    category: 'smartphones',
    price: 159999,
    description: 'The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.',
    features: [
      '6.7-inch Super Retina XDR OLED display',
      'A17 Pro chip',
      'Pro camera system (48MP + 12MP + 12MP)',
      'Titanium design',
      'Action button'
    ],
    specifications: {
      'Display': '6.7" OLED (2796 x 1290)',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'Camera': 'Triple 48MP system',
      'Battery': 'Up to 29 hours video playback',
      'Security': 'Face ID'
    },
    imageUrl: 'https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviewCount: 245,
    stock: 10,
    isNew: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'NoiseCancel Pro Headphones',
    category: 'headphones',
    price: 20999,
    originalPrice: 24999,
    description: 'Immerse yourself in your music with these premium noise-cancelling headphones.',
    features: [
      'Active noise cancellation',
      'Up to 30 hours of battery life',
      'Premium sound quality',
      'Comfortable over-ear design',
      'Built-in microphone for calls'
    ],
    specifications: {
      'Type': 'Over-ear, closed-back',
      'Driver': '40mm dynamic driver',
      'Frequency Response': '4Hz-40,000Hz',
      'Battery Life': 'Up to 30 hours (ANC on)',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Weight': '254g'
    },
    imageUrl: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviewCount: 189,
    stock: 30,
    isFeatured: true
  },
  {
    id: '4',
    name: 'OPPO Find X7 Ultra',
    category: 'smartphones',
    price: 89999,
    description: 'Flagship smartphone with revolutionary camera system and stunning design.',
    features: [
      '6.8-inch AMOLED LTPO display',
      'Snapdragon 8 Gen 3',
      'Quad camera system with Hasselblad',
      '100W SuperVOOC charging',
      'In-display fingerprint sensor'
    ],
    specifications: {
      'Display': '6.8" AMOLED (3168 x 1440)',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB UFS 4.0',
      'Camera': 'Quad 50MP system',
      'Battery': '5000mAh',
      'Charging': '100W wired, 50W wireless'
    },
    imageUrl: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 156,
    stock: 18,
    isNew: true
  },
  {
    id: '5',
    name: 'vivo V30 Pro',
    category: 'smartphones',
    price: 46999,
    description: 'Premium mid-range smartphone with exceptional camera capabilities and fast charging.',
    features: [
      '6.78-inch AMOLED display',
      'Dimensity 8200 processor',
      '50MP triple camera system',
      '80W fast charging',
      'In-display fingerprint sensor'
    ],
    specifications: {
      'Display': '6.78" AMOLED (2800 x 1260)',
      'Processor': 'Dimensity 8200',
      'Storage': '256GB',
      'Camera': 'Triple 50MP system',
      'Battery': '4800mAh',
      'Charging': '80W FlashCharge'
    },
    imageUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    reviewCount: 112,
    stock: 25
  },
  {
    id: '6',
    name: 'iQOO 12 Pro',
    category: 'smartphones',
    price: 64999,
    description: 'Performance-focused smartphone with advanced gaming features and fast charging.',
    features: [
      '6.78-inch E6 AMOLED display',
      'Snapdragon 8 Gen 3',
      'Gaming-focused features',
      '120W flash charge',
      'Vapor chamber cooling'
    ],
    specifications: {
      'Display': '6.78" AMOLED (3200 x 1440)',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB UFS 4.0',
      'Camera': 'Triple 50MP system',
      'Battery': '5000mAh',
      'Charging': '120W wired, 50W wireless'
    },
    imageUrl: 'https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 89,
    stock: 15,
    isNew: true
  },
  {
    id: '7',
    name: 'realme GT 5 Pro',
    category: 'smartphones',
    price: 54999,
    description: 'Flagship killer with premium features and exceptional performance.',
    features: [
      '6.78-inch AMOLED display',
      'Snapdragon 8 Gen 3',
      '50MP Sony sensor',
      '100W SuperVOOC',
      'Stainless steel vapor chamber'
    ],
    specifications: {
      'Display': '6.78" AMOLED (2780 x 1264)',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB UFS 4.0',
      'Camera': 'Triple 50MP system',
      'Battery': '5400mAh',
      'Charging': '100W wired, 50W wireless'
    },
    imageUrl: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviewCount: 76,
    stock: 20
  },
  {
    id: '8',
    name: 'iPhone 15',
    category: 'smartphones',
    price: 79999,
    description: 'The latest iPhone with powerful features and Dynamic Island.',
    features: [
      '6.1-inch Super Retina XDR display',
      'A16 Bionic chip',
      'Dual camera system',
      'Dynamic Island',
      'USB-C connector'
    ],
    specifications: {
      'Display': '6.1" OLED (2556 x 1179)',
      'Processor': 'A16 Bionic',
      'Storage': '128GB',
      'Camera': 'Dual 48MP system',
      'Battery': 'Up to 26 hours video playback',
      'Security': 'Face ID'
    },
    imageUrl: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 203,
    stock: 25
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};