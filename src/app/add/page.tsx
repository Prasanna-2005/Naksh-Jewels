'use client';
import AddProductForm from '@/components/AddProductForm';
import { Navbar, Footer } from '@/components';

// Gold/jewelry themed Unsplash background
const bgUrl = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80";

export default function AddPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen px-6 py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(44,53,100,0.7), rgba(212,175,55,0.4)), url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AddProductForm />
      </main>
      <Footer />
    </>
  );
}
