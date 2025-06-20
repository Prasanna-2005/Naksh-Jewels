// 📁 File: src/pages/api/products/[id].ts
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const productsPath = path.join(process.cwd(), 'public', 'products', 'products.json');

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!fs.existsSync(productsPath)) {
    return NextResponse.json({ error: 'Products file not found' }, { status: 404 });
  }

  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  const productIndex = products.findIndex((p: any) => p.id === id);

  if (productIndex === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const deleted = products.splice(productIndex, 1)[0];

  // Remove image if present
  if (deleted.image) {
    const imagePath = path.join(process.cwd(), 'public', deleted.image.startsWith('/') ? deleted.image : `products/images/${deleted.image}`);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

  return NextResponse.json({ message: 'Product deleted', product: deleted }, { status: 200 });
}