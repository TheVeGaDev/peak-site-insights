-- Create ratings table
CREATE TABLE IF NOT EXISTS public.ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    service_type TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    approved BOOLEAN DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.ratings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read approved ratings
CREATE POLICY "Anyone can view approved ratings"
ON public.ratings
FOR SELECT
USING (approved = true);

-- Create policy to allow anyone to insert ratings (since no auth required)
CREATE POLICY "Anyone can insert ratings"
ON public.ratings
FOR INSERT
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_ratings_approved_created ON public.ratings(approved, created_at DESC);

-- Add comment to table
COMMENT ON TABLE public.ratings IS 'Customer ratings and reviews for furniture moving services';