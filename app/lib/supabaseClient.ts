// app/lib/supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_URL. Add it to your .env.local and restart the dev server.'
  );
}
if (!supabaseAnonKey) {
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Add it to your .env.local and restart the dev server.'
  );
}

// Ensure a single instance across HMR in dev
let _client: SupabaseClient | undefined;

export const supabase =
  _client ??
  (_client = createClient(supabaseUrl, supabaseAnonKey));