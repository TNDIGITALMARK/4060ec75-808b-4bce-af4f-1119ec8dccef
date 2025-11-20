// Check existing schema structure
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

console.log('Checking table structures...\n');

// Try to get sample data from each table
const { data: sessions, error: sessionsError } = await supabase
  .from('research_sessions')
  .select('*')
  .limit(1);

const { data: messages, error: messagesError } = await supabase
  .from('research_messages')
  .select('*')
  .limit(1);

const { data: settings, error: settingsError } = await supabase
  .from('research_settings')
  .select('*')
  .limit(1);

console.log('Research Sessions:', sessions || 'Empty table', sessionsError);
console.log('\nResearch Messages:', messages || 'Empty table', messagesError);
console.log('\nResearch Settings:', settings || 'Empty table', settingsError);
