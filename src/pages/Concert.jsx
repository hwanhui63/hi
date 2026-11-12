import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Train,
  Clock,
  Music,
  Users,
  Compass,
  ChevronRight,
  Sparkles,
  Info,
  UserCheck,
  Disc,
} from 'lucide-react';
import { concertData } from '../data/concert';
import { setlistData } from '../data/setlist';
import { castGroups } from '../data/cast';
import { BrassBorder, VintageDivider, ScriptHeading } from '../components/common/BrassBorder';

export default function Concert() {
  const [selectedStationId, setSelectedStationId] = useState(setlistData.stations[0].id);
  const [activeCastTab, setActiveCastTab] = useState(castGroups[0].id);

  const selectedStation =
    setlistData.stations.find((s) => s.id === selectedStationId) || setlistData.stations[0];

  const currentCastGroup =
    castGroups.find((g) => g.id === activeCastTab) || castGroups[0];

  return (
    <div className="relative min-h-screen bg-train-bg text-train-ivory pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Page Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-train-gold">
          THE JOURNEY ON BOARD
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-train-ivory font-bold tracking-wide">
          이번 자체공연: TRAIN 1225
        </h1>
        <p className="font-script text-3xl sm:text-4xl text-train-champagne">
          Stations of Grace & Fellowship
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 1. INTRO: The Story of Train 1225                                         */}
      {/* ========================================================================= */}
      <section className="mb-24">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#5d1212] border border-train-gold/50 shadow-brass">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Story Text */}
            <div className="md:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-train-gold/40 bg-black/60 text-train-champagne text-xs font-serif tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-train-gold" />
                <span>CONCERT STORY & VISION</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-train-champagne font-bold">
                "차가운 겨울밤, 빛을 향해 달리는 1225호 열차"
              </h2>

              <div className="space-y-4 font-korean text-xs sm:text-sm text-train-ivory/85 leading-relaxed">
                <p>
                  한 해의 끝자락, 차가운 바람이 부는 2026년 겨울. 
                  우리는 각자의 짐과 피로를 안고 또 다른 계절을 맞이합니다. 
                  그러나 12월 25일의 성탄은 우리에게 어둠을 밝히는 영원한 빛이 이 땅에 오셨음을 선포합니다.
                </p>
                <p>
                  「Train 1225」는 한동대학교 학생회관 104호에서 출발하여 크리스마스의 참된 소망을 향해 달리는 
                  빈티지 야간열차 콘서트입니다. 창밖으로 흩날리는 눈발과 차가운 설원을 지나며, 
                  어떤 환난이나 시련도 우리를 하나님의 사랑에서 끊을 수 없음(롬 8:38-39)을 
                  찬양과 라이브 밴드 연주로 노래합니다.
                </p>
                <p className="text-train-gold/90 italic">
                  * 상세한 기획 의도 및 곡별 나눔은 공연 현장 프로그램 북과 무대를 통해 더욱 깊이 공개될 예정입니다.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-serif text-train-champagne/80">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-train-gold" />
                  소요 시간: 약 80분 (러닝타임)
                </span>
                <span className="flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-train-gold" />
                  운행 노선: 총 6개의 음악 정거장
                </span>
              </div>
            </div>

            {/* Poster Miniature Frame */}
            <div className="md:col-span-4 flex justify-center">
              <div className="p-2 rounded-xl bg-train-bg border border-train-gold/60 shadow-lg max-w-[220px]">
                <img
                  src={concertData.assets.poster}
                  alt="Train 1225 Poster"
                  className="rounded-lg shadow w-full h-auto object-cover"
                />
                <p className="text-center font-serif text-[10px] tracking-widest text-train-gold/70 mt-2 uppercase">
                  OFFICIAL POSTER
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SETLIST: Stations of Music (Route Map)                                 */}
      {/* ========================================================================= */}
      <section className="mb-24">
        <ScriptHeading
          subtitle="RAILWAY ROUTE MAP"
          title="음악의 정거장들 (SETLIST)"
          titleEn="Stations of Melody"
        />

        <p className="text-center text-xs sm:text-sm text-train-ivory/70 max-w-xl mx-auto mt-3 font-korean">
          열차는 6개의 정거장을 거치며 달립니다. 각 정거장을 클릭하여 머무르는 선율과 팀의 이야기를 확인하세요.
        </p>

        {/* Train Route Map Timeline (Interactive Stations) */}
        <div className="mt-12 relative">
          {/* Track Line */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-1 -translate-y-1/2 bg-gradient-to-r from-train-gold/30 via-train-gold to-train-gold/30 z-0" />

          {/* Station Nodes Grid */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {setlistData.stations.map((station) => {
              const isSelected = selectedStationId === station.id;
              return (
                <button
                  key={station.id}
                  onClick={() => setSelectedStationId(station.id)}
                  className={`group relative text-center p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-between min-h-[110px] ${
                    isSelected
                      ? 'bg-[#781818] border-train-champagne shadow-brass scale-105'
                      : 'bg-[#5d1212] border-train-gold/40 hover:border-train-gold hover:bg-[#6e1515]'
                  }`}
                >
                  {/* Station Number Indicator */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-serif text-xs font-bold mb-2 transition-all ${
                      isSelected
                        ? 'bg-train-champagne text-train-bg shadow-sm'
                        : 'border border-train-gold/50 text-train-gold group-hover:border-train-gold'
                    }`}
                  >
                    {station.number}
                  </span>

                  {/* Station Name */}
                  <div className="space-y-0.5">
                    <span
                      className={`block font-serif text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                        isSelected ? 'text-train-champagne' : 'text-train-ivory/80'
                      }`}
                    >
                      STATION {station.number}
                    </span>
                    <span className="block text-[11px] text-train-ivory/60 truncate max-w-[120px]">
                      {station.stationName.split('—')[0]}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <span className="text-[9px] font-serif uppercase tracking-widest text-train-gold/60 mt-1">
                    {station.status === 'TBA' ? '추후 공개' : 'CONFIRMED'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Station Expanded Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStation.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <BrassBorder innerClassName="space-y-6">
              {/* Card Header: Station Label & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-train-gold/30">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xs font-bold px-2 py-0.5 rounded bg-train-gold/20 text-train-champagne border border-train-gold/40">
                      {selectedStation.stationNameEn}
                    </span>
                    <span className="text-xs text-train-gold">
                      {selectedStation.stationName}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-train-ivory font-bold">
                    {selectedStation.title}{' '}
                    <span className="text-sm font-normal text-train-ivory/60 font-sans">
                      ({selectedStation.titleEn})
                    </span>
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-train-gold/40 bg-train-bg text-train-champagne text-xs font-serif">
                    <Clock className="w-3.5 h-3.5 text-train-gold" />
                    <span>{selectedStation.duration}</span>
                  </span>
                  <span className="px-3 py-1 rounded bg-amber-900/40 text-train-champagne text-xs font-serif border border-train-gold/40">
                    선곡 정보: {selectedStation.status === 'TBA' ? '추후 공개' : '확정'}
                  </span>
                </div>
              </div>

              {/* Station Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                {/* Column 1: Performance Team & Members */}
                <div className="space-y-4 p-4 rounded-lg bg-[#450d0d] border border-train-gold/30">
                  <div className="flex items-center gap-2 text-train-champagne font-serif font-semibold">
                    <Users className="w-4 h-4 text-train-gold" />
                    <span>공연 팀 및 아티스트</span>
                  </div>

                  <div className="space-y-2 text-train-ivory/80">
                    <div>
                      <span className="text-train-gold/70 block text-[11px] font-serif">원곡 아티스트</span>
                      <p className="font-medium">{selectedStation.originalArtist}</p>
                    </div>
                    <div>
                      <span className="text-train-gold/70 block text-[11px] font-serif">공연 세션 팀</span>
                      <p className="font-medium text-train-champagne">{selectedStation.team}</p>
                    </div>
                    <div>
                      <span className="text-train-gold/70 block text-[11px] font-serif">팀 소개</span>
                      <p className="font-korean text-xs leading-relaxed">{selectedStation.teamIntro}</p>
                    </div>
                  </div>
                </div>

                {/* Column 2: Song Interpretation & Message */}
                <div className="space-y-4 p-4 rounded-lg bg-[#450d0d] border border-train-gold/30">
                  <div className="flex items-center gap-2 text-train-champagne font-serif font-semibold">
                    <Disc className="w-4 h-4 text-train-gold" />
                    <span>곡 해석 및 무대 메시지</span>
                  </div>

                  <p className="font-korean text-xs leading-relaxed text-train-ivory/85">
                    {selectedStation.interpretation}
                  </p>

                  <div className="pt-2 border-t border-train-gold/20">
                    <span className="text-train-gold/70 block text-[11px] font-serif mb-1.5">
                      출연 멤버 (LINEUP)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedStation.members.map((mem, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded border border-train-gold/30 bg-[#5d1212] text-[11px] text-train-ivory/90"
                        >
                          {mem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BrassBorder>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAST: People on Board (Passenger & Crew Manifest)                      */}
      {/* ========================================================================= */}
      <section>
        <ScriptHeading
          subtitle="CREW & PASSENGER MANIFEST"
          title="열차 탑승객 명부 (CAST)"
          titleEn="People on Board"
        />

        <p className="text-center text-xs sm:text-sm text-train-ivory/70 max-w-xl mx-auto mt-3 font-korean">
          Train 1225의 여정을 함께 만드는 디렉, 실기수, 아기기수, OB, 그리고 보이지 않는 곳에서 섬겨주신 분들입니다.
        </p>

        {/* Tab Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {castGroups.map((group) => {
            const isActive = activeCastTab === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveCastTab(group.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-lg border font-serif text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'border-train-gold bg-[#781818] text-train-champagne shadow-brass font-bold'
                    : 'border-train-gold/40 bg-[#5d1212] text-train-ivory/80 hover:border-train-gold hover:text-train-champagne'
                }`}
              >
                <span>{group.label}</span>
                <span className="hidden sm:inline text-[10px] opacity-60 ml-1.5">
                  ({group.labelEn.split(' ')[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Group Description */}
        <div className="text-center my-6">
          <p className="text-xs text-train-gold font-serif tracking-widest uppercase">
            {currentCastGroup.labelEn}
          </p>
          <p className="text-xs text-train-ivory/60 mt-1 font-korean">
            {currentCastGroup.description}
          </p>
        </div>

        {/* Crew / Passenger Roster Cards */}
        <motion.div
          key={currentCastGroup.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {currentCastGroup.members.map((member) => (
            <div
              key={member.id}
              className="relative p-5 rounded-xl border border-train-gold/40 bg-[#5d1212] shadow-md hover:border-train-gold transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Header: Cohort badge & Role */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-train-gold/20">
                  <span className="font-serif text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-train-gold/15 text-train-gold border border-train-gold/30">
                    {member.cohort}
                  </span>
                  {member.isTba ? (
                    <span className="text-[10px] font-serif text-train-ivory/40">라인업 준비 중</span>
                  ) : (
                    <span className="text-[10px] font-serif text-emerald-400/90 flex items-center gap-1">
                      <UserCheck className="w-3 h-3" />
                      탑승 확인
                    </span>
                  )}
                </div>

                {/* Name & Role */}
                <div className="mt-4 space-y-1">
                  <h4 className="font-serif text-lg text-train-ivory font-bold group-hover:text-train-champagne transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs text-train-gold font-medium font-korean">
                    {member.role}
                  </p>
                </div>

                {/* Message */}
                <p className="mt-3 text-xs text-train-ivory/70 leading-relaxed font-korean line-clamp-3">
                  "{member.message}"
                </p>
              </div>

              {/* Footer Details */}
              {member.contact && (
                <div className="mt-4 pt-3 border-t border-train-gold/20 flex items-center justify-between text-[11px] text-train-ivory/60">
                  <span>문의</span>
                  <span className="font-serif text-train-champagne">{member.contact}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
