// Test Supabase connection
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiNDA2MGVjNzUtODA4Yi00YmNlLWFmNGYtMTExOWVjOGRjY2VmIiwianRpIjoiOGU5YjAyZTQtODkyNC00MjhmLWE5NjQtYWQ4ZTEzZWUxY2FiIiwiaWF0IjoxNzYzNjEyMDY0LCJleHAiOjE3NjM2MTQ3NjR9.bPQTbqoJRqRsSVGf0RiKQN85-47T-JS4s7045mBv1P8`
      }
    }
  }
);

console.log('✅ Supabase client initialized');
console.log('Checking for existing research tables...\n');

// Check for existing tables
const tablesToCheck = ['research_sessions', 'research_messages', 'research_settings'];

for (const table of tablesToCheck) {
  const { error, count } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true });

  if (!error) {
    console.log(`✅ Table '${table}' exists with ${count} rows`);
  } else {
    console.log(`❌ Table '${table}' does not exist`);
  }
}

console.log('\nConnection test complete!');
