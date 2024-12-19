// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://okpvqguvhuhskvsackfs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcHZxZ3V2aHVoc2t2c2Fja2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDkwMjIsImV4cCI6MjA0NjIyNTAyMn0.iR9CxGwvdWi1le5EubWnkD7jdA0KNP2as5_0GiX3WkY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
