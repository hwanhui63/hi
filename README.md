# LIQUID — TRAIN 1225 (공식 공연 웹사이트)
> **Liquid on Board — Immersive Vintage Christmas Train Concert**
> 한동대학교 대표 크리스천 공연 동아리 LIQUID의 2026 겨울 자체공연 「Train 1225」 공식 웹사이트

---

## 🚂 프로젝트 소개 (Concept)

2026년 겨울, 어둠을 뚫고 빛을 향해 달리는 빈티지 야간열차의 객실에서 관객들을 맞이하는 몰입형 웹 경험입니다.

- **컨셉**: Vintage Luxury Train, Christmas Night, Nostalgic Journey
- **공연 일시**:
  - **DAY 1**: 2026. 12. 04 (금) 20:30 (입장 18:30)
  - **DAY 2**: 2026. 12. 05 (토) 14:00, 16:00
- **공연 장소**: 한동대학교 학생회관(학관) 104호 (SU 104)
- **주제 말씀**: 로마서 8장 38-39절 (*"어떤 피조물이라도 우리를 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라"*)
- **문의**: 총괄 기획 전영효 (`010-4537-2654`) | 인스타그램 [@liquid_hgu](https://www.instagram.com/liquid_hgu/)

---

## 🎨 디자인 시스템 & 비주얼 아이덴티티

- **Background**: `#140B0A` (다크 마호가니)
- **Secondary Background**: `#241411`
- **Burgundy**: `#41201B`
- **Antique Gold**: `#B88B4A`
- **Champagne Gold**: `#EBD39A`
- **Midnight Blue**: `#111A28`
- **Warm Ivory**: `#F5E8D0`

---

## 🧭 페이지 구성

1. **HOME (`/`)**: 기차 창문 Hero 섹션, 눈 내리는 밤 설경, 동아리 소개(About LIQUID), 공식 포스터 프리뷰
2. **THE JOURNEY (`/concert`)**: 공연 기획 의도 및 스토리, 음악의 정거장들(SETLIST 노선도), 승객/승무원 명부(CAST 5개 그룹)
3. **WISH TREE (`/guestbook`)**: 창밖 트리에 5가지 오너먼트(레드 보블, 황금 별, 크리스마스 종, 리본, 선물상자) 달기 및 메시지 열람
4. **INFORMATION (`/info`)**: 3D 회전 실물 승차권, 개인 모바일 승차권 생성기, 회차별 타임테이블, 학관 104호 안내 및 주소 복사, 카카오 오픈채팅 공식 QR 연동
5. **MEMORIES (`/reviews`)**: 여행일지/엽서 디자인의 관객 후기 작성 및 열람 (공연 전 안내 메시지 & 테스트 모드 스위치 지원)

---

## 🛠️ 기술 스택

- **Frontend**: React 18, Vite 5, Tailwind CSS, Motion for React (`framer-motion`), React Router v6, Lucide React, Canvas Confetti
- **Audio**: Web Audio API (외부 파일 의존 없는 자체 합성 빈티지 열차 앰비언스 사운드)
- **Backend / Database**: Supabase (RLS 활성화, LocalStorage 데모 폴백 내장)
- **Deployment**: Vercel ready (`vercel.json` 내장)

---

## 🚀 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build
```

---

## 🗄️ Supabase 데이터베이스 연결 방법

1. [Supabase](https://supabase.com) 프로젝트 생성
2. `supabase/schema.sql` 파일의 내용을 Supabase SQL Editor에 복사하여 실행 (테이블 생성 및 RLS 정책 자동 적용)
3. `.env` 파일을 프로젝트 루트에 생성하고 API 키 입력:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
4. Supabase 연동 전에도 LocalStorage를 통한 오너먼트 및 후기 저장/조회가 100% 정상 작동합니다.

---

## 📁 데이터 커스터마이징 가이드

- `src/data/concert.js`: 공연 일시, 장소, 문의처, 로마서 말씀, 관람 안내
- `src/data/setlist.js`: 6개 정거장별 곡 정보, 원곡자, 팀 소개, 해석, 멤버
- `src/data/cast.js`: 디렉, 실기수, 아기기수, OB, 도움 주신 분들 명부
- `src/data/club.js`: LIQUID 동아리 소개글 및 링크
