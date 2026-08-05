'use client';

import Image from 'next/image';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { Shield, SealCheck, Target, Trophy, ArrowRight, InstagramLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react';
import { HeroSlider } from '@/components/HeroSlider';
import { ReviewSlider } from '@/components/ReviewSlider';

export default function Home() {
  return (
    <main className="w-full">

      {/* SECTION 1: HERO (Background Image with Left Aligned Text) */}
      <section className="relative w-full min-h-[105dvh] flex flex-col justify-center pt-20 overflow-hidden z-10 shadow-2xl -mb-16 bg-brand-ink">
        {/* Automated Background Slider */}
        <HeroSlider />

        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-start">
          <Reveal className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-8 bg-brand-ink/40 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-white/10">
              <SealCheck className="w-4 h-4 md:w-6 md:h-6 text-brand-accent" weight="bold" />
              <span className="font-sans font-medium tracking-wide text-brand-base/90 uppercase text-[0.65rem] md:text-sm">AKADEMI SEPAK BOLA</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-4 md:mb-6 text-brand-base">
              WUJUDKAN <span className="text-brand-accent">POTENSI</span>
              <br />
              TERBAIK ANAK ANDA
            </h1>
            <p className="font-sans text-sm md:text-lg text-brand-base/80 max-w-[50ch] mb-8 md:mb-10 leading-relaxed">
              Bukan sekadar latihan bola. Kami membentuk disiplin, kerja sama tim, dan rasa percaya diri anak Anda, dibimbing pelatih bersertifikat di lingkungan yang aman dan terstruktur.
            </p>
            <a
              href="#programs"
              className="group flex items-center gap-2 md:gap-3 bg-brand-accent text-brand-ink px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white transition-colors duration-300 shadow-lg inline-flex"
            >
              Join the Academy
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY (Layout Family 3: Asymmetric White-space) */}
      <section id="about" className="relative z-0 pt-40 pb-32 px-8 md:px-16 lg:px-24 border-b border-brand-ink/10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-5/12">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-tight mb-6">
                BEYOND THE <br /> TACTICS
              </h2>
            </Reveal>
          </div>
          <div className="md:w-7/12">
            <Reveal delay={0.2}>
              <p className="font-sans text-xl md:text-2xl text-brand-ink/80 leading-relaxed mb-8">
                Most academies focus strictly on repetitive drills. We focus on cognitive speed. Our players learn to read the game three seconds ahead of the opposition.
              </p>
              <p className="font-sans text-brand-ink/60 leading-relaxed">
                Golden Boy Soccer School integrates European tactical models with intensive physical conditioning. We isolate weaknesses, analyze biomechanics, and engineer a customized growth path for every child that steps onto our pitch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROGRAMS (Layout Family 4: Bento Grid 1+2) */}
      <section id="programs" className="py-32 px-8 md:px-16 lg:px-24 bg-brand-base border-b border-brand-ink/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">OUR PATHWAYS</h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Cell 1: Large */}
            <StaggerItem className="md:col-span-8 bg-brand-ink rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <Target className="w-10 h-10 text-brand-accent mb-6" weight="bold" />
                <h3 className="font-display text-4xl text-white tracking-tight mb-4">Elite Pro Track</h3>
                <p className="font-sans text-white/70 max-w-md text-lg">Designed for competitive teenagers targeting professional trials or college scholarships. Intensive daily sessions.</p>
              </div>
              <Image src="https://picsum.photos/seed/elite/800/600" alt="Elite training" fill className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity" />
            </StaggerItem>

            {/* Cells 2 & 3: Stacked Small */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6 h-[600px] md:h-full">
              <StaggerItem className="bg-white rounded-[2rem] p-8 flex flex-col justify-between border border-brand-ink/5">
                <Trophy className="w-8 h-8 text-brand-ink mb-4" weight="bold" />
                <div>
                  <h3 className="font-display text-2xl tracking-tight mb-2">Development</h3>
                  <p className="font-sans text-brand-ink/70 text-sm">Ages 9 to 13. Mastering technical foundations and spatial awareness.</p>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-brand-accent rounded-[2rem] p-8 flex flex-col justify-between text-white">
                <Shield className="w-8 h-8 mb-4 opacity-80" weight="bold" />
                <div>
                  <h3 className="font-display text-2xl tracking-tight mb-2">Grassroots</h3>
                  <p className="font-sans text-white/80 text-sm">Ages 5 to 8. Joy of the game, basic motor skills, and teamwork.</p>
                </div>
              </StaggerItem>
            </div>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 5: METHODOLOGY (Layout Family 5: 2-Column Zig-Zag) */}
      <section id="methodology" className="py-32 px-8 md:px-16 lg:px-24 bg-white border-b border-brand-ink/10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 w-full relative h-[400px] rounded-[2rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/tactics/800/600" alt="Tactical board" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <Reveal>
                <div className="font-mono text-sm text-brand-accent mb-4">01. COGNITIVE SPEED</div>
                <h3 className="font-display text-4xl tracking-tight mb-6">Scanning & Vision</h3>
                <p className="font-sans text-brand-ink/70 text-lg leading-relaxed">
                  Before a player receives the ball, they must know three possible passes. We drill peripheral vision and split-second decision making until it becomes pure instinct.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 w-full relative h-[400px] rounded-[2rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/physical/800/600" alt="Physical training" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <Reveal>
                <div className="font-mono text-sm text-brand-accent mb-4">02. BIOMECHANICS</div>
                <h3 className="font-display text-4xl tracking-tight mb-6">Explosive Agility</h3>
                <p className="font-sans text-brand-ink/70 text-lg leading-relaxed">
                  Linear speed is not enough. Football requires deceleration and change of direction. Our sports science team engineers agility programs specific to joint mobility and core strength.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5.5: SCHEDULE */}
      <section id="schedule" className="py-32 px-8 md:px-16 lg:px-24 bg-brand-base border-b border-brand-ink/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6">TRAINING SCHEDULE</h2>
            <p className="font-sans text-brand-ink/70 max-w-lg">Konsistensi adalah kunci. Berikut adalah jadwal latihan rutin untuk setiap kategori usia di akademi kami.</p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Schedule Card 1 */}
            <StaggerItem className="bg-white rounded-[2rem] p-8 border border-brand-ink/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ink/5 rounded-bl-full z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10 w-12 h-12 bg-brand-ink text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl">U10</span>
              </div>
              <h3 className="relative z-10 font-display text-2xl tracking-tight mb-6">Grassroots</h3>
              <ul className="relative z-10 space-y-4 font-sans text-sm text-brand-ink/70">
                <li className="flex justify-between items-center border-b border-brand-ink/5 pb-2">
                  <span className="font-semibold text-brand-ink">Selasa</span>
                  <span>15:30 - 17:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-brand-ink/5 pb-2">
                  <span className="font-semibold text-brand-ink">Kamis</span>
                  <span>15:30 - 17:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-brand-ink">Sabtu</span>
                  <span>08:00 - 10:00</span>
                </li>
              </ul>
            </StaggerItem>

            {/* Schedule Card 2 (Highlighted) */}
            <StaggerItem className="bg-brand-accent text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10 w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl">U14</span>
              </div>
              <h3 className="relative z-10 font-display text-2xl tracking-tight mb-6">Development</h3>
              <ul className="relative z-10 space-y-4 font-sans text-sm text-white/90">
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-semibold text-white">Senin</span>
                  <span>16:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-semibold text-white">Rabu</span>
                  <span>16:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-semibold text-white">Jumat</span>
                  <span>16:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-white">Minggu</span>
                  <span>Matchday</span>
                </li>
              </ul>
            </StaggerItem>

            {/* Schedule Card 3 */}
            <StaggerItem className="bg-brand-ink text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-bl-full z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10 w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-display font-bold text-xl">U18</span>
              </div>
              <h3 className="relative z-10 font-display text-2xl tracking-tight mb-6">Elite Pro Track</h3>
              <ul className="relative z-10 space-y-4 font-sans text-sm text-white/70">
                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Selasa</span>
                  <span>19:00 - 21:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Kamis</span>
                  <span>19:00 - 21:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-semibold text-white">Sabtu</span>
                  <span>15:30 - 17:30</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-white">Minggu</span>
                  <span>Matchday</span>
                </li>
              </ul>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 6: FACILITIES (Layout Family 6: Masonry Style Grid) */}
      <section id="facilities" className="py-32 px-8 md:px-16 lg:px-24 bg-brand-ink text-brand-base">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6">PRO FACILITIES</h2>
            <p className="font-sans text-brand-base/60 max-w-lg">Everything a player needs to recover, analyze, and perform at the absolute peak.</p>
          </Reveal>

          <StaggerGroup className="columns-1 md:columns-3 gap-6 space-y-6">
            <StaggerItem className="relative h-[300px] rounded-[1.5rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/pitch/600/800" alt="Pitch" fill className="object-cover opacity-80" />
            </StaggerItem>
            <StaggerItem className="relative h-[450px] rounded-[1.5rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/gym/600/900" alt="Gym" fill className="object-cover opacity-80" />
            </StaggerItem>
            <StaggerItem className="relative h-[250px] rounded-[1.5rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/med/600/400" alt="Medical" fill className="object-cover opacity-80" />
            </StaggerItem>
            <StaggerItem className="relative h-[400px] rounded-[1.5rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/locker/600/700" alt="Locker" fill className="object-cover opacity-80" />
            </StaggerItem>
            <StaggerItem className="relative h-[300px] rounded-[1.5rem] overflow-hidden">
              <Image src="https://picsum.photos/seed/tech/600/500" alt="Tech" fill className="object-cover opacity-80" />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 7: EDITORIAL QUOTE / REVIEWS */}
      <ReviewSlider />

      {/* SECTION 8: FOOTER (Standard Sports Layout) */}
      <footer className="bg-[#111111] text-brand-base pt-24 pb-12 px-8 md:px-16 lg:px-24 border-t border-brand-ink/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6 md:col-span-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo-ssb.png" alt="Golden Boy Soccer School Logo" width={32} height={32} className="object-contain" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl tracking-tight leading-tight text-white">GOLDEN BOY</span>
                  <span className="font-sans text-[0.7rem] font-medium text-brand-base/70 uppercase tracking-widest mt-0.5">Soccer School Bekasi</span>
                </div>
              </div>
              <p className="font-sans text-brand-base/60 text-sm leading-relaxed max-w-xs">Membangun kecerdasan taktikal, ketahanan fisik, dan karakter elit untuk generasi atlet sepakbola berikutnya.</p>
            </Reveal>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.2}>
              <h3 className="font-display font-bold text-lg text-white mb-4 uppercase tracking-wide">Contact Us</h3>
              <ul className="flex flex-col gap-4 font-sans text-brand-base/60 text-sm">
                <li>
                  <span className="block text-white/70 text-[0.65rem] mb-1 uppercase tracking-wider font-semibold">Email</span>
                  <a href="mailto:info@goldenboybekasi.com" className="hover:text-brand-accent transition-colors">
                    info@goldenboybekasi.com
                  </a>
                </li>
                <li>
                  <span className="block text-white/70 text-[0.65rem] mb-1 uppercase tracking-wider font-semibold">Phone</span>
                  <a href="tel:+6285129292979" className="hover:text-brand-accent transition-colors">
                    +62 851-2929-2979
                  </a>
                </li>
                <li>
                  <span className="block text-white/70 text-[0.65rem] mb-1 uppercase tracking-wider font-semibold">Location</span>
                  <span>
                    Jl. Raya Perjuangan-Teluk Pucung, RT.007/RW.002, Tlk. Pucung, <br />
                    Kec. Bekasi Utara, Kota Bks, Jawa Barat 17121
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Column 4: Social & CTA */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.3}>
              <h3 className="font-display font-bold text-lg text-white mb-4 uppercase tracking-wide">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/goldenboy.soccer/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[#E1306C] hover:text-white transition-colors group" aria-label="Instagram">
                  <InstagramLogo className="w-5 h-5 text-brand-base/70 group-hover:text-white transition-colors" weight="fill" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-white hover:text-black transition-colors group" aria-label="TikTok">
                  <TiktokLogo className="w-5 h-5 text-brand-base/70 group-hover:text-black transition-colors" weight="fill" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[#FF0000] hover:text-white transition-colors group" aria-label="YouTube">
                  <YoutubeLogo className="w-5 h-5 text-brand-base/70 group-hover:text-white transition-colors" weight="fill" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-brand-base/10 pt-8 flex justify-center items-center text-brand-base/40 text-xs text-center">
          <p>&copy; 2026 Golden Boy Soccer School. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
