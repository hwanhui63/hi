import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Heart,
  PlusCircle,
  X,
  MessageSquare,
  Clock,
  User,
  AlertCircle,
  CheckCircle2,
  List,
  Eye,
} from 'lucide-react';
import { fetchWishes, submitWish, isSupabaseConfigured } from '../lib/supabase';
import {
  OrnamentIcon,
  RedBauble,
  GoldenStar,
  ChristmasBell,
  Ribbon,
  GiftBox,
} from '../components/common/OrnamentIcons';
import { BrassBorder, ScriptHeading } from '../components/common/BrassBorder';

const ORNAMENT_TYPES = [
  { id: 'bauble', name: '레드 보블', nameEn: 'Red Bauble', Component: RedBauble },
  { id: 'star', name: '황금 별', nameEn: 'Golden Star', Component: GoldenStar },
  { id: 'bell', name: '크리스마스 종', nameEn: 'Christmas Bell', Component: ChristmasBell },
  { id: 'ribbon', name: '실크 리본', nameEn: 'Ribbon', Component: Ribbon },
  { id: 'gift', name: '선물 상자', nameEn: 'Gift Box', Component: GiftBox },
];

export default function Guestbook() {
  const [wishes, setWishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallbackMode, setIsFallbackMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWish, setSelectedWish] = useState(null);
  const [viewMode, setViewMode] = useState('tree'); // 'tree' | 'list'

  // Form state
  const [selectedType, setSelectedType] = useState('bauble');
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Load Wishes on Mount
  useEffect(() => {
    loadWishes();
    const interval = setInterval(loadWishes, 20000); // 20s polling for new wishes
    return () => clearInterval(interval);
  }, []);

  const loadWishes = async () => {
    try {
      const res = await fetchWishes();
      setWishes(res.data);
      setIsFallbackMode(res.isFallback);
    } catch (e) {
      console.warn('Failed to fetch wishes:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // Calculate randomized tree placement coordinates within conical tree bounds
      // y between 22% (top) and 78% (bottom)
      const posY = Math.floor(22 + Math.random() * 56);
      // cone width expands as y increases
      const coneWidthFraction = (posY - 15) / 75; // 0.1 at top to ~0.9 at bottom
      const halfWidth = 10 + coneWidthFraction * 30; // 10% wide at top, 40% wide at bottom
      const posX = Math.floor(50 + (Math.random() * 2 - 1) * halfWidth);

      const res = await submitWish({
        ornamentType: selectedType,
        nickname,
        message,
        positionX: posX,
        positionY: posY,
      });

      // Fire confetti celebration
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#EBD39A', '#B88B4A', '#EF4444', '#FFFFFF'],
        });
      } catch {
        // ignore
      }

      setSuccessMessage('소중한 오너먼트가 트리에 달렸습니다!');
      setNickname('');
      setMessage('');
      await loadWishes();

      setTimeout(() => {
        setIsModalOpen(false);
        setSuccessMessage('');
      }, 1500);
    } catch (err) {
      setErrorMessage(err.message || '오너먼트를 저장하지 못했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-train-bg text-train-ivory pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="font-serif text-xs tracking-[0.3em] uppercase text-train-gold">
          PASSENGER WISH TREE
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-train-ivory font-bold tracking-wide">
          창밖의 크리스마스트리 (WISH TREE)
        </h1>
        <p className="font-script text-3xl sm:text-4xl text-train-champagne">
          Leave Your Wish on Train 1225
        </p>
        <p className="font-korean text-xs sm:text-sm text-train-ivory/70 max-w-lg mx-auto">
          달리는 열차의 창밖, 하얀 눈 덮인 설원에 우뚝 선 크리스마스트리에 
          공연을 향한 응원과 기도의 오너먼트를 달아주세요.
        </p>
      </div>

      {/* Control Bar: Hang Button, View Mode Toggle, Storage Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-xl border border-train-gold/40 bg-[#5d1212] backdrop-blur-md shadow-sm">
        {/* Left: Hang Button */}
        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-train-champagne bg-[#781818] hover:bg-[#8e1c1c] text-train-champagne font-serif text-xs sm:text-sm tracking-wider uppercase font-bold shadow-brass hover:shadow-brass-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <PlusCircle className="w-4 h-4 text-train-champagne" />
          <span>오너먼트 달기 (HANG A WISH)</span>
        </button>

        {/* Center: Total count & View Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-train-ivory/70 font-serif">
            매달린 오너먼트:{' '}
            <strong className="text-train-champagne font-bold">{wishes.length}</strong>개
          </span>

          <div className="flex items-center rounded-lg border border-train-gold/30 p-0.5 bg-train-bg">
            <button
              onClick={() => setViewMode('tree')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-serif transition-colors ${
                viewMode === 'tree'
                  ? 'bg-train-burgundy text-train-champagne font-semibold shadow-sm'
                  : 'text-train-ivory/60 hover:text-train-champagne'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>트리 뷰</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-serif transition-colors ${
                viewMode === 'list'
                  ? 'bg-train-burgundy text-train-champagne font-semibold shadow-sm'
                  : 'text-train-ivory/60 hover:text-train-champagne'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>목록 뷰</span>
            </button>
          </div>
        </div>

        {/* Right: DB Connection Pill */}
        <div className="text-[11px] font-serif text-train-ivory/60 flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${
              isSupabaseConfigured && !isFallbackMode ? 'bg-emerald-400' : 'bg-amber-400'
            }`}
          />
          <span>
            {isSupabaseConfigured && !isFallbackMode
              ? 'Supabase 실시간 동기화'
              : '로컬/데모 저장소 동기화 중'}
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: Interactive Tree View through the Window                          */}
      {/* ========================================================================= */}
      {viewMode === 'tree' ? (
        <div className="relative rounded-3xl p-3 sm:p-6 bg-[#5d1212] border-2 border-train-gold/70 shadow-brass-lg overflow-hidden">
          {/* Rivets */}
          <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-train-champagne" />
          <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-train-champagne" />
          <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-train-champagne" />
          <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-train-champagne" />

          {/* Window Glass Pane Container */}
          <div className="relative rounded-2xl overflow-hidden min-h-[580px] sm:min-h-[660px] border border-train-gold/40 bg-gradient-to-b from-[#09111c] via-[#0d1624] to-[#140b0a] shadow-inner flex items-center justify-center">
            {/* Distant Stars & Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(235,211,154,0.15),transparent_70%)] pointer-events-none" />

            {/* Christmas Tree Cut-out Image & Atmospheric Lighting */}
            <div className="relative w-full max-w-sm sm:max-w-md h-[540px] sm:h-[620px] flex items-center justify-center py-4">
              <img
                src="/assets/christmas-tree.png"
                alt="Christmas Tree"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(184,139,74,0.25)] select-none pointer-events-none"
              />

              {/* Hanging Ornaments Overlay */}
              <div className="absolute inset-0 pointer-events-auto">
                {wishes.map((wish, index) => {
                  const left = wish.position_x ?? 50;
                  const top = wish.position_y ?? 50;
                  return (
                    <motion.button
                      key={wish.id || index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: (index % 12) * 0.05, duration: 0.4 }}
                      style={{
                        position: 'absolute',
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setSelectedWish(wish)}
                      className="group cursor-pointer p-1 rounded-full hover:scale-125 focus:outline-none focus:ring-2 focus:ring-train-gold transition-transform duration-200"
                      title={`${wish.nickname}: ${wish.message}`}
                    >
                      <div className="relative animate-sway origin-top">
                        <OrnamentIcon type={wish.ornament_type} size={34} />
                        {/* Glow halo on hover */}
                        <span className="absolute -inset-1 rounded-full bg-train-champagne/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Instruction Callout at bottom */}
            <div className="absolute bottom-4 inset-x-4 text-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-train-gold/40 bg-train-bg/85 backdrop-blur-md text-[11px] text-train-champagne font-serif shadow">
                <Sparkles className="w-3.5 h-3.5 text-train-gold" />
                {wishes.length > 0
                  ? '트리에 매달린 오너먼트를 클릭하면 승객들의 메시지를 읽을 수 있습니다.'
                  : '상단의 [오너먼트 달기]를 눌러 첫 번째 오너먼트를 달아주세요!'}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* VIEW 2: Passenger Wishes List View                                        */
        /* ========================================================================= */
        wishes.length === 0 ? (
          <div className="p-12 text-center text-xs sm:text-sm text-train-ivory/70 font-korean rounded-2xl border border-train-gold/30 bg-[#5d1212]/80 space-y-3">
            <Sparkles className="w-8 h-8 text-train-gold mx-auto animate-pulse" />
            <p className="text-train-champagne font-serif text-sm">아직 매달린 오너먼트가 없습니다.</p>
            <p className="text-xs text-train-ivory/80">상단의 [오너먼트 달기] 버튼을 눌러 첫 번째 축복과 기도의 메시지를 남겨보세요!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                onClick={() => setSelectedWish(wish)}
                className="p-5 rounded-xl border border-train-gold/40 bg-[#5d1212] hover:border-train-gold cursor-pointer transition-all hover:-translate-y-1 shadow-md space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-train-gold/20">
                  <div className="flex items-center gap-2">
                    <OrnamentIcon type={wish.ornament_type} size={24} />
                    <span className="font-serif text-xs text-train-champagne font-bold">
                      {wish.nickname}
                    </span>
                  </div>
                  <span className="text-[10px] text-train-ivory/50 font-serif">
                    {new Date(wish.created_at).toLocaleDateString('ko-KR')}
                  </span>
                </div>
                <p className="font-korean text-xs text-train-ivory/85 leading-relaxed line-clamp-3">
                  "{wish.message}"
                </p>
              </div>
            ))}
          </div>
        )
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: Hang a Wish (오너먼트 달기 모달)                                 */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => !isSubmitting && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-lg w-full rounded-2xl bg-[#5d1212] border-2 border-train-gold/70 p-6 sm:p-8 shadow-brass-lg text-train-ivory"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => !isSubmitting && setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-train-ivory/60 hover:text-train-champagne"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1 mb-6">
                <span className="font-serif text-xs tracking-widest text-train-gold uppercase">
                  WISH TREE ON BOARD
                </span>
                <h3 className="font-serif text-2xl text-train-champagne font-bold">
                  트리에 오너먼트 달기
                </h3>
                <p className="text-xs text-train-ivory/70 font-korean">
                  당신의 기도와 응원을 담은 오너먼트를 선택해 트리에 매달아 주세요.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-lg bg-red-950/80 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Ornament Selection */}
                <div>
                  <label className="block font-serif text-xs text-train-gold uppercase tracking-wider mb-2">
                    1. 오너먼트 선택 (SELECT ORNAMENT)
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {ORNAMENT_TYPES.map((type) => {
                      const isSelected = selectedType === type.id;
                      const Icon = type.Component;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                            isSelected
                              ? 'border-train-champagne bg-train-burgundy shadow-brass scale-105'
                              : 'border-train-gold/30 bg-train-bg/60 hover:border-train-gold/60'
                          }`}
                        >
                          <Icon size={28} />
                          <span className="text-[10px] font-korean text-train-ivory/80 truncate w-full text-center">
                            {type.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Nickname */}
                <div>
                  <label className="block font-serif text-xs text-train-gold uppercase tracking-wider mb-1.5">
                    2. 닉네임 (NICKNAME)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-train-gold/60" />
                    <input
                      type="text"
                      required
                      maxLength={20}
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="탑승객 성함 또는 닉네임 (최대 20자)"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-train-gold/40 bg-train-bg text-xs sm:text-sm text-train-ivory placeholder:text-train-ivory/40 focus:outline-none focus:border-train-gold focus:ring-1 focus:ring-train-gold"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-serif text-xs text-train-gold uppercase tracking-wider">
                      3. 응원 및 소원 메시지 (MESSAGE)
                    </label>
                    <span className="text-[11px] text-train-ivory/50">
                      {message.length} / 200자
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      rows={3}
                      maxLength={200}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Train 1225와 LIQUID 단원들을 향한 따뜻한 응원과 축복을 남겨주세요."
                      className="w-full p-3 rounded-lg border border-train-gold/40 bg-train-bg text-xs sm:text-sm text-train-ivory placeholder:text-train-ivory/40 focus:outline-none focus:border-train-gold focus:ring-1 focus:ring-train-gold font-korean"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg border border-train-champagne bg-gradient-to-r from-train-burgundy via-[#792419] to-train-burgundy text-train-champagne font-serif text-xs sm:text-sm tracking-widest uppercase font-bold shadow-brass hover:shadow-brass-lg disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? '트리에 매다는 중...' : '오너먼트 트리에 매달기'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL 2: Read Wish Postcard (메시지 읽기 모달)                            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedWish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedWish(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="relative max-w-md w-full rounded-2xl bg-[#5d1212] border-2 border-train-gold/80 p-6 sm:p-8 shadow-brass-lg text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWish(null)}
                className="absolute top-4 right-4 p-2 text-train-ivory/60 hover:text-train-champagne"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-sway origin-top">
                <OrnamentIcon type={selectedWish.ornament_type} size={56} />
              </div>

              <span className="font-serif text-[11px] tracking-[0.25em] text-train-gold uppercase block">
                PASSENGER WISH POSTCARD
              </span>

              <h4 className="font-serif text-xl text-train-champagne font-bold mt-1">
                {selectedWish.nickname}
              </h4>

              <div className="my-6 p-5 rounded-xl border border-train-gold/30 bg-[#450d0d] shadow-inner">
                <p className="font-korean text-sm sm:text-base text-train-ivory leading-relaxed">
                  "{selectedWish.message}"
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-train-ivory/50 font-serif">
                <Clock className="w-3 h-3 text-train-gold" />
                <span>
                  {new Date(selectedWish.created_at).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
