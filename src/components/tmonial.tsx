"use client";

import React, { useRef, useEffect, useState } from "react";
import { 
  Typography, 
  IconButton,
  Card,
  CardBody
} from "@material-tailwind/react";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from "@heroicons/react/24/solid";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Happy Customer",
    content: "The diamond necklace I purchased exceeded my expectations. The craftsmanship is exquisite and it looks even more beautiful in person than on the website.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Jewelry Collector",
    content: "I've bought multiple pieces from Naksh Jewels and each one has been perfect. Their gold purity is unmatched and the designs are timeless.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Bride",
    content: "My wedding jewelry set was custom made and absolutely stunning. The team understood exactly what I wanted and delivered beyond my dreams.",
    rating: 4
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Gift Buyer",
    content: "The pearl earrings I bought for my wife's anniversary were exquisite. The packaging and presentation made it feel extra special.",
    rating: 5
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "Frequent Buyer",
    content: "The after-sales service is exceptional. They helped resize my ring perfectly when I needed adjustment.",
    rating: 5
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "Investor",
    content: "As someone who collects jewelry as investments, I appreciate Naksh's certified pieces and transparent pricing.",
    rating: 5
  }
];

export function TestimonialCarousel() {
  const CARD_WIDTH = 370; // px
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate testimonials for seamless loop
  const carouselTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  // Animation control
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (isHovered) {
      track.style.animationPlayState = "paused";
    } else {
      track.style.animationPlayState = "running";
    }
  }, [isHovered]);

  return (
    <section 
      className="py-16 px-8 relative overflow-hidden"
      style={{ background: `linear-gradient(to bottom, #F8FAFC 0%, white 100%)` }}
    >
      <div className="container mx-auto text-center mb-12">
        <Typography 
          variant="h2" 
          className="mb-4 font-bold"
          style={{ color: "#0F172A" }}
        >
          Customer Testimonials
        </Typography>
        <Typography 
          variant="lead" 
          className="mx-auto max-w-2xl"
          style={{ color: "#0F172A" }}
        >
          Hear what our valued customers say about their Naksh Jewels experience
        </Typography>
      </div>

      <div 
        className="container mx-auto relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ overflow: "hidden" }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            width: `${CARD_WIDTH * carouselTestimonials.length}px`,
            animation: `carousel-spin 30s linear infinite`,
          }}
        >
          {carouselTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              style={{ minWidth: `${CARD_WIDTH}px`, maxWidth: `${CARD_WIDTH}px` }}
              className="px-4"
            >
              <Card 
                className="shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{ borderColor: "#D4AF37" }}
              >
                <CardBody className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Typography 
                    variant="paragraph" 
                    className="mb-6 italic"
                    style={{ color: "#0F172A" }}
                  >
                    "{testimonial.content}"
                  </Typography>
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#D4AF37" }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <Typography 
                        variant="h6"
                        style={{ color: "#0F172A" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="small" 
                        className="font-normal"
                        style={{ color: "#B78B20" }}
                      >
                        {testimonial.role}
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        {/* Optionally, you can keep the navigation arrows if you want manual control */}
      </div>
      <style>
        {`
          @keyframes carousel-spin {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${CARD_WIDTH * TESTIMONIALS.length}px); }
          }
        `}
      </style>
    </section>
  );
}