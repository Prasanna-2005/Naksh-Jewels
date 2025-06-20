// components/ProductGallery.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
 
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
};

export default function ProductGallery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-4">
          Curated Collection
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover our premium selection of products, meticulously crafted for the modern lifestyle.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              variants={scaleUp}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl overflow-hidden group"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg text-gray-900 line-clamp-1">
                    {product.title}
                  </h3>
                  <span className="text-lg font-light text-gray-900">
                    ₹{product.price}
                  </span>
                </div>

              

                <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProducts.length === 0 && (
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center py-16"
        >
          <p className="text-gray-500">No products found in this category.</p>
        </motion.div>
      )}
    </div>
  );
}