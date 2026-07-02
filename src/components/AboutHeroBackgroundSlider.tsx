"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/hero2/slide-1.png",
  "/hero2/slide-2.png",
  "/hero2/slide-3.png",
  "/hero2/slide-4.png",
];

export function AboutHeroBackgroundSlider() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,194,26,0.16),transparent_34%),linear-gradient(90deg,rgba(15,53,84,0.9)_0%,rgba(15,53,84,0.82)_42%,rgba(23,78,115,0.58)_100%)]" />
    </div>
  );
}
