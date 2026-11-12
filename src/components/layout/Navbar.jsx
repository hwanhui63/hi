import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket, Volume2, VolumeX, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'HOME', labelKo: '홈' },
  { path: '/concert', label: 'THE JOURNEY', labelKo: '이번 자공' },
  { path: '/guestbook', label: 'WISH TREE', labelKo: '방명록' },
  { path: '/info', label: 'INFORMATION', labelKo: '공연 안내' },
  { path: '/reviews', label: 'MEMORIES', labelKo: '공연 후기' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioContextRef = React.useRef(null);
  const soundNodesRef = React.useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Subtle Vintage Train Ambiance Synth (Web Audio API - no external file needed)
  const toggleAmbientSound = () => {
    if (isPlayingSound) {
      soundNodesRef.current.forEach((n) => {
        try {
          n.stop ? n.stop() : n.disconnect();
        } catch {
          // ignore
        }
      });
      soundNodesRef.current = [];
      setIsPlayingSound(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Warm Brown Noise (train rail rhythm)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 1.5;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      whiteNoise.start();
      soundNodesRef.current = [whiteNoise, gainNode];
      setIsPlayingSound(true);
    } catch (e) {
      console.warn('Audio not allowed yet:', e);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-train-bg/95 backdrop-blur-md border-b border-train-gold/30 shadow-lg py-2.5'
            : 'bg-gradient-to-b from-train-bg/90 via-train-bg/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Liquid Train 1225 Home"
          >
            <div className="w-10 h-10 rounded-full border border-train-gold bg-gradient-to-b from-[#3a1d18] to-[#1a0a09] flex items-center justify-center shadow-brass group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-train-champagne text-sm tracking-tighter">
                1225
              </span>
            </div>
            <div className="text-left">
              <span className="block font-serif text-[10px] tracking-[0.3em] uppercase text-train-gold/80">
                Liquid on Board
              </span>
              <span className="block font-serif text-lg tracking-wider text-train-ivory font-bold group-hover:text-train-champagne transition-colors">
                TRAIN 1225
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-1 font-serif text-xs tracking-[0.2em] uppercase transition-colors ${
                    isActive
                      ? 'text-train-champagne font-bold'
                      : 'text-train-ivory/70 hover:text-train-champagne'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-train-gold to-transparent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions & Sound */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <button
              onClick={toggleAmbientSound}
              className={`p-2 rounded-full border transition-all ${
                isPlayingSound
                  ? 'border-train-gold bg-train-burgundy/80 text-train-champagne shadow-brass'
                  : 'border-train-gold/30 bg-train-bg/60 text-train-ivory/60 hover:text-train-champagne hover:border-train-gold/60'
              }`}
              title={isPlayingSound ? '열차 소리 끄기' : '빈티지 열차 앰비언스 켜기'}
              aria-label="열차 사운드 토글"
            >
              {isPlayingSound ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Boarding Pass CTA */}
            <Link
              to="/info"
              className="flex items-center gap-2 px-4 py-2 rounded border border-train-gold bg-gradient-to-r from-train-burgundy to-[#2a1310] text-train-champagne text-xs font-serif tracking-widest uppercase hover:shadow-brass transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Ticket className="w-3.5 h-3.5 text-train-gold" />
              <span>승차권 확인</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleAmbientSound}
              className="p-2 rounded border border-train-gold/40 text-train-champagne"
              aria-label="소리 토글"
            >
              {isPlayingSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded border border-train-gold/50 bg-train-burgundy/60 text-train-champagne focus:outline-none"
              aria-label="메뉴 열기"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-30 bg-train-secondary/95 backdrop-blur-xl border-b border-train-gold/40 p-6 shadow-2xl sm:hidden"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-train-gold/20 flex items-center justify-between">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  Passenger Menu
                </span>
                <span className="text-[11px] text-train-ivory/60 font-serif">
                  2026. 12. 04 - 12. 05
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center justify-between px-3 py-2.5 rounded border transition-colors ${
                        isActive
                          ? 'border-train-gold bg-train-burgundy/80 text-train-champagne font-bold'
                          : 'border-transparent text-train-ivory/80 hover:bg-train-bg/60'
                      }`}
                    >
                      <span className="font-serif text-sm tracking-wider">{item.label}</span>
                      <span className="text-xs text-train-gold/70">{item.labelKo}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/info"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded border border-train-gold bg-train-burgundy text-train-champagne font-serif text-xs tracking-widest uppercase shadow-brass"
                >
                  <Ticket className="w-4 h-4 text-train-gold" />
                  <span>승차권(BOARDING PASS) 확인하기</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
