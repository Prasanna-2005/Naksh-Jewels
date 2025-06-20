import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

import Busboy from 'busboy';
export const config = {
  api: {
    bodyParser: false,
  },
};

const productsPath = path.join(process.cwd(), 'public', 'products', 'products.json');
const uploadDir = path.join(process.cwd(), 'public', 'products', 'images');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

export async function POST(req: NextRequest) {
  return new Promise(async (resolve, reject) => {
    const busboy = Busboy({ headers: Object.fromEntries(req.headers.entries()) });
    const fields: Record<string, any> = {};
    let fileSavedPath = '';
    let fileName = '';

    busboy.on('file', (fieldname, file, info) => {
      fileName = `${Date.now()}-${info.filename}`;
      const saveTo = path.join(uploadDir, fileName);
      file.pipe(fs.createWriteStream(saveTo));
      fileSavedPath = `/products/images/${fileName}`;
    });

    busboy.on('field', (fieldname, val) => {
      fields[fieldname] = val;
    });

    busboy.on('finish', () => {
      const productData = {
        id: Date.now().toString(),
        name: fields.name,
        price: fields.price,
        category: fields.category,
        subcategory: fields.subcategory,
        image: fileSavedPath,
      };

      const existing = fs.existsSync(productsPath)
        ? JSON.parse(fs.readFileSync(productsPath, 'utf-8'))
        : [];
      existing.push(productData);
      fs.writeFileSync(productsPath, JSON.stringify(existing, null, 2));

      resolve(NextResponse.json({ message: 'Product created', product: productData }, { status: 201 }));
    });

    busboy.on('error', (err) => {
      resolve(NextResponse.json({ error: 'Upload failed' }, { status: 500 }));
    });

    const buffer = Buffer.from(await req.arrayBuffer());
    busboy.end(buffer);
  });
}






export async function GET(req: NextRequest) {
  try {
    if (!fs.existsSync(productsPath)) {
      fs.writeFileSync(productsPath, '[]');
    }
    const data = fs.readFileSync(productsPath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}