'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ponytail Ultra: Minimum viable semantic navbar. No framer-motion here, native CSS sticky and basic flex.
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-brand-ink/5">
      <nav className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center gap-3 z-10">
          <Image src="/logo-ssb.png" alt="Golden Boy Soccer School Logo" width={40} height={40} className="object-contain" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-brand-ink leading-tight">GOLDEN BOY</span>
            <span className="font-sans text-[0.65rem] font-medium text-brand-ink/70 uppercase tracking-widest mt-0.5">Soccer School Bekasi</span>
          </div>
        </Link>

        {/* Desktop Menu Links (Centered) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-sans text-sm font-medium text-brand-ink/70 z-10">
          <Link href="/" className="hover:text-brand-accent active:scale-95 transition-all inline-block">
            Home
          </Link>
          <Link href="#about" className="hover:text-brand-accent active:scale-95 transition-all inline-block">
            About
          </Link>
          <Link href="#programs" className="hover:text-brand-accent active:scale-95 transition-all inline-block">
            Programs
          </Link>
          <Link href="#methodology" className="hover:text-brand-accent active:scale-95 transition-all inline-block">
            Instructor
          </Link>
          <Link href="#schedule" className="hover:text-brand-accent active:scale-95 transition-all inline-block">
            Schedule
          </Link>
          <Link href="#facilities" className="hover:text-brand-accent active:scale-95 transition-all inline-block">
            Facilities
          </Link>
        </div>

        {/* CTA & Mobile Toggle (Right) */}
        <div className="flex items-center z-10">
          <a
            href="https://wa.me/6285129292979?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Golden%20Boy%20Soccer%20School"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-brand-ink text-brand-base px-5 py-2.5 rounded-full hover:bg-brand-accent transition-all active:scale-[0.97]"
          >
            Join now
          </a>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-ink hover:text-brand-accent transition-colors flex flex-col justify-center items-center w-8 h-8 relative" aria-label="Toggle Menu">
              <span className={`block w-7 h-[3px] bg-current rounded-full transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45' : '-translate-y-[4.5px]'}`}></span>
              <span className={`block w-7 h-[3px] bg-current rounded-full transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45' : 'translate-y-[4.5px]'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-ink/5 shadow-lg transition-all duration-500 ease-in-out origin-top overflow-hidden ${
          isMenuOpen ? 'opacity-100 max-h-[500px] py-6' : 'opacity-0 max-h-0 py-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-8 gap-6 font-sans text-lg font-medium text-brand-ink">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-accent active:scale-95 active:text-brand-accent transition-all inline-block origin-left">
            Home
          </Link>
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-accent active:scale-95 active:text-brand-accent transition-all inline-block origin-left">
            About
          </Link>
          <Link href="#programs" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-accent active:scale-95 active:text-brand-accent transition-all inline-block origin-left">
            Programs
          </Link>
          <Link href="#methodology" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-accent active:scale-95 active:text-brand-accent transition-all inline-block origin-left">
            Instructor
          </Link>
          <Link href="#schedule" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-accent active:scale-95 active:text-brand-accent transition-all inline-block origin-left">
            Schedule
          </Link>
          <Link href="#facilities" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-accent active:scale-95 active:text-brand-accent transition-all inline-block origin-left">
            Facilities
          </Link>
          <a
            href="https://wa.me/6285129292979?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Golden%20Boy%20Soccer%20School"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-ink text-brand-base px-6 py-3 mt-2 rounded-full hover:bg-brand-accent transition-all w-full text-center block"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
}
