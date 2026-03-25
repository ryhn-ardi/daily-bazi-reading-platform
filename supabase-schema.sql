-- ══════════════════════════════════════════════
--  BaziHarian · Supabase Schema
--  Jalankan di: Supabase Dashboard → SQL Editor
-- ══════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS users (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name             TEXT NOT NULL,
  access_code      TEXT NOT NULL UNIQUE,
  birth_date       DATE NOT NULL,
  birth_time       TIME,
  gender           TEXT CHECK (gender IN ('male','female')) NOT NULL DEFAULT 'male',

  -- Bazi chart fields (bisa diisi manual atau auto-kalkulasi nanti)
  day_master       TEXT,
  year_pillar      TEXT,
  month_pillar     TEXT,
  day_pillar       TEXT,
  hour_pillar      TEXT,
  dominant_element TEXT,
  lucky_elements   TEXT,
  kua_number       INTEGER,

  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security: siapa saja bisa insert (daftar) dan baca dengan kode yang benar
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: boleh daftar (insert) tanpa auth
CREATE POLICY "Anyone can register"
  ON users FOR INSERT
  WITH CHECK (true);

-- Policy: boleh baca data sendiri via access_code
CREATE POLICY "Read by access code"
  ON users FOR SELECT
  USING (true);

-- Index untuk pencarian kode akses yang cepat
CREATE INDEX IF NOT EXISTS idx_users_access_code ON users (access_code);
