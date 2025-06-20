'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from '@material-tailwind/react';
import { motion } from 'framer-motion';


const MinimalBinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="3" y="6" width="18" height="14" rx="2" />
    <line x1="9" y1="10" x2="9" y2="17" />
    <line x1="15" y1="10" x2="15" y2="17" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <path d="M10 6V4h4v2" />
  </svg>
);


const PremiumHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#gold-gradient-home)"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <defs>
      <linearGradient id="gold-gradient-home" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
    </defs>
    <path d="M3 12L12 4l9 8" />
    <path d="M9 21V13h6v8" />
    <path d="M21 21H3" />
  </svg>
);

export default function DeleteProductForm() {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      alert('Product deleted!');
    } else {
      alert('Failed to delete product.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center px-4"
    >
      <div className="relative w-full max-w-2xl">
        <Card
          className="w-full border border-gray-200 shadow bg-amber-50/60 backdrop-blur-md"
        >
          <CardBody className="space-y-8 px-8 py-8">
          
            {loading ? (
              <Typography
                variant="h5"
                className="text-center text-amber-700 font-semibold tracking-wide"
              >
                Loading premium products...
              </Typography>
            ) : products.length === 0 ? (
              <Typography
                variant="h5"
                className="text-center text-amber-700 font-semibold tracking-wide"
              >
                No products found.
              </Typography>
            ) : (
              <div className="flex flex-col gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center bg-gradient-to-r from-amber-100/80 to-yellow-50/80 p-4 rounded-xl border border-amber-200 shadow-lg hover:shadow-amber-300 transition"
                  >
                    <img
                      src={
                        product.image?.startsWith('/')
                          ? product.image
                          : `/${product.image}`
                      }
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md border-2 border-amber-300 mr-4 shadow"
                    />
                    <div className="flex-1">
                      <Typography
                        variant="h5"
                        className="text-black-800 font-bold tracking-wide"
                        style={{
                          fontFamily: 'serif',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="small"
                        className="text-cyan-900 font-medium"
                        style={{
                          fontFamily: 'serif',
                          letterSpacing: '0.05em',
                        }}
                      >
                        ₹{product.price}{' '}
                        <span className="mx-1 text-yellow-600">•</span>
                        {product.category}
                        <span className="mx-1 text-yellow-600">/</span>
                        {product.subcategory}
                      </Typography>
                    </div>
                    <IconButton
                      color="amber"
                      variant="filled"
                      onClick={() => handleDelete(product.id)}
                      aria-label="Delete"
                      className="shadow-md"
                    >
                      <MinimalBinIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </motion.div>
  );
}
