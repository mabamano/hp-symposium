/*
  # BIZNOVEXA Database Schema

  ## Overview
  Creates the database structure for the BIZNOVEXA symposium website with Harry Potter theming.

  ## New Tables
  
  ### 1. `houses`
  Stores the four Hogwarts houses with their points
  - `id` (uuid, primary key)
  - `name` (text) - House name (Gryffindor, Slytherin, Ravenclaw, Hufflepuff)
  - `points` (integer) - Current house points
  - `color` (text) - House color hex code
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `registrations`
  Stores participant registrations
  - `id` (uuid, primary key)
  - `name` (text) - Participant name
  - `email` (text) - Email address
  - `phone` (text) - Phone number
  - `college` (text) - College name
  - `house_id` (uuid) - Foreign key to houses
  - `events` (jsonb) - Array of registered events
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access on houses
  - Add policies for authenticated insert on registrations
  - Add policies for public read on registrations (for leaderboard)
*/

-- Create houses table
CREATE TABLE IF NOT EXISTS houses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  points integer DEFAULT 0,
  color text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  college text,
  house_id uuid REFERENCES houses(id),
  events jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE houses ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Policies for houses table (public read)
CREATE POLICY "Anyone can view houses"
  ON houses FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can view houses"
  ON houses FOR SELECT
  TO authenticated
  USING (true);

-- Policies for registrations table
CREATE POLICY "Anyone can insert registrations"
  ON registrations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view registrations"
  ON registrations FOR SELECT
  TO anon
  USING (true);

-- Insert initial house data
INSERT INTO houses (name, points, color, description) VALUES
  ('Gryffindor', 0, '#740001', 'Where dwell the brave at heart'),
  ('Slytherin', 0, '#1a472a', 'Those cunning folk use any means to achieve their ends'),
  ('Ravenclaw', 0, '#0e1a40', 'Wit beyond measure is man''s greatest treasure'),
  ('Hufflepuff', 0, '#ecb939', 'Those patient Hufflepuffs are true and unafraid of toil')
ON CONFLICT (name) DO NOTHING;