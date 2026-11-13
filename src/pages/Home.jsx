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
      {/* 1. HERO SECTION: Fullscreen Passing Train Video (요청하신 시점의 화면 복원)   */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-28 overflow-hidden">
        {/* Fullscreen Background Video (지나가는 영상 풀 화면) */}
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

          {/* Main Title: "Train 1225" (Amoresa 폰트 적용) & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="font-amoresa text-7xl sm:text-9xl md:text-[10.5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#EBD39A] to-[#B88B4A] drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)] leading-tight select-none px-2">
              Train 1225
            </h1>
            <p className="font-korean text-base sm:text-xl md:text-2xl text-train-ivory drop-shadow-md font-medium tracking-wide">
              다음 역은, 당신이 가장 사랑할 크리스마스
            </p>
          </motion.div>

          {/* Action Buttons (공연 일정 넣은 박스 제거 완료) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3"
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
              {/* Train 1225 멤버 누르면 단원 명부(#members)로 바로 이동 */}
              <Link
                to="/concert#members"
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
