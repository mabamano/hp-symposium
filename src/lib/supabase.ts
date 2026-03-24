import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface House {
  id: string;
  name: string;
  points: number;
  color: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  house_id: string;
  events: string[];
  created_at: string;
}
