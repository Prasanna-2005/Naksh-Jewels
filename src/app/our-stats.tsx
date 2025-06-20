"use client";

import Typography from "@mui/material/Typography";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "10,000+",
    title: "Happy Customers",
  },
  {
    count: "500+",
    title: "Unique Designs",
  },
  {
    count: "100%",
    title: "Certified Jewellery",
  },
  {
    count: "24/7",
    title: "Customer Support",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        
        <div
          className="relative rounded-3xl p-10 shadow-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #fbc2eb 50%, #a6c1ee 100%)",
          }}
        >
          {/* Animated Gradient Overlay */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(251,194,235,0.4) 0%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(166,193,238,0.4) 0%, transparent 70%)",
                animation: "gradientMove 8s ease-in-out infinite alternate",
                pointerEvents: "none",
              }}
            />
            {/* 3D Animated Sparkles */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <svg width="100%" height="100%">
                <circle
                  cx="20%"
                  cy="30%"
                  r="8"
                  fill="#fff"
                  opacity="0.7"
                >
                  <animate
                    attributeName="r"
                    values="8;14;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="80%"
                  cy="60%"
                  r="5"
                  fill="#fff"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values="5;10;5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
            {/* Content */}
            <div className="relative z-20">
              <Typography
                variant="h2"
                className="text-6xl font-extrabold leading-tight tracking-tight text-black drop-shadow-lg"
                color="textPrimary"
                style={{
                  color: "#000",
                  filter: "drop-shadow(0 2px 8px rgba(166,193,238,0.2))",
                }}
              >
                Our Stats
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-5 w-full text-lg text-gray-700 lg:w-9/12"
                color="textSecondary"
                style={{
                  color: "#000",
                  opacity: 0.85,
                }}
              >
                Experience timeless elegance and masterful craftsmanship. Join thousands who trust our certified jewellery, explore exclusive designs, and enjoy dedicated 24/7 support—crafted for you.
              </Typography>
              {/* Animated Stats */}
              
            </div>
            {/* Keyframes for gradient animation */}
            <style jsx>{`
              @keyframes gradientMove {
                0% {
                  background-position: 0% 50%, 100% 50%;
                }
                100% {
                  background-position: 100% 50%, 0% 50%;
                }
              }
            `}</style>
        </div>
      </div>
      <div>
        <div className="mt-10 grid grid-cols-2 gap-8">
          {STATS.map((props, key) => (
            <div
              key={key}
              className="relative rounded-2xl p-6 shadow-xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #f8fafc 0%, #fbc2eb 50%, #a6c1ee 100%)",
              }}
            >
              {/* Animated Gradient Overlay for Stat */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(251,194,235,0.25) 0%, transparent 70%), radial-gradient(circle at 60% 60%, rgba(166,193,238,0.25) 0%, transparent 70%)",
                  animation: "gradientMove 8s ease-in-out infinite alternate",
                  pointerEvents: "none",
                }}
              />
              {/* 3D Sparkle for Stat */}
              <div className="pointer-events-none absolute inset-0 z-10">
                <svg width="100%" height="100%">
                  <circle
                    cx="60%"
                    cy="40%"
                    r="4"
                    fill="#fff"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="4;7;4"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;1;0.6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              {/* Stat Content */}
              <div className="relative z-20 flex flex-col items-start">
                <span
                  className="text-4xl font-extrabold text-black"
                  style={{
                    color: "#000",
                    filter: "drop-shadow(0 2px 8px rgba(166,193,238,0.15))",
                  }}
                >
                  {props.count}
                </span>
                <span
                  className="mt-2 text-lg font-medium text-black"
                  style={{
                    color: "#000",
                    opacity: 0.85,
                  }}
                >
                  {props.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
        </div>
    </section>
  );
}

export default OurStats;
