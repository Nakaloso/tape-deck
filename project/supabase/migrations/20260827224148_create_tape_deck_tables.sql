/*
# Create Tape Deck core tables

1. New Tables
- `tapes`: Stores uploaded tapes (music projects). Columns: id, title, artist, classification (ai/organic/hybrid),
  genre, mood, bpm, musical_key, duration, cover_url, description, skills_needed (text[]), 
  collaboration_status (open/closed/pitch-ready), rating, plays, created_at.
- `collab_requests`: Stores collaboration applications submitted via "Make It Real". Columns: id, tape_id (fk),
  applicant_name, applicant_role, message, skills (text[]), contact, status (pending/accepted/rejected), created_at.
- `tape_reviews`: Stores user-submitted reviews. Columns: id, tape_id (fk), reviewer_name, reviewer_role,
  rating, body, created_at.

2. Security
- All three tables have RLS enabled.
- Policies allow anon + authenticated CRUD (single-tenant, no auth — data is intentionally public/shared).

3. Notes
- `skills_needed` and `skills` are text arrays for filtering by required roles.
- `collab_requests.tape_id` references `tapes.id` with ON DELETE CASCADE.
- `tape_reviews.tape_id` references `tapes.id` with ON DELETE CASCADE.
- No user_id / auth.uid() — this is a no-auth MVP prototype.
*/

-- ── tapes ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tapes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  artist text NOT NULL,
  classification text NOT NULL DEFAULT 'organic' CHECK (classification IN ('ai', 'organic', 'hybrid')),
  genre text NOT NULL DEFAULT '',
  mood text NOT NULL DEFAULT '',
  bpm integer NOT NULL DEFAULT 120,
  musical_key text NOT NULL DEFAULT '',
  duration text NOT NULL DEFAULT '0:00',
  cover_url text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  skills_needed text[] NOT NULL DEFAULT '{}',
  collaboration_status text NOT NULL DEFAULT 'open' CHECK (collaboration_status IN ('open', 'closed', 'pitch-ready')),
  rating numeric NOT NULL DEFAULT 0,
  plays text NOT NULL DEFAULT '0',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tapes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_tapes" ON tapes;
CREATE POLICY "anon_select_tapes" ON tapes FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_tapes" ON tapes;
CREATE POLICY "anon_insert_tapes" ON tapes FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_tapes" ON tapes;
CREATE POLICY "anon_update_tapes" ON tapes FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_tapes" ON tapes;
CREATE POLICY "anon_delete_tapes" ON tapes FOR DELETE
  TO anon, authenticated USING (true);

-- ── collab_requests ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS collab_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tape_id uuid REFERENCES tapes(id) ON DELETE CASCADE,
  applicant_name text NOT NULL,
  applicant_role text NOT NULL,
  message text NOT NULL DEFAULT '',
  skills text[] NOT NULL DEFAULT '{}',
  contact text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE collab_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_collab_requests" ON collab_requests;
CREATE POLICY "anon_select_collab_requests" ON collab_requests FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_collab_requests" ON collab_requests;
CREATE POLICY "anon_insert_collab_requests" ON collab_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_collab_requests" ON collab_requests;
CREATE POLICY "anon_update_collab_requests" ON collab_requests FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_collab_requests" ON collab_requests;
CREATE POLICY "anon_delete_collab_requests" ON collab_requests FOR DELETE
  TO anon, authenticated USING (true);

-- ── tape_reviews ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tape_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tape_id uuid REFERENCES tapes(id) ON DELETE CASCADE,
  reviewer_name text NOT NULL,
  reviewer_role text NOT NULL DEFAULT '',
  rating numeric NOT NULL DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  body text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tape_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_tape_reviews" ON tape_reviews;
CREATE POLICY "anon_select_tape_reviews" ON tape_reviews FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_tape_reviews" ON tape_reviews;
CREATE POLICY "anon_insert_tape_reviews" ON tape_reviews FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_tape_reviews" ON tape_reviews;
CREATE POLICY "anon_update_tape_reviews" ON tape_reviews FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_tape_reviews" ON tape_reviews;
CREATE POLICY "anon_delete_tape_reviews" ON tape_reviews FOR DELETE
  TO anon, authenticated USING (true);

-- ── Indexes ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_tapes_classification ON tapes(classification);
CREATE INDEX IF NOT EXISTS idx_tapes_collaboration_status ON tapes(collaboration_status);
CREATE INDEX IF NOT EXISTS idx_collab_requests_tape_id ON collab_requests(tape_id);
CREATE INDEX IF NOT EXISTS idx_tape_reviews_tape_id ON tape_reviews(tape_id);
