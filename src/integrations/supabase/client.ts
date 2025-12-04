import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://smgaaihdgtcrxlstgpvh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZ2FhaWhkZ3Rjcnhsc3RncHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3ODEwNjUsImV4cCI6MjA4MDM1NzA2NX0.T1r4AzlyVmu4ITW_TfabldwwQ-xYX0LNeIbY3FcPDZk";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
