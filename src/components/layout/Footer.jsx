import React from 'react';
import { concertData } from '../../data/concert';
import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { VintageDivider } from '../common/BrassBorder';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-train-gold/30 pt-10 pb-10 overflow-hidden text-train-ivory/80">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 text-sm">
          {/* Column 1: LIQUID Story */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg text-train-champagne font-bold tracking-wider">
              LIQUID
            </h3>
            <p className="text-xs text-train-ivory/80 leading-relaxed font-korean">
              한동대학교 유일 크리스천 밴드 동아리
            </p>
          </div>

          {/* Column 2: Boarding Information */}
          <div className="space-y-2">
            <h3 className="font-serif text-xs text-train-champagne tracking-[0.2em] uppercase font-bold">
              BOARDING INFORMATION
            </h3>
            <div className="space-y-1.5 text-xs text-train-ivory/80 font-serif">
              <div className="flex items-start gap-2">
                <span className="text-train-gold font-semibold w-12 flex-shrink-0">Day 1:</span>
                <span>2026. 12. 04 (FRI) 20:30</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-train-gold font-semibold w-12 flex-shrink-0">Day 2:</span>
                <div className="space-y-1">
                  <div>2026. 12. 05 (SAT) 14:00</div>
                  <div>2026. 12. 05 (SAT) 16:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-2">
            <h3 className="font-serif text-xs text-train-champagne tracking-[0.2em] uppercase font-bold">
              CONTACT
            </h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-train-ivory/80">
                <Phone className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                <span>전영효 (010-4537-2654)</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                <a
                  href={concertData.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-train-champagne underline underline-offset-4 decoration-train-gold/40 text-train-ivory/80"
                >
                  {concertData.contact.instagram}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                <a
                  href={concertData.contact.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-train-champagne underline underline-offset-4 decoration-train-gold/40 text-train-ivory/80 font-korean"
                >
                  카카오 오픈채팅 예매 / 문의
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-train-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-train-ivory/50">
          <p>© 2026 LIQUID. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
