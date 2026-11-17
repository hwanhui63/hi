import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Ticket,
  Calendar,
  Clock,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  RotateCw,
  Sparkles,
  Download,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { BrassBorder, ScriptHeading } from '../components/common/BrassBorder';
import ticketFrontImg from '../assets/ticket-front.png';
import ticketBackImg from '../assets/ticket-back.png';

export default function Info() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [passengerName, setPassengerName] = useState('');
  const [selectedDay, setSelectedDay] = useState(concertData.dates[0].id);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const selectedDateObj =
    concertData.dates.find((d) => d.id === selectedDay) || concertData.dates[0];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(concertData.venue.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleDownloadTicket = async () => {
    try {
      const img = new Image();
      img.src = ticketFrontImg;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 411;
      const ctx = canvas.getContext('2d');

      // 1. Draw base ticket front image
      ctx.drawImage(img, 0, 0, 1024, 411);

      // 2. Draw Checkmark Dead-center on Selected Day Checkbox (네모 박스 중앙)
      // Center coordinates in 1024x411: x = 463.5; day-1 (1공): 246.5, day-2-1 (2공): 279.5, day-2-2 (3공): 312.5
      const checkY = selectedDay === 'day-1' ? 246.5 : selectedDay === 'day-2-1' ? 279.5 : 312.5;
      ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple SD Gothic Neo", sans-serif';
      ctx.fillStyle = '#EBD39A';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
      ctx.shadowBlur = 3;
      ctx.fillText('✓', 463.5, checkY);

      // 3. Draw Passenger Name next to NAME: on stub: x = 840, y = 246.5
      const displayName = passengerName.trim() || 'PASSENGER GUEST';
      ctx.font = 'bold 15px "Lora", "Times New Roman", -apple-system, serif';
      ctx.fillStyle = '#F5E8D0';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 4;
      ctx.fillText(displayName, 840, 246.5);

      // 4. Download file as PNG
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const cleanName = passengerName.trim() ? `_${passengerName.trim()}` : '';
      link.download = `Train1225_승차권${cleanName}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to generate ticket image:', error);
      alert('승차권 이미지를 생성하지 못했습니다.');
    }
  };

  return (
    <div className="relative min-h-screen text-train-ivory pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Page Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-train-gold">
          OFFICIAL BOARDING PASS & SCHEDULE
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-train-ivory font-bold tracking-wide">
          공연 안내 및 승차권
        </h1>
      </div>

      {/* ========================================================================= */}
      {/* 1. INTERACTIVE BOARDING PASS (FLIP TICKET)                                */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 space-y-1">
            <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
              INTERACTIVE TICKET PASS
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-train-champagne font-bold">
              승차권 안내
            </h2>
            <p className="text-xs text-train-ivory/60 font-korean">
              클릭하거나 아래 버튼을 눌러 승차권을 3D로 회전해 보세요.
            </p>
          </div>

          {/* 3D Flip Ticket Container */}
          <div
            className="relative cursor-pointer perspective-1000 group mx-auto max-w-2xl"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full aspect-[1024/411] rounded-2xl shadow-2xl flex items-center justify-center border border-train-gold/40 bg-[#3d0b0b]/60"
            >
              {/* Front of Ticket */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                }}
                className={`absolute inset-0 w-full h-full rounded-2xl flex items-center justify-center select-none transition-opacity duration-300 ${
                  isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
                }`}
              >
                <img
                  src={ticketFrontImg}
                  alt="Liquid Express Ticket Front"
                  className="w-full h-full object-contain rounded-2xl"
                />

                {/* Dead-center Checkmark on Selected Square Box (네모 박스 중앙) */}
                <div
                  className="absolute pointer-events-none text-train-champagne font-bold select-none flex items-center justify-center"
                  style={{
                    left: '45.26%',
                    top: selectedDay === 'day-1' ? '60.0%' : selectedDay === 'day-2-1' ? '68.0%' : '76.0%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 'clamp(10px, 1.8vw, 19px)',
                    lineHeight: 1,
                    textShadow: '0 1px 3px rgba(0,0,0,0.85)',
                  }}
                >
                  ✓
                </div>

                {/* Live Passenger Name next to NAME: */}
                <div
                  className="absolute pointer-events-none font-korean font-bold select-none text-train-champagne"
                  style={{
                    left: '82.0%',
                    top: '59.6%',
                    transform: 'translateY(-50%)',
                    maxWidth: '16.5%',
                    fontSize: 'clamp(8px, 1.4vw, 16px)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    letterSpacing: '0.04em',
                    textShadow: '0 1px 3px rgba(0,0,0,0.9)',
                  }}
                  title={passengerName.trim() || 'PASSENGER GUEST'}
                >
                  {passengerName.trim() || 'PASSENGER GUEST'}
                </div>
              </div>

              {/* Back of Ticket */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
                className={`absolute inset-0 w-full h-full rounded-2xl flex items-center justify-center select-none transition-opacity duration-300 ${
                  isFlipped ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={ticketBackImg}
                  alt="Liquid Express Ticket Back"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Action Button: Single Flip Toggle Button */}
          <div className="mt-5 flex items-center justify-center">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl border border-train-champagne bg-[#781818] hover:bg-[#8e1c1c] text-train-champagne text-xs sm:text-sm font-serif tracking-wider shadow-brass hover:shadow-brass-lg transition-all font-semibold hover:scale-[1.02] active:scale-[0.98]"
            >
              <RotateCw className="w-4 h-4 text-train-champagne" />
              <span>승차권 {isFlipped ? '앞면 보기' : '뒷면 보기'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Personal Boarding Pass Generator */}
        <div className="mt-12 max-w-2xl mx-auto p-6 sm:p-7 rounded-3xl border border-train-gold/40 bg-[#5d1212] shadow-brass">
          <div className="flex items-center gap-2 pb-3 border-b border-train-gold/20 mb-4">
            <Ticket className="w-4 h-4 text-train-gold" />
            <h3 className="font-serif text-sm text-train-champagne font-bold tracking-wider uppercase">
              모바일 개인 승차권 생성기 (MY BOARDING PASS)
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              type="text"
              maxLength={15}
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="승객 성함을 입력하세요 (예: 김한동)"
              className="flex-1 px-4 py-2.5 rounded-2xl border border-train-gold/40 bg-[#2d0707]/90 text-xs sm:text-sm text-train-ivory placeholder:text-train-ivory/40 focus:outline-none focus:border-train-gold"
            />
            <div className="flex gap-2">
              {concertData.dates.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDay(d.id)}
                  className={`px-4 py-2.5 rounded-2xl border text-xs font-serif transition-colors ${
                    selectedDay === d.id
                      ? 'border-train-gold bg-[#781818] text-train-champagne font-bold shadow'
                      : 'border-train-gold/30 bg-[#3d0b0b]/80 text-train-ivory/70 hover:border-train-gold/60'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Pass Preview */}
          <div className="p-5 rounded-2xl border border-train-gold/50 bg-[#450d0d] shadow-inner relative overflow-hidden space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-dashed border-train-gold/30 text-xs">
              <div>
                <span className="block text-[10px] font-serif text-train-gold/70">PASSENGER NAME</span>
                <span className="font-serif text-sm font-bold text-train-champagne">
                  {passengerName.trim() || 'PASSENGER GUEST'}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-serif text-train-gold/70">CARRIAGE / TRAIN</span>
                <span className="font-serif text-sm font-bold text-train-ivory">TRAIN 1225</span>
              </div>
              <div>
                <span className="block text-[10px] font-serif text-train-gold/70">DEPARTURE</span>
                <span className="font-serif text-sm font-bold text-train-champagne">
                  {selectedDateObj.date} {selectedDateObj.time}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-serif text-train-gold/70">PLATFORM / VENUE</span>
                <span className="font-serif text-sm font-bold text-train-ivory">SU 104</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-dashed border-train-gold/20 text-[11px] text-train-ivory/70">
              <div className="space-y-0.5">
                <span className="font-serif text-train-gold font-bold tracking-wider block">NO. 2621225</span>
                <span className="italic font-korean">"하나님의 사랑 안에서 안전한 여정 되시길 소망합니다."</span>
              </div>
              <button
                onClick={handleDownloadTicket}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-train-champagne bg-[#781818] hover:bg-[#8e1c1c] text-train-champagne text-xs font-serif tracking-wider shadow transition-all font-semibold hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5 text-train-gold" />
                <span>승차권 이미지 저장</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SCHEDULE & TIMETABLE                                                   */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <ScriptHeading
          subtitle="TIMETABLE & DEPARTURES"
          title="공연 일정 및 회차 안내"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-8">
          {concertData.dates.map((dateItem) => (
            <BrassBorder
              key={dateItem.id}
              rounded="rounded-2xl"
              innerRounded="rounded-[14px]"
              innerClassName="!p-3.5 sm:!p-4 !space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-train-gold/25">
                <span className="font-serif text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#781818] border border-train-gold text-train-champagne shadow-sm">
                  {dateItem.day}
                </span>
                <span className="text-[11px] text-train-gold font-serif">
                  입장 {dateItem.doorsOpen}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-0.5">
                <p className="font-serif text-xs text-train-ivory/80">
                  {dateItem.date}
                </p>
                <h4 className="font-serif text-base sm:text-lg text-train-champagne font-bold">
                  출발 {dateItem.time}
                </h4>
              </div>

              <p className="text-[11px] sm:text-xs text-train-ivory/85 font-korean leading-snug">
                {dateItem.description}
              </p>

              <div className="pt-2 border-t border-train-gold/20 flex items-center justify-between text-[11px] text-train-ivory/60">
                <span>장소: 학관 104호</span>
                <span className="text-train-gold font-semibold">정시 출발</span>
              </div>
            </BrassBorder>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VENUE & DIRECTIONS                                                     */}
      {/* ========================================================================= */}
      <section className="mb-20">
        <ScriptHeading
          subtitle="VENUE & DIRECTIONS"
          title="공연 장소 및 찾아오시는 길"
        />

        <div className="mt-10 p-6 sm:p-8 rounded-3xl border border-train-gold/50 bg-[#5d1212] shadow-brass">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Address Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-train-gold" />
                <h3 className="font-serif text-xl text-train-champagne font-bold">
                  {concertData.venue.name}
                </h3>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#450d0d] border border-train-gold/30 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-train-ivory/90 font-mono">
                  {concertData.venue.address}
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-train-gold/50 bg-[#5d1212] hover:bg-[#781818] text-train-champagne text-xs font-serif hover:shadow transition-all"
                  title="주소 복사"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">복사됨!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-train-gold" />
                      <span>주소 복사</span>
                    </>
                  )}
                </button>
              </div>

              <p className="font-korean text-xs sm:text-sm text-train-ivory/90 leading-relaxed">
                {concertData.venue.directions}
              </p>

              <div className="pt-2">
                <a
                  href={concertData.venue.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-train-gold/60 bg-[#3d0b0b] hover:bg-[#781818] text-train-champagne text-xs font-serif tracking-wider transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-train-gold" />
                  <span>네이버 지도에서 크게 보기</span>
                  <ExternalLink className="w-3 h-3 text-train-gold/70" />
                </a>
              </div>
            </div>

            {/* Embedded Live Map Screen */}
            <div className="md:col-span-7 rounded-2xl overflow-hidden border border-train-gold/50 shadow-inner bg-[#2d0707] flex flex-col">
              <div className="px-4 py-2.5 bg-[#450d0d]/90 border-b border-train-gold/30 flex items-center justify-between text-xs font-serif text-train-gold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-train-champagne">한동대학교 학생회관 (SU 104호)</span>
                </div>
                <span className="text-[11px] text-train-ivory/60">포항시 북구 흥해읍</span>
              </div>
              <div className="relative w-full h-[280px] sm:h-[320px]">
                <iframe
                  title="한동대학교 학생회관 지도"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=129.3820%2C36.0985%2C129.3950%2C36.1080&amp;layer=mapnik&amp;marker=36.1033%2C129.3885"
                  className="w-full h-full filter contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PASSENGER GUIDELINES (관람 및 탑승 유의사항)                            */}
      {/* ========================================================================= */}
      <section>
        <ScriptHeading
          subtitle="PASSENGER GUIDELINES"
          title="관람 및 탑승 유의사항"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {concertData.guidelines.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-train-gold/40 bg-[#5d1212] space-y-3 hover:border-train-gold transition-colors shadow-brass"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-train-gold/20">
                <span className="font-serif text-xs font-bold text-train-gold px-2.5 py-0.5 rounded-full bg-[#3d0b0b]/80 border border-train-gold/30">
                  Rule {rule.ruleNumber}
                </span>
                <h4 className="font-serif text-sm sm:text-base text-train-champagne font-bold">
                  {rule.title}
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-train-ivory/85 font-korean leading-relaxed pt-1">
                {rule.items && rule.items.map((item, iIdx) => (
                  <p key={iIdx} className="flex items-start gap-2">
                    <span className="text-train-gold font-bold mt-1 text-[10px]">•</span>
                    <span className="flex-1">{item}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
