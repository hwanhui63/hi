import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Star,
  PenTool,
  Clock,
  User,
  AlertCircle,
  CheckCircle2,
  Lock,
  Unlock,
  Sparkles,
} from 'lucide-react';
import { fetchReviews, submitReview, isSupabaseConfigured } from '../lib/supabase';
import { BrassBorder, VintageDivider, ScriptHeading } from '../components/common/BrassBorder';

// Concert end timestamp (DAY 2 16:00 show ends approximately 17:30 KST on 2026-12-05)
const CONCERT_END_DATE = new Date('2026-12-05T17:30:00+09:00');

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallbackMode, setIsFallbackMode] = useState(false);
  const [isTestModeEnabled, setIsTestModeEnabled] = useState(false);

  // Form State
  const [nickname, setNickname] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Determine if the concert has officially concluded
  const now = new Date();
  const isConcertFinished = now >= CONCERT_END_DATE || isTestModeEnabled;

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const res = await fetchReviews();
      setReviews(res.data);
      setIsFallbackMode(res.isFallback);
    } catch (e) {
      console.warn('Failed to load reviews:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await submitReview({ nickname, rating, content });
      setSuccessMessage('열차 여행의 소중한 추억이 승객 일지에 기록되었습니다.');
      setNickname('');
      setContent('');
      setRating(5);
      await loadReviews();
      setTimeout(() => setSuccessMessage(''), 4000);
    } catch (err) {
      setErrorMessage(err.message || '후기를 저장하지 못했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-train-bg text-train-ivory pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Page Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-train-gold">
          PASSENGER LOG & MEMORIES
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-train-ivory font-bold tracking-wide">
          공연 후기 및 여행일지 (MEMORIES)
        </h1>
        <p className="font-script text-3xl sm:text-4xl text-train-champagne">
          Memories from the Journey
        </p>
      </div>

      {/* Test Mode / Preview Notice Pill */}
      <div className="flex items-center justify-between p-3.5 rounded-xl border border-train-gold/30 bg-train-secondary/60 mb-10 text-xs">
        <div className="flex items-center gap-2 text-train-ivory/80">
          <Clock className="w-4 h-4 text-train-gold" />
          <span>
            공연 종료 예정일: <strong className="text-train-champagne">2026년 12월 5일 17:30</strong>
          </span>
        </div>

        {/* Evaluator / Preview Mode Toggle */}
        <button
          onClick={() => setIsTestModeEnabled(!isTestModeEnabled)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded border text-[11px] font-serif transition-colors ${
            isTestModeEnabled
              ? 'border-emerald-500 bg-emerald-950/80 text-emerald-300 font-bold'
              : 'border-train-gold/40 text-train-gold hover:border-train-gold'
          }`}
        >
          {isTestModeEnabled ? (
            <>
              <Unlock className="w-3 h-3" />
              <span>후기 작성 테스트 모드 ON</span>
            </>
          ) : (
            <>
              <Lock className="w-3 h-3" />
              <span>후기 작성 테스트 잠금해제</span>
            </>
          )}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRE-CONCERT OR ACTIVE REVIEW FORM                                      */}
      {/* ========================================================================= */}
      {!isConcertFinished ? (
        /* Pre-Concert State */
        <div className="mb-20 p-8 sm:p-12 rounded-2xl border-2 border-train-gold/50 bg-gradient-to-b from-train-secondary via-[#241310] to-train-bg shadow-brass text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full border border-train-gold/60 bg-train-burgundy/60 flex items-center justify-center shadow-brass">
            <BookOpen className="w-8 h-8 text-train-champagne" />
          </div>

          <span className="font-serif text-xs tracking-widest text-train-gold uppercase block">
            JOURNEY IN PROGRESS
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl text-train-champagne font-bold">
            "우리의 여행이 끝난 뒤, 이곳에 추억을 남겨 주세요."
          </h2>

          <p className="font-korean text-xs sm:text-sm text-train-ivory/80 max-w-lg mx-auto leading-relaxed">
            Train 1225 열차가 12월 4일과 5일의 운행을 모두 마친 후, 승객 여러분의 감상과 기억을 담을 수 있는 
            여행일지 작성 공간이 정식 오픈됩니다.
          </p>

          <p className="text-[11px] text-train-gold/60 font-serif">
            * 상단의 '후기 작성 테스트 잠금해제' 버튼을 누르시면 지금 바로 테스트 작성을 진행해 보실 수 있습니다.
          </p>
        </div>
      ) : (
        /* Active Post-Concert Review Form */
        <div className="mb-20">
          <BrassBorder innerClassName="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-train-gold/30">
              <PenTool className="w-4 h-4 text-train-gold" />
              <h3 className="font-serif text-base text-train-champagne font-bold tracking-wider uppercase">
                승객 여행일지 작성하기 (WRITE A MEMORY)
              </h3>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nickname */}
                <div>
                  <label className="block font-serif text-xs text-train-gold uppercase tracking-wider mb-1.5">
                    탑승객 성함 / 닉네임
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-train-gold/60" />
                    <input
                      type="text"
                      required
                      maxLength={20}
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="닉네임 (최대 20자)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-train-gold/40 bg-train-bg text-xs sm:text-sm text-train-ivory placeholder:text-train-ivory/40 focus:outline-none focus:border-train-gold"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block font-serif text-xs text-train-gold uppercase tracking-wider mb-1.5">
                    여행 평점 (RATING)
                  </label>
                  <div className="flex items-center gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'text-train-champagne fill-train-champagne drop-shadow'
                              : 'text-train-ivory/30'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="font-serif text-xs text-train-gold ml-2">
                      {rating} / 5
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="font-serif text-xs text-train-gold uppercase tracking-wider">
                    공연 후기 및 감상문
                  </label>
                  <span className="text-[11px] text-train-ivory/50">
                    {content.length} / 500자
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  maxLength={500}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Train 1225 열차와 함께한 여정은 어떠셨나요? 마음 깊이 남은 음악과 순간들을 편안히 적어주세요."
                  className="w-full p-3 rounded-lg border border-train-gold/40 bg-train-bg text-xs sm:text-sm text-train-ivory placeholder:text-train-ivory/40 focus:outline-none focus:border-train-gold font-korean"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-lg border border-train-champagne bg-gradient-to-r from-train-burgundy to-[#2d1410] text-train-champagne font-serif text-xs tracking-widest uppercase font-bold shadow-brass hover:shadow-brass-lg disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? '기록 중...' : '여행일지에 기록 남기기'}
                </button>
              </div>
            </form>
          </BrassBorder>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. REVIEWS LIST: Vintage Passenger Log Book                               */}
      {/* ========================================================================= */}
      <section>
        <ScriptHeading
          subtitle="PASSENGER REVIEWS"
          title="승객들의 여행일지 목록"
          titleEn="Letters & Memories"
        />

        <div className="mt-10 space-y-5">
          {reviews.length === 0 ? (
            <div className="p-8 text-center text-xs text-train-ivory/60 font-korean rounded-xl border border-train-gold/20 bg-train-secondary/40">
              아직 작성된 여행일지가 없습니다. 첫 번째 추억을 남겨주세요.
            </div>
          ) : (
            reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl border border-train-gold/30 bg-gradient-to-b from-train-secondary/90 via-[#21110f] to-train-bg shadow-md hover:border-train-gold/60 transition-colors space-y-3"
              >
                {/* Header: Nickname, Rating, Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-train-gold/20">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-sm font-bold text-train-champagne">
                      {rev.nickname}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < (rev.rating || 5)
                              ? 'text-train-champagne fill-train-champagne'
                              : 'text-train-ivory/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <span className="text-[11px] font-serif text-train-ivory/50 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-train-gold/70" />
                    {new Date(rev.created_at).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                {/* Content */}
                <p className="font-korean text-xs sm:text-sm text-train-ivory/90 leading-relaxed">
                  "{rev.content}"
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
