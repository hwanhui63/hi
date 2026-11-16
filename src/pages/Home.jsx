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
      {/* 1. HERO SECTION: Fullscreen Passing Train Video                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen max-h-[920px] flex items-center justify-center px-4 sm:px-6 py-24 sm:py-28 overflow-hidden">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScriptHeading
          subtitle="The Blood of Christ"
          title="LIQUID"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 로고 사진 (둥글게 깎은 블록 카드) */}
          <div className="lg:col-span-5 flex flex-col">
            <BrassBorder
              rounded="rounded-3xl"
              innerRounded="rounded-[22px]"
              className="h-full flex-1"
              innerClassName="h-full flex flex-col justify-center items-center p-6 sm:p-8 bg-black/95 text-center shadow-inner"
            >
              <div className="w-full flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="overflow-hidden rounded-2xl border border-train-gold/40 shadow-lg bg-black p-2 w-full max-w-[340px] sm:max-w-[400px]">
                  <img
                    src={concertData.assets.logoBanner}
                    alt="LIQUID Band Logo"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
                <div className="pt-3 border-t border-train-gold/30 w-full flex items-center justify-between text-xs font-serif text-train-champagne px-1">
                  <span className="tracking-widest uppercase text-train-gold text-[11px]">HANDONG CHRISTIAN BAND</span>
                  <span className="font-semibold text-train-champagne text-[11px]">SINCE 2000</span>
                </div>
              </div>
            </BrassBorder>
          </div>

          {/* Right Column: 박스들 (리퀴드 소개 박스 + 찬양과 고백 박스) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Box 1: 리퀴드 소개 (모서리 둥글게 깎은 블록) */}
            <BrassBorder
              rounded="rounded-3xl"
              innerRounded="rounded-[22px]"
              innerClassName="space-y-4"
            >
              <div className="pb-3 border-b border-train-gold/30 flex items-center justify-between">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  리퀴드 소개
                </span>
                <span className="font-serif text-xs text-train-champagne/80 font-semibold">
                  ABOUT LIQUID
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-train-champagne font-bold leading-snug">
                “예수님의 보혈을 가슴에 품고 음악하는 동아리”
              </h3>

              <div className="space-y-2.5 font-korean text-xs sm:text-sm text-train-ivory/85 leading-relaxed">
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

              <div className="pt-3 border-t border-train-gold/20 flex flex-wrap items-center gap-4">
                {/* Train 1225 멤버 누르면 단원 명부(#members)로 바로 이동 */}
                <Link
                  to="/concert#members"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-train-gold/60 bg-black/60 text-train-champagne text-xs font-serif tracking-wider hover:bg-[#781818] hover:border-train-champagne transition-all shadow-sm"
                >
                  <span>Train 1225 멤버</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </BrassBorder>

            {/* Box 2: 찬양과 고백 (시편 33:3) (모서리 둥글게 깎은 블록) */}
            <BrassBorder
              rounded="rounded-3xl"
              innerRounded="rounded-[22px]"
              innerClassName="space-y-4 text-center py-5 sm:py-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-train-gold/30 text-left">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  찬양과 고백
                </span>
                <span className="font-serif text-xs text-train-champagne/80 font-semibold">
                  PSALM 33:3
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-train-champagne font-bold leading-snug pt-2">
                “새 노래로 그를 노래하며<br />즐거운 소리로 아름답게 연주할지어다”
              </h3>

              <p className="font-serif text-xs text-train-gold tracking-widest uppercase">
                — 시편 33:3 —
              </p>

              <p className="font-korean text-xs sm:text-sm text-train-ivory/85 leading-relaxed max-w-lg mx-auto">
                십자가의 보혈과 한결같은 그리스도의 은혜를 기억하며,
                우리의 손과 목소리에 담긴 선율로 하나님 나라를 아름답게 선포합니다.
              </p>
            </BrassBorder>
          </div>
        </div>
      </section>
    </div>
  );
}
