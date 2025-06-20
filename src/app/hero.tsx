"use client";

import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Custom keyframes for advanced text and background animation
const textGradient =
  "bg-gradient-to-r from-yellow-400 via-pink-500 to-amber-600 bg-clip-text text-transparent";
const shadowGlow =
  "drop-shadow-[0_2px_20px_rgba(255,215,0,0.5)]";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  // For animated background sparkles
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sparkleContainer = sparkleRef.current;
    if (!sparkleContainer) return;
    const sparkles: HTMLDivElement[] = [];
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("div");
      s.className =
        "absolute w-2 h-2 rounded-full bg-yellow-300 opacity-60 animate-sparkle pointer-events-none";
      s.style.top = `${Math.random() * 100}%`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.animationDelay = `${Math.random() * 3}s`;
      sparkleContainer.appendChild(s);
      sparkles.push(s);
    }
    return () => {
      sparkles.forEach((s) => sparkleContainer.removeChild(s));
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat overflow-hidden">
      {/* Animated sparkles */}
      <div ref={sparkleRef} className="absolute inset-0 z-20 pointer-events-none" />
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <motion.div
          className="container relative z-30 my-auto mx-auto grid place-items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              color="white"
              className={`mb-4 font-extrabold text-5xl md:text-6xl tracking-tight ${textGradient} ${shadowGlow} animate-title-flicker`}
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.08em" }}
            >
              <Typewriter
                options={{
                  strings: ["NAKSH JEWELS"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </Typography>
          </motion.div>

         
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              color="white"
              className={`lg:max-w-3xl mb-4 font-bold text-3xl md:text-4xl ${shadowGlow} animate-zoom-in`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <Typewriter
                options={{
                  strings: [" Sparkle Every Moment"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 15,
                }}
              />
            </Typography>
          </motion.div>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes sparkle {
          0% { opacity: 0.6; transform: scale(1) translateY(0); }
          50% { opacity: 1; transform: scale(1.6) translateY(-10px); }
          100% { opacity: 0.6; transform: scale(1) translateY(0); }
        }
        .animate-sparkle {
          animation: sparkle 2.5s infinite;
        }
        @keyframes title-flicker {
          0%, 100% { filter: brightness(1.1) drop-shadow(0 0 12px gold); }
          45% { filter: brightness(1.5) drop-shadow(0 0 24px gold); }
          50% { filter: brightness(0.8) drop-shadow(0 0 4px gold); }
          55% { filter: brightness(1.5) drop-shadow(0 0 24px gold); }
        }
        .animate-title-flicker {
          animation: title-flicker 2.8s infinite;
        }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-80px) scale(0.8); }
          60% { opacity: 1; transform: translateX(10px) scale(1.05);}
          100% { opacity: 1; transform: translateX(0) scale(1);}
        }
        .animate-slide-in {
          animation: slide-in 1.2s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes zoom-in {
          0% { opacity: 0; transform: scale(0.7) rotate(-6deg);}
          60% { opacity: 1; transform: scale(1.08) rotate(2deg);}
          100% { opacity: 1; transform: scale(1) rotate(0);}
        }
        .animate-zoom-in {
          animation: zoom-in 1.3s cubic-bezier(0.22,1,0.36,1) both;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}

export default Hero;

