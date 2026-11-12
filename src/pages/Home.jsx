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
  Heart,
  Volume2,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { clubData } from '../data/club';
import { BrassBorder, VintageDivider, ScriptHeading } from '../components/common/BrassBorder';

export default function Home() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-train-ivory overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Fullscreen Passing Train Video                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-28 overflow-hidden">
        {/* Fullscreen Background Video (빨간 네모 없이 지나가는 영상 풀 화면) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-115"
          >
            <source src={concertData.assets.journeyVideo} type="video/mp4" />
          </video>
          {/* Cinematic Vignette & Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />
          {/* Subtle Warm Center Glow */}
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
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

          {/* Main Title: "Train 1225" (1225 폰트로 통일) & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="font-script text-7xl sm:text-9xl md:text-[10.5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#EBD39A] to-[#B88B4A] drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)] leading-tight select-none px-2">
              Train 1225
            </h1>
            <p className="font-korean text-base sm:text-xl md:text-2xl text-train-ivory drop-shadow-md font-medium tracking-wide">
              다음 역은, 당신이 가장 사랑할 크리스마스
            </p>
          </motion.div>

          {/* Schedule Plaque: 14:00 and 16:00 separated as distinct schedules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="w-full max-w-2xl space-y-4 pt-1"
          >
            <div className="p-4 sm:p-5 rounded-2xl border border-train-gold/50 bg-[#5d1212]/90 backdrop-blur-md shadow-brass">
              {/* Separate Time Slots */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-black/60 border border-train-gold/40 text-train-champagne font-serif font-semibold shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                  <span>12/04 (FRI) 20:30</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-black/60 border border-train-gold/40 text-train-champagne font-serif font-semibold shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                  <span>12/05 (SAT) 14:00</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-black/60 border border-train-gold/40 text-train-champagne font-serif font-semibold shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                  <span>12/05 (SAT) 16:00</span>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center justify-center gap-1.5 mt-3 pt-2.5 border-t border-train-gold/25 text-xs sm:text-sm text-train-ivory/85">
                <MapPin className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                <span>한동대학교 학생회관(학관) 104호 (SU 104)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <Link
                to="/concert"
                className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-md border border-train-champagne bg-[#5d1212] hover:bg-[#781818] text-train-champagne font-serif text-sm tracking-[0.2em] uppercase font-bold shadow-brass hover:shadow-brass-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-train-champagne group-hover:rotate-45 transition-transform" />
                <span>BOARD THE TRAIN</span>
                <ArrowRight className="w-4 h-4 text-train-champagne group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/info"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-md border border-train-gold/60 bg-black/80 hover:bg-[#5d1212] text-train-ivory/90 font-serif text-xs tracking-wider uppercase hover:text-train-champagne hover:border-train-gold transition-colors backdrop-blur-sm"
              >
                승차권 확인
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT LIQUID: The Blood of Christ                                      */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScriptHeading
          subtitle="The Blood of Christ"
          title="LIQUID"
          titleEn="Liquid on Board"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: 예수님의 보혈을 가슴에 품고 음악하는 동아리 */}
          <BrassBorder innerClassName="space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="pb-3 border-b border-train-gold/30">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  리퀴드 소개
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-train-champagne font-bold leading-snug">
                “예수님의 보혈을 가슴에 품고 음악하는 동아리”
              </h3>

              <div className="space-y-3 font-korean text-xs sm:text-sm text-train-ivory/85 leading-relaxed">
                <p>
                  Liquid는 한동대학교 창립 비전에 부합하는 한동 유일 크리스천 밴드로서 십자가에서 피 흘리신 예수님을 기억하며, 다양한 장르의 밴드 공연을 통한 하나님 나라의 확장을 목적으로 합니다.
                </p>
                <p>
                  정모의 시작을 예배로 드리고 있으며, 1학기는 길거리 공연, 2학기 자체공연, 그리고 매주 과제곡을 통해 연습하고 있습니다.
                </p>
                <p>
                  국내 문화공연사역단체인 MNT에 속해 있어, 매주 정기예배와 셀 모임,기도회, 그리고 여름사역과 겨울 태국 선교에 참여하고 있습니다
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-train-gold/20 flex flex-wrap items-center gap-4">
              <Link
                to="/concert"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-train-gold/60 bg-black/60 text-train-champagne text-xs font-serif tracking-wider hover:bg-[#781818] hover:border-train-champagne transition-all"
              >
                <span>Train 1225 승무원 명부</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={clubData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-train-gold hover:text-train-champagne font-serif tracking-wider underline underline-offset-4"
              >
                <Instagram className="w-4 h-4 text-train-gold" />
                <span>공식 인스타그램 ({clubData.instagram})</span>
                <ExternalLink className="w-3 h-3 text-train-gold/60" />
              </a>
            </div>
          </BrassBorder>

          {/* Right Card: 시편 33:3 찬양과 사역 비전 (좌측 카드와 완벽히 통일된 BrassBorder 구조) */}
          <BrassBorder innerClassName="space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-train-gold/30">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  찬양과 고백
                </span>
                <span className="font-serif text-xs text-train-champagne/80 font-semibold">
                  PSALM 33:3
                </span>
              </div>

              {/* Official LIQUID Logo Centerpiece */}
              <div className="flex items-center justify-center py-2">
                <div className="w-20 h-20 rounded-full border-2 border-train-gold bg-black flex items-center justify-center shadow-brass overflow-hidden p-1">
                  <img
                    src="/assets/liquid-logo-circle.png"
                    alt="LIQUID — The Blood of Christ"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-train-champagne font-bold text-center leading-snug">
                “새 노래로 그를 노래하며 즐거운 소리로 아름답게 연주할지어다”
              </h3>

              <p className="text-center font-serif text-xs text-train-gold/80 tracking-widest uppercase">
                — 시편 33:3 —
              </p>

              <p className="font-korean text-xs sm:text-sm text-train-ivory/85 leading-relaxed text-center">
                십자가의 보혈과 한결같은 그리스도의 은혜를 기억하며,
                우리의 손과 목소리에 담긴 선율로 하나님 나라를 아름답게 선포합니다.
              </p>
            </div>

            {/* Ministry Highlights Badges */}
            <div className="pt-4 border-t border-train-gold/20 grid grid-cols-2 gap-2 text-center text-[11px] font-korean">
              <div className="p-2.5 rounded bg-black/60 border border-train-gold/30 text-train-ivory/90">
                한동 유일 크리스천 밴드
              </div>
              <div className="p-2.5 rounded bg-black/60 border border-train-gold/30 text-train-ivory/90">
                MNT 문화공연사역 연합
              </div>
              <div className="p-2.5 rounded bg-black/60 border border-train-gold/30 text-train-ivory/90">
                1학기 버스킹 · 2학기 자공
              </div>
              <div className="p-2.5 rounded bg-black/60 border border-train-gold/30 text-train-ivory/90">
                여름 국내사역 & 겨울 태국선교
              </div>
            </div>
          </BrassBorder>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONCERT PREVIEW: Official Poster & Invitation                          */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-b border-train-gold/30">
        <div className="max-w-5xl mx-auto">
          <ScriptHeading
            subtitle="OFFICIAL CONCERT POSTER"
            title="자체공연 「Train 1225」 포스터 안내"
            titleEn="The Journey Unfolds"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Poster Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full rounded-xl p-2 bg-[#5d1212] border border-train-gold/60 shadow-brass-lg">
                <div className="relative rounded-lg overflow-hidden bg-black aspect-[1414/2000]">
                  <img
                    src={concertData.assets.poster}
                    alt="Train 1225 Official Concert Poster"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <button
                      onClick={() => setIsPosterModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-black/90 border border-train-gold text-train-champagne text-xs font-serif tracking-wider shadow"
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
                <div className="flex items-start gap-3 p-3 rounded bg-[#5d1212] border border-train-gold/40">
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

                <div className="flex items-start gap-3 p-3 rounded bg-[#5d1212] border border-train-gold/40">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-train-gold bg-[#5d1212] hover:bg-[#781818] text-train-champagne font-serif text-xs tracking-widest uppercase font-semibold hover:shadow-brass transition-all"
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
