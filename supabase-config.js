// ============================================
// SUPABASE CONFIGURATION
// ============================================
// 
// To set up online multiplayer:
// 1. Go to https://supabase.com and create a free account
// 2. Create a new project
// 3. Go to Settings → API
// 4. Replace the values below with your project details
//
// ============================================

const SUPABASE_URL = 'https://fhjaoiqfpvgpkwzdftvh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoamFvaXFmcHZncGt3emRmdHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NDU4MTksImV4cCI6MjA4NjAyMTgxOX0.-cd2TnoFuQ8woURcXXDYGLzf7tsxSOoyIiayFKrQETk';

// Don't modify below this line
window.SUPABASE_CONFIG = {
    url: SUPABASE_URL,
    key: SUPABASE_ANON_KEY,
    isConfigured: SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_ANON_KEY'
};
