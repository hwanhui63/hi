import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Ticket,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  RotateCw,
  Sparkles,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { BrassBorder, VintageDivider, ScriptHeading } from '../components/common/BrassBorder';

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

  return (
    <div className="relative min-h-screen bg-train-bg text-train-ivory pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Page Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-train-gold">
          OFFICIAL BOARDING PASS & SCHEDULE
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-train-ivory font-bold tracking-wide">
          공연 안내 및 승차권 (INFORMATION)
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
              공식 실물 승차권 (앞면 / 뒷면)
            </h2>
            <p className="text-xs text-train-ivory/60 font-korean">
              클릭하거나 아래 버튼을 눌러 승차권을 3D로 회전해 보세요.
            </p>
          </div>

          {/* 3D Flip Ticket Container */}
          <div
            className="relative cursor-pointer perspective-1000 group mx-auto"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-train-gold/50 via-[#40201a] to-train-bg border-2 border-train-gold shadow-brass-lg aspect-[2000/804]"
            >
              {/* Front of Ticket */}
              <div
                style={{ backfaceVisibility: 'hidden' }}
                className="absolute inset-2 sm:inset-3 rounded-xl overflow-hidden bg-train-darkwood flex items-center justify-center"
              >
                <img
                  src={concertData.assets.ticketFront}
                  alt="Liquid Express Ticket Front"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back of Ticket */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
                className="absolute inset-2 sm:inset-3 rounded-xl overflow-hidden bg-train-darkwood flex items-center justify-center"
              >
                <img
                  src={concertData.assets.ticketBack}
                  alt="Liquid Express Ticket Back"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Flip Toggle Button */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-train-gold/60 bg-train-secondary text-train-champagne text-xs font-serif tracking-wider hover:shadow-brass transition-all"
            >
              <RotateCw className="w-3.5 h-3.5 text-train-gold" />
              <span>승차권 {isFlipped ? '앞면 보기' : '뒷면 보기'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Personal Boarding Pass Generator */}
        <div className="mt-12 max-w-2xl mx-auto p-6 rounded-2xl border border-train-gold/40 bg-[#5d1212] shadow-md">
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
              className="flex-1 px-3 py-2 rounded-lg border border-train-gold/40 bg-black text-xs sm:text-sm text-train-ivory placeholder:text-train-ivory/40 focus:outline-none focus:border-train-gold"
            />
            <div className="flex gap-2">
              {concertData.dates.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDay(d.id)}
                  className={`px-3 py-2 rounded-lg border text-xs font-serif transition-colors ${
                    selectedDay === d.id
                      ? 'border-train-gold bg-[#781818] text-train-champagne font-bold shadow'
                      : 'border-train-gold/30 bg-black/60 text-train-ivory/70 hover:border-train-gold/60'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Pass Preview */}
          <div className="p-4 sm:p-5 rounded-xl border border-train-gold/50 bg-[#450d0d] shadow-inner relative overflow-hidden">
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
                  {selectedDateObj.date.split(' ')[0]} {selectedDateObj.time}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-serif text-train-gold/70">PLATFORM / VENUE</span>
                <span className="font-serif text-sm font-bold text-train-ivory">SU 104</span>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-[11px] text-train-ivory/70">
              <span className="font-serif text-train-gold/80">NO. 26-2-LIQUID</span>
              <span className="italic font-korean">"하나님의 사랑 안에서 안전한 여정 되시길 소망합니다."</span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {concertData.dates.map((dateItem) => (
            <BrassBorder key={dateItem.id} innerClassName="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-train-gold/30">
                <span className="font-serif text-xs font-bold px-2.5 py-1 rounded bg-[#781818] border border-train-gold text-train-champagne shadow-sm">
                  {dateItem.day}
                </span>
                <span className="text-xs text-train-gold font-serif">
                  입장 {dateItem.doorsOpen}
                </span>
              </div>

              <div>
                <p className="font-serif text-sm text-train-ivory/80">
                  {dateItem.date}
                </p>
                <h4 className="font-serif text-2xl text-train-champagne font-bold mt-1">
                  출발 {dateItem.time}
                </h4>
              </div>

              <p className="text-xs text-train-ivory/70 font-korean leading-relaxed">
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

        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-train-gold/50 bg-[#5d1212] shadow-brass">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Address Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-train-gold" />
                <h3 className="font-serif text-xl text-train-champagne font-bold">
                  {concertData.venue.name} ({concertData.venue.code})
                </h3>
              </div>

              <div className="p-3.5 rounded-lg bg-[#450d0d] border border-train-gold/30 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-train-ivory/90 font-mono">
                  {concertData.venue.address}
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-train-gold/50 bg-[#5d1212] hover:bg-[#781818] text-train-champagne text-xs font-serif hover:shadow transition-all"
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

              <p className="font-korean text-xs sm:text-sm text-train-ivory/80 leading-relaxed">
                {concertData.venue.directions}
              </p>

              <div className="pt-2">
                <a
                  href={concertData.venue.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-train-gold/60 bg-black hover:bg-[#781818] text-train-champagne text-xs font-serif tracking-wider transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-train-gold" />
                  <span>네이버 지도에서 크게 보기</span>
                  <ExternalLink className="w-3 h-3 text-train-gold/70" />
                </a>
              </div>
            </div>

            {/* Embedded Live Map Screen (QR코드 대신 바로 지도 화면 임베드) */}
            <div className="md:col-span-7 rounded-xl overflow-hidden border border-train-gold/50 shadow-inner bg-black flex flex-col">
              <div className="px-4 py-2 bg-black/90 border-b border-train-gold/30 flex items-center justify-between text-xs font-serif text-train-gold">
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
      {/* 4. PASSENGER GUIDELINES (관람 유의사항)                                   */}
      {/* ========================================================================= */}
      <section>
        <ScriptHeading
          subtitle="PASSENGER GUIDELINES"
          title="관람 및 탑승 유의사항"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {concertData.guidelines.map((rule, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-train-gold/40 bg-[#5d1212] space-y-2 hover:border-train-gold transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-xs font-bold text-train-gold">
                  RULE 0{idx + 1}
                </span>
                <h4 className="font-serif text-sm text-train-champagne font-bold">
                  {rule.title}
                </h4>
              </div>
              <p className="text-xs text-train-ivory/80 font-korean leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
