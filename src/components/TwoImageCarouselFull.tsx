'use client';

import { useEffect, useState } from 'react';

export default function TwoImageCarouselFull() {
  const [jewels, setJewels] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const urls = data.map((item: any) =>
          item.image?.startsWith('/')
            ? item.image
            : `/products/images/${item.image}`
        );
        setJewels(urls);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % jewels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [jewels]);

  const displayed = [
    jewels[index % jewels.length],
    jewels[(index + 1) % jewels.length],
     jewels[(index + 2) % jewels.length],
  ];

  return (
    <div className="w-full h-[85vh] flex flex-row transition-all duration-700 ease-in-out">
      {displayed.map((src, i) => (
        <div
          key={i}
          className="w-1/2 h-full relative overflow-hidden group"
        >
          <img
            src={src}
            alt={`jewel-${i}`}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-yellow-100/10 " />
        </div>
      ))}
    </div>
  );
}
