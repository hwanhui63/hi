-- ==============================================================================
-- LIQUID TRAIN 1225 — SUPABASE DATABASE SCHEMA & RLS POLICIES
-- ==============================================================================

-- 1. Create wishes table for WISH TREE
CREATE TABLE IF NOT EXISTS public.wishes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    ornament_type TEXT NOT NULL CHECK (ornament_type IN ('bauble', 'star', 'bell', 'ribbon', 'gift')),
    nickname VARCHAR(20) NOT NULL CHECK (char_length(trim(nickname)) >= 1),
    message VARCHAR(200) NOT NULL CHECK (char_length(trim(message)) >= 2),
    position_x INTEGER DEFAULT 50 CHECK (position_x >= 15 AND position_x <= 85),
    position_y INTEGER DEFAULT 50 CHECK (position_y >= 15 AND position_y <= 85),
    is_hidden BOOLEAN DEFAULT FALSE
);

-- Index for fast ordering
CREATE INDEX IF NOT EXISTS wishes_created_at_idx ON public.wishes (created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.wishes ENABLE ROW LEVEL SECURITY;

-- Anonymous users can read non-hidden wishes
CREATE POLICY "Allow public read wishes"
ON public.wishes FOR SELECT
TO anon, authenticated
USING (is_hidden = false);

-- Anonymous users can insert wishes with valid length
CREATE POLICY "Allow public insert wishes"
ON public.wishes FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(trim(nickname)) >= 1 AND
    char_length(trim(nickname)) <= 20 AND
    char_length(trim(message)) >= 2 AND
    char_length(trim(message)) <= 200
);

-- ==============================================================================
-- 2. Create reviews table for MEMORIES
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    nickname VARCHAR(20) NOT NULL CHECK (char_length(trim(nickname)) >= 1),
    rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    content VARCHAR(500) NOT NULL CHECK (char_length(trim(content)) >= 2),
    is_hidden BOOLEAN DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON public.reviews (created_at DESC);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read reviews"
ON public.reviews FOR SELECT
TO anon, authenticated
USING (is_hidden = false);

CREATE POLICY "Allow public insert reviews"
ON public.reviews FOR INSERT
TO anon, authenticated
WITH CHECK (
    char_length(trim(nickname)) >= 1 AND
    char_length(trim(nickname)) <= 20 AND
    char_length(trim(content)) >= 2 AND
    char_length(trim(content)) <= 500
);
