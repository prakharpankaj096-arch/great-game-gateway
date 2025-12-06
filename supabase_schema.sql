-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read" ON public.contact_submissions;

-- Create the contact_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Grant permissions to the anon and authenticated roles
GRANT INSERT ON TABLE public.contact_submissions TO anon;
GRANT SELECT, INSERT ON TABLE public.contact_submissions TO authenticated;

-- Create a policy to allow anonymous inserts (for the contact form)
CREATE POLICY "Allow public inserts" 
ON public.contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create a policy to allow reading only by authenticated users
CREATE POLICY "Allow authenticated read" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);
