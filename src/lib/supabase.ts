import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzwjknpriytjobiiegcs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6d2prbnByaXl0am9iaWllZ2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMTkwMzgsImV4cCI6MjA1Mzg5NTAzOH0.8dalxGeUjhz8cb7HOCH3Tbpi-jdJ8hSvuOcJs0K7zNw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 