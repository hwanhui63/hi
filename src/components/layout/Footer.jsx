import React from 'react';
import { Link } from 'react-router-dom';
import { concertData } from '../../data/concert';
import { clubData } from '../../data/club';
import { Instagram, Phone, MapPin, Sparkles } from 'lucide-react';
import { VintageDivider } from '../common/BrassBorder';

export default function Footer() {
  return (
    <footer className="relative bg-train-bg border-t border-train-gold/30 pt-16 pb-12 overflow-hidden text-train-ivory/80">
      {/* Background Subtle Wood & Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#1a0c0a]/50 to-[#0e0706]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scripture Plaque - The Heart of the Concert */}
        <div className="relative p-6 sm:p-8 rounded-lg border border-train-gold/50 bg-gradient-to-b from-train-burgundy/40 via-train-secondary/70 to-train-bg/90 shadow-brass text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-train-gold" />
            <span className="font-serif text-xs tracking-[0.25em] uppercase text-train-champagne">
              {concertData.scripture.verseEn}
            </span>
            <Sparkles className="w-4 h-4 text-train-gold" />
          </div>

          <p className="font-korean text-sm sm:text-base text-train-ivory/90 leading-relaxed mb-4">
            "{concertData.scripture.korean}"
          </p>

          <p className="font-serif text-[11px] sm:text-xs text-train-gold/70 tracking-wider uppercase leading-relaxed max-w-2xl mx-auto">
            {concertData.scripture.english}
          </p>
        </div>

        <VintageDivider text="LIQUID EXPRESS 1225" />

        {/* 3-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-6 text-sm">
          {/* Column 1: LIQUID Story */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-train-champagne font-bold tracking-wider">
              LIQUID
            </h3>
            <p className="text-xs text-train-ivory/70 leading-relaxed">
              한동대학교 대표 크리스천 공연/밴드 동아리. 차가운 겨울밤, 음악을 통해 그리스도의 식지 않는 사랑과 온기를 나눕니다.
            </p>
            <p className="font-serif text-[11px] text-train-gold/80 tracking-widest uppercase">
              HANDONG GLOBAL UNIVERSITY
            </p>
          </div>

          {/* Column 2: Boarding & Venue */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm text-train-champagne tracking-widest uppercase font-bold">
              BOARDING INFORMATION
            </h3>
            <ul className="space-y-2 text-xs text-train-ivory/75">
              <li className="flex items-start gap-2">
                <span className="text-train-gold font-serif">DAY 1 :</span>
                <span>2026. 12. 04 (FRI) 20:30 (입장 18:30)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-train-gold font-serif">DAY 2 :</span>
                <span>2026. 12. 05 (SAT) 14:00, 16:00</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-train-gold flex-shrink-0 mt-0.5" />
                <span>한동대학교 학생회관(학관) 104호 (SU 104)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm text-train-champagne tracking-widest uppercase font-bold">
              INQUIRIES & CONTACT
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-train-gold" />
                <span>총괄 기획: 전영효 (010-4537-2654)</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-train-gold" />
                <a
                  href={concertData.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-train-champagne underline underline-offset-4 decoration-train-gold/40"
                >
                  {concertData.contact.instagram}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={concertData.contact.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-train-gold/60 bg-train-burgundy/60 text-train-champagne text-[11px] font-serif tracking-wider hover:shadow-brass transition-all"
                >
                  카카오 오픈채팅 예매 / 문의
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-train-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-train-ivory/50">
          <p>© 2026 LIQUID. Handong Global University. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 font-serif tracking-widest uppercase text-train-gold/60">
            LIQUID ON BOARD — TRAIN 1225
          </p>
        </div>
      </div>
    </footer>
  );
}
