import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Instagram,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { clubData } from '../data/club';
import { BrassBorder, ScriptHeading } from '../components/common/BrassBorder';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-train-ivory overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Looking Through the Vintage Train Window                 */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden bg-black">
        {/* Fullscreen Video playing outside the train window */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-85 contrast-110"
          >
            <source src={concertData.assets.journeyVideo} type="video/mp4" />
          </video>
          {/* Cold Winter Atmospheric Fog & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
        </div>

        {/* Vintage Train Carriage & Arched Window Frame Overlay (기차 안에서 창을 통해 밖을 보는 느낌) */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
          <img
            src="/assets/train-window-frame.png"
            alt="Vintage Train Carriage Window Frame"
            className="w-full h-full object-cover object-center select-none"
          />
          {/* Subtle Glass Frost / Window Corner Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.65)_85%)] pointer-events-none" />
        </div>

        {/* Content Floating Inside the Train Window */}
        <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 px-4">
          {/* Top Pill: "26-2 Liquid Concert" */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-train-gold/60 bg-black/80 backdrop-blur-md shadow-brass"
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
            <p className="font-korean text-base sm:text-xl md:text-2xl text-train-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-medium tracking-wide">
              다음 역은, 당신이 가장 사랑할 크리스마스
            </p>
          </motion.div>

          {/* Action Buttons (공연 일정 넣은 박스 제거 완료) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
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

              {/* Official LIQUID Logo Centerpiece (금색 원 제거) */}
              <div className="flex items-center justify-center py-2">
                <div className="h-16 w-auto flex items-center justify-center">
                  <img
                    src="/assets/liquid-logo.png"
                    alt="LIQUID — The Blood of Christ"
                    className="h-14 w-auto object-contain"
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
    </div>
  );
}
