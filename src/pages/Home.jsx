import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Instagram,
  Music,
  Maximize2,
  X,
  Volume2,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { clubData } from '../data/club';
import { BrassBorder, VintageDivider, ScriptHeading } from '../components/common/BrassBorder';

export default function Home() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-train-bg text-train-ivory overflow-hidden pt-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Welcome Aboard                                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
        {/* Train Carriage Interior Styling (Wood Vignette + Sconces) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#140b0a]/70 to-[#0c0606] z-10" />

        {/* Train Window Frame Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-20 w-full max-w-4xl mx-auto rounded-3xl p-3 sm:p-5 md:p-6 bg-gradient-to-b from-[#2e1914] via-[#1c0f0d] to-[#140b0a] border-2 border-train-gold/70 shadow-brass-lg"
        >
          {/* Brass Rivets on Outer Frame */}
          <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-train-champagne shadow" />
          <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-train-champagne shadow" />
          <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-train-champagne shadow" />
          <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-train-champagne shadow" />
          <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-2 rounded-full bg-train-champagne shadow" />
          <div className="absolute top-1/2 right-2 -translate-y-1/2 w-2 h-2 rounded-full bg-train-champagne shadow" />

          {/* Window Glass Pane Interior */}
          <div className="relative rounded-2xl overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[620px] flex flex-col items-center justify-between p-6 sm:p-10 border border-train-gold/40 shadow-window-inner">
            {/* Background: Video / Atmospheric Night Canvas */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 scale-105 filter brightness-90 contrast-110"
              >
                <source src={concertData.assets.journeyVideo} type="video/mp4" />
              </video>
              {/* Cold Dark Night Overlay with Warm Center Tree Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d1624]/60 via-[#180d0c]/40 to-[#140b0a]/90" />
              <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
            </div>

            {/* Top Bar of Window: "Liquid on Board" */}
            <div className="relative z-10 text-center space-y-1">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-train-gold/50 bg-train-bg/80 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-train-gold animate-pulse" />
                <span className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-train-champagne font-semibold">
                  {concertData.subtitle}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-train-gold animate-pulse" />
              </motion.div>
              <p className="font-serif text-[10px] tracking-[0.2em] text-train-ivory/60 uppercase">
                {concertData.season}
              </p>
            </div>

            {/* Center: "Train 1225" Title & Theme */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10 text-center py-6 sm:py-8"
            >
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-train-ivory drop-shadow-md">
                TRAIN
              </h1>
              <div className="font-script text-6xl sm:text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2BF] via-[#EBD39A] to-[#B88B4A] drop-shadow-lg -mt-3 sm:-mt-6">
                1225
              </div>
              <p className="font-korean text-sm sm:text-base text-train-ivory/90 mt-2 max-w-md mx-auto drop-shadow">
                어둠을 가르고 빛으로 달리는 2026 겨울 야간열차
              </p>
            </motion.div>

            {/* Bottom: Dates, Venue & CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative z-10 w-full max-w-lg text-center space-y-4"
            >
              {/* Departure Info Plaque */}
              <div className="px-4 py-2.5 rounded-lg border border-train-gold/30 bg-train-bg/85 backdrop-blur-md shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-train-ivory/90">
                  <span className="flex items-center gap-1.5 font-serif text-train-champagne font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-train-gold" />
                    12/04 (FRI) 20:30
                  </span>
                  <span className="text-train-gold/40">|</span>
                  <span className="flex items-center gap-1.5 font-serif text-train-champagne font-semibold">
                    12/05 (SAT) 14:00, 16:00
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-1 text-[11px] sm:text-xs text-train-ivory/70">
                  <MapPin className="w-3 h-3 text-train-gold" />
                  <span>한동대학교 학생회관(학관) 104호</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/concert"
                  className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-md border border-train-champagne bg-gradient-to-r from-[#591C14] via-[#7B2418] to-[#40120B] text-train-champagne font-serif text-sm tracking-[0.2em] uppercase font-bold shadow-brass hover:shadow-brass-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 text-train-champagne group-hover:rotate-45 transition-transform" />
                  <span>BOARD THE TRAIN</span>
                  <ArrowRight className="w-4 h-4 text-train-champagne group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/info"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-md border border-train-gold/50 bg-train-bg/80 text-train-ivory/90 font-serif text-xs tracking-wider uppercase hover:text-train-champagne hover:border-train-gold transition-colors"
                >
                  승차권 확인
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT LIQUID: The Band & The Vision                                    */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScriptHeading
          subtitle="ABOUT THE ORCHESTRA"
          title="한동대학교 크리스천 공연 동아리 LIQUID"
          titleEn="Liquid Fellowship on Board"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Vintage Plaque & Story */}
          <div className="md:col-span-7 space-y-6">
            <BrassBorder innerClassName="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-train-gold/30">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  COMMUNITY RECORD
                </span>
                <span className="font-serif text-xs text-train-ivory/60">
                  HANDONG GLOBAL UNIV.
                </span>
              </div>

              <h3 className="font-serif text-xl text-train-champagne font-bold">
                "찬양과 삶으로 하나님을 노래하는 공동체"
              </h3>

              {clubData.description.map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-train-ivory/80 leading-relaxed font-korean">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={clubData.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-train-gold/50 bg-train-bg/60 text-train-champagne text-xs font-serif tracking-wider hover:shadow-brass transition-all"
                >
                  <Instagram className="w-4 h-4 text-train-gold" />
                  <span>공식 인스타그램 ({clubData.instagram})</span>
                  <ExternalLink className="w-3 h-3 text-train-gold/60" />
                </a>

                <Link
                  to="/concert"
                  className="inline-flex items-center gap-1.5 text-xs text-train-gold hover:text-train-champagne font-serif tracking-wider underline underline-offset-4"
                >
                  <span>탑승 단원 명부 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </BrassBorder>
          </div>

          {/* Right: Key Stats / Vintage Badge */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-lg border border-train-gold/40 bg-gradient-to-b from-train-secondary to-train-darkwood shadow-md space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-full border border-train-gold bg-train-burgundy/60 flex items-center justify-center shadow-brass">
                <Music className="w-8 h-8 text-train-champagne" />
              </div>
              <h4 className="font-serif text-lg text-train-ivory font-bold tracking-wider">
                LIQUID EXPRESS
              </h4>
              <p className="text-xs text-train-ivory/70 leading-relaxed">
                매 학기 자체공연과 캠퍼스 사역을 통해 하나님의 은혜를 노래합니다.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                <div className="p-3 rounded bg-train-bg/60 border border-train-gold/20">
                  <span className="block text-[10px] font-serif text-train-gold/70">DEPARTURE</span>
                  <span className="font-serif text-xs text-train-champagne font-semibold">2026. 12. 04</span>
                </div>
                <div className="p-3 rounded bg-train-bg/60 border border-train-gold/20">
                  <span className="block text-[10px] font-serif text-train-gold/70">TERMINUS</span>
                  <span className="font-serif text-xs text-train-champagne font-semibold">SU 104</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONCERT PREVIEW: Official Poster & Invitation                          */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-train-secondary/60 border-t border-b border-train-gold/30">
        <div className="max-w-5xl mx-auto">
          <ScriptHeading
            subtitle="OFFICIAL CONCERT POSTER"
            title="자체공연 「Train 1225」 포스터 안내"
            titleEn="The Journey Unfolds"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Poster Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full rounded-xl p-2 bg-gradient-to-b from-[#4A261F] via-[#2A1410] to-[#140B0A] border border-train-gold/60 shadow-brass-lg">
                <div className="relative rounded-lg overflow-hidden bg-train-bg aspect-[1414/2000]">
                  <img
                    src={concertData.assets.poster}
                    alt="Train 1225 Official Concert Poster"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <button
                      onClick={() => setIsPosterModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-train-bg/90 border border-train-gold text-train-champagne text-xs font-serif tracking-wider shadow"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>포스터 크게 보기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Info & Introduction */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  WINTER CONCERT 2026
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-train-ivory font-bold">
                  기차 창가에서 만나는 하나님의 사랑
                </h3>
                <p className="font-korean text-sm text-train-ivory/80 leading-relaxed">
                  2026년 12월, 한동대학교 학생회관 104호가 유럽의 빈티지 야간열차 객실로 탈바꿈합니다. 
                  창밖으로 쏟아지는 하얀 눈과 차가운 겨울바람 속에서, 우리를 구원하신 그리스도의 탄생과 그분의 변함없는 사랑을 노래합니다.
                </p>
              </div>

              {/* Poster Highlight Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded bg-train-bg/60 border border-train-gold/30">
                  <Sparkles className="w-4 h-4 text-train-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs text-train-champagne font-semibold tracking-wide">
                      로마서 8장 38-39절의 고백
                    </h5>
                    <p className="text-xs text-train-ivory/70 mt-0.5">
                      사망이나 생명이나 천사들이나 어떤 피조물이라도 끊을 수 없는 하나님의 사랑.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-train-bg/60 border border-train-gold/30">
                  <Clock className="w-4 h-4 text-train-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs text-train-champagne font-semibold tracking-wide">
                      총 3회차의 정규 운행
                    </h5>
                    <p className="text-xs text-train-ivory/70 mt-0.5">
                      12월 4일(금) 저녁 20:30, 12월 5일(토) 14:00 & 16:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/concert"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-train-gold bg-gradient-to-r from-train-burgundy to-[#2d1410] text-train-champagne font-serif text-xs tracking-widest uppercase font-semibold hover:shadow-brass transition-all"
                >
                  <span>노선도 및 곡 정보 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setIsPosterModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-train-gold/40 text-train-ivory/80 text-xs font-serif tracking-wider hover:text-train-champagne hover:border-train-gold transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>원본 포스터 확대</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Fullscreen Modal */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPosterModalOpen(false)}
          >
            <div
              className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="absolute -top-12 right-0 p-2 text-train-champagne hover:text-white"
                aria-label="닫기"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={concertData.assets.poster}
                alt="Train 1225 Poster Fullscreen"
                className="max-h-[85vh] w-auto rounded-lg border-2 border-train-gold shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
