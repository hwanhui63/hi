import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Train,
  Clock,
  Compass,
  Sparkles,
  Calendar,
  User,
  Disc,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { setlistData } from '../data/setlist';
import { castGroups } from '../data/cast';
import { BrassBorder, ScriptHeading } from '../components/common/BrassBorder';

export default function Concert() {
  const [selectedStationId, setSelectedStationId] = useState(setlistData.stations[0].id);
  const [activeCastTab, setActiveCastTab] = useState(castGroups[0].id);

  const selectedStation =
    setlistData.stations.find((s) => s.id === selectedStationId) || setlistData.stations[0];

  const currentCastGroup =
    castGroups.find((g) => g.id === activeCastTab) || castGroups[0];

  return (
    <div className="relative min-h-screen text-train-ivory pb-24 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Official Poster Large Showcase                           */}
      {/* ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-lg sm:max-w-xl md:max-w-2xl w-full flex flex-col items-center"
        >
          <img
            src={concertData.assets.poster}
            alt="Train 1225 Official Concert Poster"
            className="w-full h-auto max-h-[85vh] object-contain mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* 2. CONCERT STORY: “당신은 지금 어디로 가고 계십니까 ?”                      */}
        {/* ========================================================================= */}
        <section>
          <div className="p-6 sm:p-10 rounded-3xl bg-[#5d1212] border border-train-gold/50 shadow-brass">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-train-gold/40 bg-black/60 text-train-champagne text-xs font-serif tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-train-gold" />
                <span>CONCERT STORY</span>
              </div>

              {/* Main Question Heading */}
              <h2 className="font-serif text-2xl sm:text-4xl text-train-champagne font-bold leading-snug">
                “당신은 지금 어디로 가고 계십니까 ?”
              </h2>

              {/* Story Narrative */}
              <div className="space-y-4 font-korean text-xs sm:text-sm text-train-ivory/90 leading-relaxed max-w-3xl">
                <p>
                  한 해의 분주한 여정 끝에서, 우리는 때로 목적지를 잊은 채 앞만 보고 달리고 있지는 않나요? 
                  차가운 겨울바람 속에서 각자의 짐과 피로를 안고 걸어가는 우리에게, 12월 25일의 성탄은 가장 따뜻한 소망의 빛이 이 땅에 오셨음을 선포합니다.
                </p>
                <p>
                  「Train 1225」는 한동대학교 학생회관 104호에서 출발하여 크리스마스의 참된 안식과 회복을 향해 달리는 빈티지 야간열차입니다. 
                  어두운 밤하늘을 가르고 빛을 향해 달리는 열차의 창가에서, 십자가의 보혈과 변함없는 그리스도의 사랑을 라이브 밴드 연주로 노래합니다.
                </p>
              </div>

              {/* Romans 8:38-39 Scripture Quote Box */}
              <div className="p-5 sm:p-6 rounded-2xl border border-train-gold/40 bg-black/60 text-center space-y-2">
                <p className="font-serif text-[11px] text-train-champagne tracking-[0.25em] uppercase font-semibold">
                  ROMANS 8:38-39
                </p>
                <blockquote className="font-korean text-xs sm:text-sm text-train-ivory/95 leading-relaxed italic max-w-2xl mx-auto">
                  “내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 
                  높음이나 깊음이나 다른 어떤 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라”
                </blockquote>
                <p className="font-serif text-[10px] text-train-gold tracking-widest">
                  — 로마서 8:38-39 —
                </p>
              </div>

              {/* Schedule & Duration Information 3-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Schedule Box */}
                <div className="p-4 rounded-2xl border border-train-gold/30 bg-black/60 space-y-2">
                  <div className="flex items-center gap-2 text-train-champagne font-serif text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                    <span>총 3회차 운행</span>
                  </div>
                  <div className="space-y-1 text-xs text-train-ivory/80 font-serif">
                    <div>1공: 12월 4일 (금) 20:30</div>
                    <div>2공: 12월 5일 (토) 14:00</div>
                    <div>3공: 12월 5일 (토) 16:00</div>
                  </div>
                </div>

                {/* Duration Box */}
                <div className="p-4 rounded-2xl border border-train-gold/30 bg-black/60 space-y-2">
                  <div className="flex items-center gap-2 text-train-champagne font-serif text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                    <span>예상 소요 시간</span>
                  </div>
                  <div className="text-xs text-train-ivory/80 space-y-1">
                    <p className="font-serif text-sm font-semibold text-train-champagne">약 1시간 30분</p>
                    <p className="text-[11px] text-train-ivory/60 font-korean">인터미션 없이 연속 운행</p>
                  </div>
                </div>

                {/* Venue Box */}
                <div className="p-4 rounded-2xl border border-train-gold/30 bg-black/60 space-y-2">
                  <div className="flex items-center gap-2 text-train-champagne font-serif text-xs font-semibold">
                    <Train className="w-3.5 h-3.5 text-train-gold flex-shrink-0" />
                    <span>탑승 장소</span>
                  </div>
                  <div className="text-xs text-train-ivory/80 space-y-1 font-korean">
                    <p className="font-medium text-train-champagne">한동대학교 학생회관 104호</p>
                    <p className="text-[11px] text-train-ivory/60 font-serif">HGU Student Union 104</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SETLIST: Railway Route Map / 운행 노선 (Setlist)                         */}
        {/* ========================================================================= */}
        <section>
          <ScriptHeading
            subtitle="RAILWAY ROUTE MAP"
            title="운행 노선 (Setlist)"
          />

          <p className="text-center text-xs sm:text-sm text-train-ivory/70 max-w-xl mx-auto mt-3 font-korean">
            열차는 6개의 정거장을 거치며 달립니다. 각 정거장을 선택하여 선율과 팀의 이야기를 확인하세요.
          </p>

          {/* Train Route Map Timeline (Interactive Stations - 6 Stations) */}
          <div className="mt-12 relative">
            {/* Track Line */}
            <div className="hidden md:block absolute top-1/2 left-6 right-6 h-1 -translate-y-1/2 bg-gradient-to-r from-train-gold/30 via-train-gold to-train-gold/30 z-0" />

            {/* Station Nodes Grid (6 Stations: Station 00 ~ 05) */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
              {setlistData.stations.map((station) => {
                const isSelected = selectedStationId === station.id;
                return (
                  <button
                    key={station.id}
                    onClick={() => setSelectedStationId(station.id)}
                    className={`group relative text-center py-2.5 px-2 sm:px-3 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-1 min-h-[66px] sm:min-h-[70px] ${
                      isSelected
                        ? 'bg-train-champagne text-[#200404] border-2 border-train-champagne shadow-brass-lg scale-105 z-20 font-bold'
                        : 'bg-[#3a0808] text-train-ivory border border-train-gold/40 hover:border-train-gold hover:bg-[#4a0a0a] z-10'
                    }`}
                  >
                    {/* Station Number Indicator & Label */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center font-serif text-[10px] font-bold transition-all ${
                          isSelected
                            ? 'bg-[#200404] text-train-champagne shadow-sm'
                            : 'border border-train-gold/60 text-train-gold group-hover:border-train-gold'
                        }`}
                      >
                        {station.number}
                      </span>
                      <span
                        className={`font-serif text-[10px] uppercase tracking-wider font-bold ${
                          isSelected ? 'text-[#200404]/80' : 'text-train-gold/90'
                        }`}
                      >
                        STATION {station.number}
                      </span>
                    </div>

                    {/* Station Name */}
                    <span
                      className={`block text-xs sm:text-sm font-serif font-black truncate max-w-[130px] ${
                        isSelected ? 'text-[#200404]' : 'text-train-ivory'
                      }`}
                    >
                      {station.stationName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Station Expanded Songs Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStation.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <BrassBorder rounded="rounded-3xl" innerRounded="rounded-[22px]" innerClassName="space-y-6">
                {/* Station Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-train-gold/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-xs font-bold px-2.5 py-0.5 rounded-full bg-train-champagne text-black">
                        STATION {selectedStation.number}
                      </span>
                      <h3 className="font-serif text-2xl text-train-champagne font-bold">
                        {selectedStation.stationName}
                      </h3>
                    </div>
                    <p className="text-xs text-train-ivory/80 font-korean">
                      {selectedStation.themeDescription}
                    </p>
                  </div>

                  <span className="font-serif text-xs tracking-widest text-train-gold uppercase px-3 py-1 rounded-full border border-train-gold/30 bg-black/40">
                    {selectedStation.songs.length} {selectedStation.songs.length === 1 ? 'TRACK' : 'TRACKS'} IN SERVICE
                  </span>
                </div>

                {/* Song Cards List */}
                <div className="space-y-4">
                  {selectedStation.songs.map((song, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl border border-train-gold/30 bg-[#450d0d] space-y-3 hover:border-train-gold transition-colors shadow-sm"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Disc className="w-4 h-4 text-train-gold animate-spin-slow flex-shrink-0" />
                            <h4 className="font-serif text-base sm:text-lg text-train-champagne font-bold">
                              {song.title}
                            </h4>
                          </div>
                          <p className="text-xs text-train-ivory/70 font-serif">
                            원곡: <span className="text-train-gold font-medium">{song.originalArtist}</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          {song.team && (
                            <span className="font-serif text-[11px] px-2.5 py-1 rounded-full border border-train-gold/40 bg-black/50 text-train-ivory/90">
                              {song.team}
                            </span>
                          )}
                          <span className="font-serif text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-300">
                            CONFIRMED
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-train-ivory/85 font-korean leading-relaxed pl-6 border-l-2 border-train-gold/40">
                        {song.interpretation}
                      </p>
                    </div>
                  ))}
                </div>
              </BrassBorder>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ========================================================================= */}
        {/* 4. MEMBER: Train 1225 승무원                                              */}
        {/* ========================================================================= */}
        <section id="members" className="scroll-mt-28">
          <ScriptHeading
            subtitle="CREW"
            title="Train 1225 승무원"
          />

          <p className="text-center text-xs sm:text-sm text-train-ivory/70 max-w-xl mx-auto mt-3 font-korean">
            Train 1225의 여정을 준비한 승무원들 입니다.
          </p>

          {/* Tab Navigation */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {castGroups.map((group) => {
              const isActive = activeCastTab === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveCastTab(group.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-2xl border font-serif text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'border-train-gold bg-[#781818] text-train-champagne shadow-brass font-bold'
                      : 'border-train-gold/40 bg-[#5d1212] text-train-ivory/80 hover:border-train-gold hover:text-train-champagne'
                  }`}
                >
                  <span>{group.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCastGroup.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8"
            >
              {/* Type 1: ID Cards with Photo Slot (디렉터, 실기수 25, 아기기수 26) */}
              {currentCastGroup.type === 'cards' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentCastGroup.members.map((member) => (
                    <div
                      key={member.id}
                      className="p-4 sm:p-5 rounded-2xl border border-train-gold/40 bg-[#5d1212] shadow-brass hover:border-train-gold transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex gap-4">
                        {/* ID Photo Slot */}
                        <div className="relative w-20 h-24 sm:w-22 sm:h-28 rounded-xl border border-train-gold/60 bg-black/90 flex-shrink-0 overflow-hidden flex flex-col items-center justify-center p-1 shadow-inner">
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-center p-1 rounded-lg bg-gradient-to-b from-[#2e1212] to-black">
                              <User className="w-6 h-6 text-train-gold/50 mb-1" />
                              <span className="text-[8px] font-serif tracking-widest text-train-gold/60 uppercase">
                                PASS ID
                              </span>
                            </div>
                          )}
                          {/* Vintage Brass Corner Accents */}
                          <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-train-champagne/80" />
                          <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-train-champagne/80" />
                          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-train-champagne/80" />
                          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-train-champagne/80" />
                        </div>

                        {/* ID Details */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-serif text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md bg-black/60 text-train-champagne border border-train-gold/40 font-semibold">
                              {member.cohort}
                            </span>
                            {/* 약어로 써있는 악기 블록 배지 유지 */}
                            <span className="font-serif text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md bg-train-gold/20 text-train-champagne border border-train-gold/40 font-bold">
                              {member.instrument}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-serif text-lg sm:text-xl text-train-ivory font-bold truncate">
                              {member.name}
                            </h4>
                            <p className="text-xs text-train-gold font-medium font-korean mt-0.5">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Verified Strip */}
                      <div className="mt-4 pt-2.5 border-t border-train-gold/20 flex items-center justify-between text-[10px] font-serif text-train-gold/70">
                        <span>LIQUID CREW PASS</span>
                        <span className="text-train-champagne font-semibold tracking-wider">
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Type 2: OB List (00 기수 표시) */}
              {currentCastGroup.type === 'list' && (
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {currentCastGroup.members.map((ob) => (
                      <div
                        key={ob.id}
                        className="p-3 rounded-2xl border border-train-gold/40 bg-[#5d1212] flex items-center justify-between text-xs hover:border-train-gold transition-colors shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-[11px] text-train-gold font-bold px-2 py-0.5 rounded-md bg-black/40">
                            {ob.cohort}
                          </span>
                          <span className="font-serif text-train-ivory font-bold">
                            {ob.name}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-black/60 text-train-champagne text-[10px] font-serif border border-train-gold/30 font-bold">
                          {ob.instrument}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 3: Special Thanks Groups */}
              {currentCastGroup.type === 'groups' && (
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentCastGroup.groups.map((grp, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-train-gold/40 bg-[#5d1212] space-y-3 shadow-md"
                    >
                      <div className="pb-2 border-b border-train-gold/20">
                        <span className="font-serif text-xs text-train-champagne font-bold tracking-wider uppercase block">
                          {grp.category}
                        </span>
                        <span className="text-[11px] text-train-ivory/60 font-korean">
                          {grp.roleNote}
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        {grp.helpers.map((name, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-sm text-train-ivory font-serif font-bold"
                          >
                            <Sparkles className="w-3 h-3 text-train-gold flex-shrink-0" />
                            <span>{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
