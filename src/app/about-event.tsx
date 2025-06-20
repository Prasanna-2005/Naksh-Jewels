"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Exquisite Craftsmanship",
    description:
      "Discover jewelry pieces meticulously crafted by skilled artisans, blending tradition with modern elegance.",
    subTitle: "Quality",
  },
  {
    title: "Unique Collections",
    description:
      "Explore a wide range of exclusive designs, from timeless classics to contemporary styles, perfect for every occasion.",
    subTitle: "Variety",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
   
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Shop With Us?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to NAKSH JEWELS, your destination for premium jewelry. Whether you&apos;re searching for a special gift or a statement piece for yourself, our curated collections offer something for everyone. Experience the beauty, quality, and service that set us apart.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Trusted Service"
            subTitle="Customer Care"
            description="Enjoy a seamless shopping experience with secure payments, fast shipping, and dedicated customer support."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
