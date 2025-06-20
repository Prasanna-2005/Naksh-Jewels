"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Add a fade-in and accordion expand/collapse animation using Tailwind and CSS
const FAQS = [
  {
    title: "1. How do I place an order for jewelry?",
    desc: "You can place an order by browsing our online catalog, selecting your desired items, and completing the checkout process. For custom orders, please contact our customer service team.",
  },
  {
    title: "2. What payment methods do you accept?",
    desc: "We accept all major credit cards, debit cards, net banking, and popular digital wallets. Cash on delivery is also available for select locations.",
  },
  {
    title: "3. Can I return or exchange my jewelry?",
    desc: "Yes, we offer a hassle-free return and exchange policy within 15 days of delivery, provided the jewelry is unused and in its original packaging. Please refer to our Returns & Exchanges page for more details.",
  },
  {
    title: "4. Do you provide jewelry customization services?",
    desc: "Absolutely! We offer customization services for most of our jewelry pieces. You can choose your preferred metal, gemstone, and design. Contact us to discuss your requirements.",
  },
  {
    title: "5. How do I care for and clean my jewelry?",
    desc: "To maintain the shine and quality of your jewelry, store it in a dry place, avoid contact with chemicals, and clean it regularly with a soft cloth. For detailed care instructions, visit our Jewelry Care page.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(null);

  // For fade-in animation on mount
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-8 px-4 lg:py-20 bg-gradient-to-br from-white via-yellow-50 to-yellow-100 min-h-[80vh]">
      <div
        className={`container mx-auto transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center mb-10">
          <Typography
            variant="h2"
            color="teal"
            className="mb-2 font-playfair text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-teal-600 to-teal-400 bg-clip-text text-transparent animate-gradient-x"
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-6 max-w-xl !text-gray-600"
          >
            Everything you need to know about shopping for fine jewellery online.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20 space-y-4">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key}
              className="border border-amber-100 shadow-lg rounded-xl transition-transform duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur"
              icon={
                <span
                  className={`inline-block transition-transform duration-300 ${
                    open === key ? "rotate-90 text-amber-500" : "rotate-0 text-gray-400"
                  }`}
                >
                  ▶
                </span>
              }
            >
              <AccordionHeader
                className={`text-left text-lg font-semibold px-6 py-4 cursor-pointer transition-colors duration-300 ${
                  open === key ? "text-amber-600" : "text-gray-900"
                }`}
                onClick={() => setOpen(open === key ? null : key)}
              >
                {title}
              </AccordionHeader>
              <AccordionBody>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open === key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } px-6 pb-4`}
                >
                  <p className="font-normal text-gray-700">{desc}</p>
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
}

export default Faq;
