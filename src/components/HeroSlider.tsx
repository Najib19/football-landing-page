"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/soccer1.jpg",
  "/soccer2.jpg",
  "/soccer3.jpg",
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-brand-ink">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero background ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/70 to-brand-ink/30 z-10 pointer-events-none" />
    </div>
  );
}
