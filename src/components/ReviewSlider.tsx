"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    quote: "THE ACADEMY COMPLETELY TRANSFORMED MY SON. HE PLAYS WITH A COLD CONFIDENCE I HAVE NEVER SEEN BEFORE.",
    name: "Budi Santoso",
    role: "Orang Tua Siswa U14"
  },
  {
    quote: "PELATIHNYA SANGAT PROFESIONAL. ANAK SAYA SEKARANG LEBIH DISIPLIN DAN MENGERTI TAKTIK PERMAINAN.",
    name: "Hendra Wijaya",
    role: "Orang Tua Siswa U18"
  },
  {
    quote: "FASILITASNYA LUAR BIASA. SANGAT MENDUKUNG PERKEMBANGAN FISIK DAN MENTAL ANAK-ANAK SAAT BERTANDING.",
    name: "Siti Rahmawati",
    role: "Orang Tua Siswa U10"
  },
  {
    quote: "SAYA BANGGA ANAK SAYA BISA BERLATIH DI SINI. PROGRESNYA SANGAT PESAT DALAM 6 BULAN TERAKHIR.",
    name: "Andi Permana",
    role: "Orang Tua Siswa U12"
  },
  {
    quote: "LINGKUNGAN YANG SANGAT POSITIF. BUKAN HANYA SKILL BOLA, TAPI KARAKTER DAN MENTAL JUGA DIBANGUN.",
    name: "Dewi Lestari",
    role: "Orang Tua Siswa U16"
  }
];

export function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 px-8 flex items-center justify-center bg-brand-accent text-white overflow-clip relative min-h-[60vh]">
      <div className="absolute -left-10 -top-20 text-[30rem] font-display opacity-5 pointer-events-none leading-none select-none">"</div>
      
      <Reveal className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <div className="relative flex justify-center items-center w-full min-h-[250px] md:min-h-[300px]">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ease-in-out absolute w-full flex flex-col items-center justify-center ${
                index === currentIndex 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter mb-12">
                "{review.quote}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="font-bold tracking-wide uppercase text-sm">{review.name}</div>
                <div className="text-white/70 text-sm">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      
      {/* Slider indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
