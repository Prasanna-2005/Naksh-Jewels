'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function DNACarousel() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [jewelImages, setJewelImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const urls = data.map((item: any) =>
          item.image?.startsWith('/')
            ? item.image
            : `/products/images/${item.image}`
        );
        // Duplicate for infinite loop feel
        setJewelImages([...urls, ...urls]);
      });
  }, []);

  useEffect(() => {
    if (jewelImages.length && pathRef.current) {
      jewelImages.forEach((_, i) => {
        const el = document.querySelectorAll('.dna-jewel')[i];
        if (el) {
          gsap.to(el, {
            repeat: -1,
            ease: 'none',
            duration: 20,
            motionPath: {
              path: pathRef.current,
              align: pathRef.current,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: i / jewelImages.length,
            },
          });
        }
      });
    }
  }, [jewelImages]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-amber-50 to-pink-50 py-12">
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <path
          ref={pathRef}
          d="M 0 200 Q 150 100 300 200 T 600 200 T 900 200 T 1200 200"
          fill="none"
          stroke="transparent"
        />
      </svg>

      {jewelImages.map((src, i) => (
        <img
          key={i}
          src={src}
          className="dna-jewel absolute w-[200px] h-[200px] rounded-full shadow-2xl border-4 border-amber-500 bg-white object-cover transition-transform duration-300 hover:scale-110"
          alt={`jewel-${i}`}
        />
      ))}
    </div>
  );
}
