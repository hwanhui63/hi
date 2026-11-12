import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { BrassBorder, ScriptHeading } from '../components/common/BrassBorder';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-train-ivory overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Vintage Poster-Style Train Carriage & Window             */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 bg-gradient-to-b from-[#180a0a] via-[#120707] to-[#0a0505] overflow-hidden text-center">
        {/* Carriage Atmospheric Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] pointer-events-none z-0" />

        {/* Central Train Carriage Poster Container */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-[490px] flex flex-col items-center">
          
          {/* Top Brass Rail & Header (포스터 상단 구조 반영) */}
          <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-serif tracking-[0.25em] text-train-champagne/80 pb-3 pt-1 px-3 border-b border-train-gold/40">
            <span>2026-02</span>
            <span className="font-bold text-train-gold tracking-[0.3em]">LIQUID CONCERT</span>
            <span>WEEK 14</span>
          </div>

          {/* =================================================================== */}
          {/* VINTAGE TRAIN WINDOW FRAME (영상이 창틀 밖으로 절대 튀어나오지 않는 창틀) */}
          {/* =================================================================== */}
          <div className="relative w-full my-4 sm:my-5">
            {/* Outer Golden Brass Bevel (황동 창틀 외곽 프레임) */}
            <div className="relative mx-auto w-full aspect-[10/14] rounded-[55px] sm:rounded-[72px] md:rounded-[85px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#D4AF37] via-[#8C6228] to-[#D4AF37] shadow-[0_0_50px_rgba(184,139,74,0.35),0_20px_45px_rgba(0,0,0,0.9)]">
              
              {/* Inner Brass Rim (황동 내부 림) */}
              <div className="relative w-full h-full rounded-[48px] sm:rounded-[64px] md:rounded-[76px] p-1.5 sm:p-2 bg-gradient-to-b from-[#5c3e17] via-[#241407] to-[#5c3e17] shadow-inner">
                
                {/* WINDOW GLASS: 영상이 100% 이 둥근 창문 안쪽으로만 엄격하게 클리핑됨 */}
                <div className="relative w-full h-full rounded-[42px] sm:rounded-[58px] md:rounded-[70px] overflow-hidden bg-black flex flex-col items-center justify-between p-5 sm:p-7 shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]">
                  
                  {/* 1. Moving Train Video (CLIPPED 100% INSIDE WINDOW) */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] contrast-115 scale-105"
                  >
                    <source src={concertData.assets.journeyVideo} type="video/mp4" />
                  </video>

                  {/* 2. Window Glass Frost & Night Shadows */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.65)_100%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  {/* 3. Window Content */}
                  {/* Top Season Label */}
                  <div className="relative z-10 pt-2 text-center">
                    <span className="font-serif text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-train-champagne/90 font-semibold drop-shadow-md">
                      26-2 Liquid Concert
                    </span>
                  </div>

                  {/* Center Title: "Train 1225" & Subtitle */}
                  <div className="relative z-10 text-center space-y-2 py-2">
                    <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F5E2B8] to-[#B88B4A] drop-shadow-[0_8px_20px_rgba(0,0,0,0.95)] leading-tight select-none">
                      Train 1225
                    </h1>
                    <p className="font-korean text-xs sm:text-sm text-train-ivory drop-shadow-md font-medium tracking-wide">
                      다음 역은, 당신이 가장 사랑할 크리스마스
                    </p>
                  </div>

                  {/* Bottom of Window: Scripture Verse from Poster */}
                  <div className="relative z-10 text-center pb-1">
                    <p className="font-serif text-[8.5px] sm:text-[9.5px] text-train-champagne/70 tracking-widest uppercase">
                      FOR I AM CONVINCED THAT NEITHER DEATH NOR LIFE...
                    </p>
                    <p className="font-serif text-[8px] text-train-gold/80 tracking-widest mt-0.5">
                      — ROMANS 8:38-39 —
                    </p>
                  </div>

                </div>
              </div>

              {/* Vintage Brass Window Handle / Latch on Left Frame (포스터 좌측 손잡이 재현) */}
              <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-3.5 h-14 sm:w-4 sm:h-16 rounded-r-md bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#8C6228] shadow-[2px_0_6px_rgba(0,0,0,0.6)] border-y border-r border-[#ffe5a3]/50 flex items-center justify-center">
                <div className="w-1.5 h-8 sm:h-10 rounded-full bg-black/40" />
              </div>

            </div>
          </div>

          {/* Bottom Details & Action Buttons (Under the Window) */}
          <div className="w-full space-y-4 pt-1">
            {/* Date & Location Line from Poster */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-serif text-train-ivory/80 px-3 py-2 border-t border-b border-train-gold/30">
              <div className="text-left space-y-0.5">
                <div><span className="text-train-gold font-semibold">DAY 1:</span> 12/04 (FRI) 20:30</div>
                <div><span className="text-train-gold font-semibold">DAY 2:</span> 12/05 (SAT) 14:00, 16:00</div>
              </div>
              <div className="text-right">
                <span className="text-train-gold font-semibold">장소:</span> 학관 104호
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 w-full">
              <Link
                to="/concert"
                className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-md border border-train-champagne bg-[#5d1212] hover:bg-[#781818] text-train-champagne font-serif text-xs sm:text-sm tracking-[0.2em] uppercase font-bold shadow-brass hover:shadow-brass-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-train-champagne group-hover:rotate-45 transition-transform" />
                <span>BOARD THE TRAIN</span>
                <ArrowRight className="w-4 h-4 text-train-champagne group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/info"
                className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-3 rounded-md border border-train-gold/60 bg-black/80 hover:bg-[#5d1212] text-train-ivory/90 font-serif text-xs tracking-wider uppercase hover:text-train-champagne hover:border-train-gold transition-colors backdrop-blur-sm"
              >
                승차권 확인
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT LIQUID: The Blood of Christ                                      */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* 필기체 Liquid on Board 삭제 완료 */}
        <ScriptHeading
          subtitle="The Blood of Christ"
          title="LIQUID"
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
              {/* Train 1225 승무원 명부 => Train 1225 멤버 로 변경 */}
              <Link
                to="/concert"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-train-gold/60 bg-black/60 text-train-champagne text-xs font-serif tracking-wider hover:bg-[#781818] hover:border-train-champagne transition-all"
              >
                <span>Train 1225 멤버</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BrassBorder>

          {/* Right Card: 찬양과 고백 (시편 33:3) — 로고 사진 및 하단 네모 박스 삭제 완료 */}
          <BrassBorder innerClassName="space-y-6 h-full flex flex-col justify-center text-center py-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-train-gold/30 text-left">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  찬양과 고백
                </span>
                <span className="font-serif text-xs text-train-champagne/80 font-semibold">
                  PSALM 33:3
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-train-champagne font-bold leading-snug pt-4">
                “새 노래로 그를 노래하며<br />즐거운 소리로 아름답게 연주할지어다”
              </h3>

              <p className="font-serif text-xs text-train-gold tracking-widest uppercase">
                — 시편 33:3 —
              </p>

              <p className="font-korean text-xs sm:text-sm text-train-ivory/85 leading-relaxed max-w-md mx-auto pt-2">
                십자가의 보혈과 한결같은 그리스도의 은혜를 기억하며,
                우리의 손과 목소리에 담긴 선율로 하나님 나라를 아름답게 선포합니다.
              </p>
            </div>
          </BrassBorder>
        </div>
      </section>
    </div>
  );
}
