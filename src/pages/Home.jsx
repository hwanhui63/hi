import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { concertData } from '../data/concert';

export default function Home() {
  return (
    <div className="relative min-h-screen text-train-ivory overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Fullscreen Passing Train Video                           */}
      {/* ========================================================================= */}
      <section className="relative h-screen max-h-[900px] min-h-[620px] bg-black flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 overflow-hidden">
        {/* Fullscreen Background Video (지나가는 영상 풀 화면) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-95 contrast-110"
          >
            <source src={concertData.assets.journeyVideo} type="video/mp4" />
          </video>
          {/* Gentle cinematic gradient so navbar and text are legible, while passing train window is vivid */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />

          {/* Passing Lantern Glow Streaks */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ x: ['120%', '-120%'], opacity: [0, 0.35, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
              className="absolute top-1/3 w-72 h-32 bg-amber-400/15 blur-3xl transform -skew-x-12"
            />
          </div>
        </div>

        {/* Central Content (Floating seamlessly over the fullscreen passing train) */}
        <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6 sm:space-y-7">
          {/* Top Pill: "26-2 Liquid Concert" */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-train-gold/60 bg-black/80 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-train-gold animate-pulse" />
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-train-champagne font-semibold">
              26-2 Liquid Concert
            </span>
            <Sparkles className="w-3.5 h-3.5 text-train-gold animate-pulse" />
          </motion.div>

          {/* Main Title: "Train 1225" (Pinyon Script 안깨지는 폰트 적용) & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="font-script text-7xl sm:text-9xl md:text-[10.5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#EBD39A] to-[#B88B4A] drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)] select-none px-4 py-2 leading-normal">
              Train 1225
            </h1>
            <p className="font-korean text-base sm:text-xl md:text-2xl text-train-ivory drop-shadow-md font-medium tracking-wide">
              다음 역은, 당신이 가장 사랑할 크리스마스
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3"
          >
            <Link
              to="/concert"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-2xl border border-train-champagne bg-[#5d1212] hover:bg-[#781818] text-train-champagne font-serif text-sm tracking-[0.2em] uppercase font-bold shadow-brass hover:shadow-brass-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-train-champagne group-hover:rotate-45 transition-transform" />
              <span>BOARD THE TRAIN</span>
              <ArrowRight className="w-4 h-4 text-train-champagne group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/info"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-train-gold/60 bg-black/80 hover:bg-[#5d1212] text-train-ivory/90 font-serif text-xs tracking-wider uppercase hover:text-train-champagne hover:border-train-gold transition-colors backdrop-blur-sm"
            >
              승차권 확인
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT LIQUID: The Blood of Christ                                      */}
      {/* ========================================================================= */}
      <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 carriage-wall-section overflow-hidden border-t border-train-gold/30 scroll-mt-10">
        <div className="relative max-w-6xl mx-auto">
          {/* Top Heading: THE BLOOD OF CHRIST / LIQUID (첨부 이미지 레이아웃 반영) */}
          <div className="text-center space-y-1.5 mb-12 sm:mb-16">
            <p className="font-serif text-xs sm:text-sm tracking-[0.35em] text-train-gold uppercase font-semibold">
              THE BLOOD OF CHRIST
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-train-champagne font-bold tracking-wider drop-shadow-md">
              LIQUID
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Transparent Cut-out Logo (누끼 딴 로고) */}
            <div className="lg:col-span-5 flex items-center justify-center p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center"
              >
                {/* Subtle ambient red/warm backlight glow */}
                <div className="absolute inset-0 w-full h-full bg-red-600/15 blur-3xl rounded-full pointer-events-none" />
                <img
                  src="/assets/liquid-logo-cutout.png"
                  alt="LIQUID — The Blood of Christ Logo"
                  className="relative z-10 w-full max-w-[270px] sm:max-w-[330px] md:max-w-[360px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(255,27,0,0.3)] select-none pointer-events-none hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* Right Column: Stacked Rounded Burgundy Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Box 1: 리퀴드 소개 (모서리 둥글게 깎은 블록) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#5d1212]/95 border border-train-gold/50 shadow-brass overflow-hidden"
              >
                {/* Faint ambient stars */}
                <div className="absolute top-3 right-8 w-1 h-1 rounded-full bg-train-champagne/40 animate-pulse pointer-events-none" />
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 rounded-full bg-train-gold/30 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-train-champagne/30 pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-train-gold/30">
                  <span className="font-serif text-xs sm:text-sm tracking-wider text-train-gold font-medium">
                    리퀴드 소개
                  </span>
                  <span className="font-serif text-[11px] sm:text-xs tracking-[0.2em] text-train-champagne/80 font-semibold uppercase">
                    ABOUT LIQUID
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-base sm:text-lg text-train-champagne font-bold mt-3.5 mb-3 leading-snug">
                  “예수님의 보혈을 가슴에 품고 음악하는 동아리”
                </h3>

                {/* Card Content */}
                <div className="space-y-2.5 font-korean text-xs sm:text-[13px] text-train-ivory/90 leading-relaxed">
                  <p>
                    Liquid는 한동대학교 창립 비전에 부합하는 한동 유일 크리스천 밴드로서 십자가에서 피 흘리신 예수님을 기억하며, 다양한 장르의 밴드 공연을 통한 하나님 나라의 확장을 목적으로 합니다.
                  </p>
                  <p>
                    정모의 시작을 예배로 드리고 있으며, 1학기는 길거리 공연, 2학기 자체공연, 그리고 매주 과제곡을 통해 연습하고 있습니다.
                  </p>
                  <p>
                    국내 문화공연사역단체인 MNT에 속해 있어, 매주 정기예배와 셀 모임, 기도회, 그리고 여름사역과 겨울 태국 선교에 참여하고 있습니다.
                  </p>
                </div>

                {/* Card Button: Pill Button matching user mockup */}
                <div className="pt-4 mt-1">
                  <Link
                    to="/concert#members"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-train-gold/60 bg-[#3d0b0b]/80 hover:bg-[#781818] text-train-champagne text-xs font-serif tracking-wider uppercase transition-all duration-200 hover:shadow-brass hover:border-train-champagne"
                  >
                    <span>TRAIN 1225 멤버</span>
                    <span className="text-sm font-sans">→</span>
                  </Link>
                </div>
              </motion.div>

              {/* Box 2: 찬양과 고백 (시편 33:3) (모서리 둥글게 깎은 블록) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#5d1212]/95 border border-train-gold/50 shadow-brass overflow-hidden"
              >
                {/* Faint ambient stars */}
                <div className="absolute top-4 left-8 w-1.5 h-1.5 rounded-full bg-train-champagne/35 animate-pulse pointer-events-none" />
                <div className="absolute bottom-5 right-10 w-1 h-1 rounded-full bg-train-gold/40 pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-train-gold/30">
                  <span className="font-serif text-xs sm:text-sm tracking-wider text-train-gold font-medium">
                    찬양과 고백
                  </span>
                  <span className="font-serif text-[11px] sm:text-xs tracking-[0.2em] text-train-champagne/80 font-semibold uppercase">
                    PSALM 33:3
                  </span>
                </div>

                {/* Centered Main Verse */}
                <div className="text-center pt-4 pb-2 space-y-2">
                  <h3 className="font-serif text-lg sm:text-2xl text-train-champagne font-bold leading-snug">
                    “새 노래로 그를 노래하며<br />즐거운 소리로 아름답게 연주할지어다”
                  </h3>

                  <p className="font-serif text-xs text-train-gold/85 tracking-widest uppercase">
                    — 시편 33:3 —
                  </p>

                  <p className="font-korean text-xs sm:text-sm text-train-ivory/90 leading-relaxed max-w-lg mx-auto pt-1">
                    십자가의 보혈과 한결같은 그리스도의 은혜를 기억하며, 우리의 손과 목소리에 담긴 선율로 하나님 나라를 아름답게 선포합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
