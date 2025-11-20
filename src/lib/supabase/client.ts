import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hfndfmtxhqvubnfiwzlz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA';
const supabaseScopedToken = process.env.NEXT_PUBLIC_SUPABASE_SCOPED_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiNDA2MGVjNzUtODA4Yi00YmNlLWFmNGYtMTExOWVjOGRjY2VmIiwianRpIjoiOGU5YjAyZTQtODkyNC00MjhmLWE5NjQtYWQ4ZTEzZWUxY2FiIiwiaWF0IjoxNzYzNjEyMDY0LCJleHAiOjE3NjM2MTQ3NjR9.bPQTbqoJRqRsSVGf0RiKQN85-47T-JS4s7045mBv1P8';

// Create Supabase client with scoped authentication
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      Authorization: `Bearer ${supabaseScopedToken}`
    }
  }
});

// Tenant and project IDs from scoped token
export const TENANT_ID = 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2';
export const PROJECT_ID = '4060ec75-808b-4bce-af4f-1119ec8dccef';
