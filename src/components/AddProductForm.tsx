'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Card,
  CardBody,
  Input,
} from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { PhotoIcon } from '@heroicons/react/24/solid';

export default function AddProductForm() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    subcategory: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('subcategory', product.subcategory);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const res = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('✅ Product added!');
      setProduct({ name: '', price: '', category: '', subcategory: '' });
      setImageFile(null);
      setPreview(null);
    } else {
      alert(' Failed to add product');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex justify-center items-center px-4"
    >
      <Card
        className="w-full max-w-lg border border-gray-800 shadow-2xl bg-amber-50/90 backdrop-blur-lg"
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <CardBody
          className="space-y-8 px-8 py-8"
          placeholder=""
          onResize={() => {}}
          onResizeCapture={() => {}}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
        
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              label="Product Name"
              color="amber"
              value={product.name}
              onChange={handleChange}
              className="font-semibold"
              crossOrigin=""
              required
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            />
            <Input
              name="price"
              label="Price (₹)"
              color="amber"
              type="number"
              value={product.price}
              onChange={handleChange}
              className="font-semibold"
              crossOrigin=""
              required
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            />
            <div className="flex gap-4">
              <Input
              name="category"
              label="Category"
              color="amber"
              value={product.category}
              onChange={handleChange}
              className="font-semibold"
              crossOrigin=""
              required
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              />
              <Input
              name="subcategory"
              label="Subcategory"
              color="amber"
              value={product.subcategory}
              onChange={handleChange}
              className="font-semibold"
              crossOrigin=""
              required
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white/60 rounded-lg shadow border-2 border-dashed border-amber-300 cursor-pointer transition hover:bg-amber-50">
                <PhotoIcon className="h-10 w-10 text-amber-400 mb-2" />
                <span className="text-amber-700 font-medium">
                  {imageFile ? "Change Image" : "Upload Product Image"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-4 rounded-lg shadow max-h-40 object-contain"
                  />
                )}
              </label>
            </div>
            <div className="flex justify-between gap-4 pt-2">
              <Button
                variant="outlined"
                color="blue-gray"
                onClick={() => router.back()}
                type="button"
                className="w-1/2"
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                ← Back
              </Button>
              <Button
                color="amber"
                type="submit"
                className="w-1/2 font-bold shadow-amber-200 shadow-md"
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Submit
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </motion.div>
  );
}
