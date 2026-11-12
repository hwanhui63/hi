import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('https://') &&
  supabaseAnonKey.length > 20
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  : null;

/**
 * Local Storage Fallback Data Keys
 */
const STORAGE_KEY_WISHES = 'liquid_train1225_wishes';
const STORAGE_KEY_REVIEWS = 'liquid_train1225_reviews';
const RATE_LIMIT_KEY_WISH = 'liquid_last_wish_time';
const RATE_LIMIT_KEY_REVIEW = 'liquid_last_review_time';

// Default initial wishes for immediate demo delight
const INITIAL_DEMO_WISHES = [
  {
    id: 'demo-1',
    ornament_type: 'star',
    nickname: '한동 순례자',
    message: 'Train 1225 열차가 싣고 갈 따스한 찬양들이 차가운 겨울을 녹이기를!',
    created_at: '2026-11-12T10:00:00Z',
    position_x: 50,
    position_y: 22,
  },
  {
    id: 'demo-2',
    ornament_type: 'bell',
    nickname: '기차지기',
    message: '어떤 환난도 끊을 수 없는 그 사랑을 기대하며 탑승합니다. 리퀴드 파이팅!',
    created_at: '2026-11-12T12:30:00Z',
    position_x: 35,
    position_y: 42,
  },
  {
    id: 'demo-3',
    ornament_type: 'bauble',
    nickname: '26학번 새내기',
    message: '크리스마스 야간열차 콘서트라니 너무 낭만적이에요. 학관 104호에서 만나요!',
    created_at: '2026-11-12T14:15:00Z',
    position_x: 65,
    position_y: 48,
  },
  {
    id: 'demo-4',
    ornament_type: 'ribbon',
    nickname: '리퀴드 OB',
    message: '후배님들의 귀한 무대를 항상 기도로 응원합니다. 풍성한 은혜의 시간 되길!',
    created_at: '2026-11-12T16:00:00Z',
    position_x: 42,
    position_y: 68,
  },
  {
    id: 'demo-5',
    ornament_type: 'gift',
    nickname: '열차 승객',
    message: '로마서 8장 38-39절의 고백이 무대 위에서 아름답게 울려 퍼지길 기도합니다.',
    created_at: '2026-11-12T17:45:00Z',
    position_x: 58,
    position_y: 72,
  },
];

// Initial demo reviews
const INITIAL_DEMO_REVIEWS = [
  {
    id: 'rev-demo-1',
    nickname: '1225 승객 01',
    rating: 5,
    content: '학관 104호가 정말 오래된 유럽의 기차 객실이 된 듯한 환상적인 무대였습니다. 첫 곡부터 마지막 피날레까지 가슴 벅찬 감동이었어요.',
    created_at: '2026-12-04T22:30:00Z',
  },
  {
    id: 'rev-demo-2',
    nickname: '한동인',
    rating: 5,
    content: '눈 내리는 창문 연출과 촛불 조명이 너무 아름다웠습니다. 기말고사 전 큰 위로를 얻고 갑니다.',
    created_at: '2026-12-05T15:40:00Z',
  },
];

/* -------------------------------------------------------------------------- */
/*                               WISHES SERVICE                               */
/* -------------------------------------------------------------------------- */

export async function fetchWishes() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (!error && data) {
        return { data, isFallback: false };
      }
      console.warn('Supabase fetch failed, falling back to local storage:', error);
    } catch (err) {
      console.warn('Supabase error:', err);
    }
  }

  // Fallback to localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WISHES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_WISHES, JSON.stringify(INITIAL_DEMO_WISHES));
      return { data: INITIAL_DEMO_WISHES, isFallback: true };
    }
    return { data: JSON.parse(raw), isFallback: true };
  } catch {
    return { data: INITIAL_DEMO_WISHES, isFallback: true };
  }
}

export async function submitWish({ ornamentType, nickname, message, positionX, positionY }) {
  // Input validation
  const cleanNickname = (nickname || '').trim().slice(0, 20);
  const cleanMessage = (message || '').trim().slice(0, 200);

  if (!cleanNickname) throw new Error('닉네임을 입력해 주세요.');
  if (!cleanMessage) throw new Error('응원 메시지를 입력해 주세요.');

  // Rate Limiting (1 message every 15 seconds)
  const lastTime = parseInt(localStorage.getItem(RATE_LIMIT_KEY_WISH) || '0', 10);
  const now = Date.now();
  if (now - lastTime < 15000) {
    const waitSec = Math.ceil((15000 - (now - lastTime)) / 1000);
    throw new Error(`너무 빠르게 작성하셨습니다. ${waitSec}초 후 다시 시도해 주세요.`);
  }

  const newWish = {
    id: 'wish-' + Date.now(),
    ornament_type: ornamentType || 'bauble',
    nickname: cleanNickname,
    message: cleanMessage,
    position_x: positionX ?? Math.floor(25 + Math.random() * 50),
    position_y: positionY ?? Math.floor(20 + Math.random() * 60),
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .insert([
          {
            ornament_type: newWish.ornament_type,
            nickname: newWish.nickname,
            message: newWish.message,
            position_x: newWish.position_x,
            position_y: newWish.position_y,
          },
        ])
        .select()
        .single();

      if (!error && data) {
        localStorage.setItem(RATE_LIMIT_KEY_WISH, String(now));
        return { data, isFallback: false };
      }
      console.warn('Supabase insert failed, storing locally:', error);
    } catch (err) {
      console.warn('Supabase error during insert:', err);
    }
  }

  // Local storage save
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WISHES);
    const list = raw ? JSON.parse(raw) : INITIAL_DEMO_WISHES;
    list.unshift(newWish);
    localStorage.setItem(STORAGE_KEY_WISHES, JSON.stringify(list));
    localStorage.setItem(RATE_LIMIT_KEY_WISH, String(now));
    return { data: newWish, isFallback: true };
  } catch (e) {
    throw new Error('오너먼트 저장 중 오류가 발생했습니다: ' + e.message);
  }
}

/* -------------------------------------------------------------------------- */
/*                               REVIEWS SERVICE                              */
/* -------------------------------------------------------------------------- */

export async function fetchReviews() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (!error && data) {
        return { data, isFallback: false };
      }
    } catch (err) {
      console.warn('Supabase reviews error:', err);
    }
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY_REVIEWS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(INITIAL_DEMO_REVIEWS));
      return { data: INITIAL_DEMO_REVIEWS, isFallback: true };
    }
    return { data: JSON.parse(raw), isFallback: true };
  } catch {
    return { data: INITIAL_DEMO_REVIEWS, isFallback: true };
  }
}

export async function submitReview({ nickname, rating, content }) {
  const cleanNickname = (nickname || '').trim().slice(0, 20);
  const cleanContent = (content || '').trim().slice(0, 500);

  if (!cleanNickname) throw new Error('닉네임을 입력해 주세요.');
  if (!cleanContent) throw new Error('공연 후기를 입력해 주세요.');

  // Rate Limiting
  const lastTime = parseInt(localStorage.getItem(RATE_LIMIT_KEY_REVIEW) || '0', 10);
  const now = Date.now();
  if (now - lastTime < 30000) {
    const waitSec = Math.ceil((30000 - (now - lastTime)) / 1000);
    throw new Error(`너무 빠르게 작성하셨습니다. ${waitSec}초 후 다시 시도해 주세요.`);
  }

  const newReview = {
    id: 'rev-' + Date.now(),
    nickname: cleanNickname,
    rating: Number(rating) || 5,
    content: cleanContent,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            nickname: newReview.nickname,
            rating: newReview.rating,
            content: newReview.content,
          },
        ])
        .select()
        .single();

      if (!error && data) {
        localStorage.setItem(RATE_LIMIT_KEY_REVIEW, String(now));
        return { data, isFallback: false };
      }
    } catch (err) {
      console.warn('Supabase insert review error:', err);
    }
  }

  // Local storage save
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REVIEWS);
    const list = raw ? JSON.parse(raw) : INITIAL_DEMO_REVIEWS;
    list.unshift(newReview);
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(list));
    localStorage.setItem(RATE_LIMIT_KEY_REVIEW, String(now));
    return { data: newReview, isFallback: true };
  } catch (e) {
    throw new Error('후기 저장 중 오류가 발생했습니다: ' + e.message);
  }
}
